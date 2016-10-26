import React, { Component } from 'react';
import { default as Tooltip } from 'react-tooltip';
import classnames from 'classnames';
import moveIcon from 'assets/img/move.png';
import css from 'assets/styles/header.css';
import tip from 'assets/styles/popup.css';


export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.defaultTitle
    }
    this.theme = this.props.theme ? this.props.theme : {}
  }

  render() {
    const button = (
      <button
            className={css.settings}
            onClick={this.toggleDrag.bind(this)}
            data-tip
            data-for="icon"
          >
          <img src={moveIcon} />
      </button>
    );
    return (
      <header
        id={this.props.id}
        className={classnames(css.header, this.theme.header, "no-cursor")}
        >
        <h3>{this.state.title}</h3>
        {
          this.props.showToggleDrag ? button : null
        }
        <Tooltip 
                id="icon" 
                place="left" 
                type="dark" 
                effect="solid" 
                class={tip.popup + ' ' + tip['place-left']}
        >
          <span>Toggle drag</span>
        </Tooltip>
      </header>
    );
  }

  /**
   * Emit an event to toggle the drag behaviour
   */
  toggleDrag(e) {
    this.context.emitter.emit('toggleDrag', {});
  }

  changeTitle(newTitle) {
    this.setState({
      title: newTitle
    });
  }
}

Header.contextTypes = {
  emitter: React.PropTypes.object
}
