import React, { Component } from 'react';
import Image from 'ui/Image';
import classnames from 'classnames';
import css from 'assets/styles/screen.css';


export default class Screen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      position: 0
    }
    this.theme = this.props.theme ? this.props.theme : {}
  }

  render() {
    return (
      <section
        id={this.props.id}
        className={classnames(css.screen, this.theme.screen)}
        style={{
          transitionDuration: this.props.transitionDuration,
          transform: `translateX(${this.state.position}px)`
        }}
        data-index={this.props.index}
        >
        <Image
          title={this.props.image.title}
          image={this.props.image.name}
          ref="image"
        />
      </section>
    )
  }

  /**
   * Move the screen X quantity of pixels
   * 
   * @param position pixels to move
   * @return {Promise} when the screen has been moved.
   */
  move(position) {
    return new Promise((resolve, reject) => {
      this.setState({ position }, () => resolve());
    });
  }

  loadImage() {
    this.refs.image.load();
  }

  getPosition() {
    return this.state.position;
  }
}
