import React, { Component } from 'react';
import EventEmitter from 'eventemitter2';
import Draggable from 'react-draggable';
import classnames from 'classnames';
import { Header, Screen, Control } from 'ui/index';
import typeChecker from 'util/typeChecker';
import css from 'assets/styles/portrait.css';
import 'whatwg-fetch'; // window.fetch polyfill


export default class Artwork extends Component {

  constructor(props) {
    super(props);
    this.validateSettings();
    this.isValid = true;
    this.state = {
      images: [],
      draggable: this.props.draggable,
    };
    // to manage events between components
    this.emitter = new EventEmitter();
    this.currentScreen = 0;
    this.theme = this.props.theme ? this.props.theme : {};
  }

  getChildContext() {
    return {
      emitter: this.emitter
    }
  }

  render() {
    if (this.isValid) {
      return (
        <Draggable
          disabled={!this.state.draggable}
          allowAnyClick={false}
          bounds={this.props.containment ? "parent": null}
        >
          <div
            ref="el"
            id={this.props.id}
            className={classnames(css.portrait, this.theme.portrait, 
                                  this.state.draggable ? css.draggable 
                                  + ' ' + this.theme.draggable : null)}
            style={{
              width: this.props.width,
              height: this.props.height,
            }}
          >
            <Header
              ref="header"
              showToggleDrag={this.props.draggable}
              theme={this.theme}
            />
            <main
              className={classnames(css.body, this.theme.body)}
            >
            {
              this.state.images.map((image, i) => (
                <Screen
                  ref={`screen${i}`}
                  key={i}
                  image={image}
                  transitionDuration={this.props.transitionDuration}
                  theme={this.theme}
                />
              ))
            }
            </main>
            <Control
              ref="control"
              imagesCount={this.state.images.length}
              theme={this.theme}
            />
          </div>
        </Draggable>
      );
    } else {
      return (
        <h3 style={{ color: "red", fontFamily: "lato" }}>
          There is errors in your code
        </h3>
      );
    }
  }

  /**
   * When the component is rendered, it need to fetch
   * the images from the folde if the option inline
   * is disabled. Otherwise, just update the state of
   * images.
   */
  componentDidMount() {
    if (this.props.inline === false) {
      let path = `${window.location}${this.props.source}`;
      fetch(`${path}/data.json`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            images: data.map(imgData => {
              let name = `${path}/${imgData.name}`;
              let title = imgData.title;
              return { title, name }
            })
          }, () => {
            this.configure();
            this.sortScreens();
            this.start();
          });
        });
    } else {
      this.setState({
        images: this.props.images
      }, () => {
        this.configure();
        this.sortScreens();
        this.start();
      });
    }
    
  }

  start() {
    this.refs.control.active(0);
    this.screens()[this.currentScreen].loadImage();
  }

  /**
   * Change the screen. After move the screen, it
   * compares de screen index with the curret 
   * screen in the foreach and if match, load
   * the image asociated with this screen.
   * 
   * @param index the index of the screen to show
   */
  onChangeScreen(index) {
    const toMove = this.props.width * (index - this.currentScreen);
    this.screens().forEach((screen, i) => {
      let pos = screen.getPosition() - toMove;
      screen.move(pos).then(() => {
        if (index === i) {
          screen.loadImage();
          this.currentScreen = index;
        }
      })
    });
  }

  onChangeTitle(newTitle) {
    this.refs.header.changeTitle(newTitle);
  }

  onToggleDrag() {
    this.setState({
      draggable: !this.state.draggable
    });
  }

  /**
   * Sort the screens one after another inline.
   */
  sortScreens() {
    this.screens().forEach((v, i) => {
      let screen = this.refs[`screen${i}`];
      let pixels = i * this.props.width;
      screen.move(pixels);
    });
  }

  /**
   * @return {Array} screens
   */
  screens() {
    return [...Array(this.state.images.length)].map((v, i) => (
      this.refs[`screen${i}`]
    ));
  }

  /**
   * Configure the component (styles, events, etc.)
   */
  configure() {
    if (this.isValid) {
      if(this.props.containment) {
        this.refs.el.parentNode.style.position = 'relative';
      }
      if(this.props.shadow) {
        this.refs.el.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.22),'+
                                        '0 14px 56px rgba(0, 0, 0, 0.25)';
      }
      this.refs.el.style.borderRadius = `${this.props.radius}px`;
      this.emitter.on('changeScreen', this.onChangeScreen.bind(this));
      this.emitter.on('changeTitle', this.onChangeTitle.bind(this));
      this.emitter.on('toggleDrag', this.onToggleDrag.bind(this));
    }
  }

  /**
   * Validate the options of the component before render it.
   */
  validateSettings() {
    try {
      if (!typeChecker.isNumber(this.props.height) || this.props.height <= 0) {
        throw new Error('You need to provide a valid width');
      }
      if (!typeChecker.isNumber(this.props.width) || this.props.width <= 0) {
        throw new Error('You need to provide a valid width');
      }
      /*if (!typeChecker.isNumber(this.props.interval) || this.props.interval <= 0) {
        throw new Error('You need to provide a valid interval');
      }*/
      if (!typeChecker.isBoolean(this.props.inline)) {
        throw new Error('inline option accepts only boolean values');
      }
      if(!typeChecker.isBoolean(this.props.shadow)) {
        throw new Error('shadow option accepts only boolean values');
      }
      if (!typeChecker.isArray(this.props.images) && this.props.inline) {
        throw new Error('Images option accepts only an array');
      }
      if (this.props.inline === false && !typeChecker.isString(this.props.source)) {
        throw new Error('You need to provide a valid source');
      }
      if (!typeChecker.isNumber(this.props.radius) || this.props.radius < 0) {
        throw new Error('Invalid radius value. Must be greater than 0');
      }
      if (!typeChecker.isStringNumber(this.props.transitionDuration)) {
        throw new Error('Invalid transition duration. Must be greater than 0s');
      }
      if (!typeChecker.isBoolean(this.props.draggable)) {
        throw new Error('draggable argument accepts only boolean values');
      }
      if(this.props.inline && !this.props.images.length) {
        throw new Error('You need to provide the inline images or remove' +
                        ' the inline option and pass a valid source with images');
      }
    } catch (error) {
      this.isValid = false;
      console.error(error);
    }
  }
}

Artwork.defaultProps = {
  radius: 0,
  draggable: false,
  transitionDuration: '1s',
  inline: false,
  images: [],
  containment: false,
  shadow: false
}

Artwork.childContextTypes = {
  emitter: React.PropTypes.object
}
