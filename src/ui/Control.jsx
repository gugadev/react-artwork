import React, {Component} from 'react';
import classnames from 'classnames';
import css from 'assets/styles/control.css';

export default class Control extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1
    }
    this.theme = this.props.theme ? this.props.theme : {};
  }

  render() {
    return (
      <footer
        ref="control"
        id={this.props.id}
        className={classnames(css.control, this.theme.control, "no-cursor")}>
        {
          [...Array(this.props.imagesCount)].map((v, i) => (
            <button
              key={i}
              data-index={i}
              className={this.state.activeIndex === i ? css.active + ' ' 
                          + this.theme.active: null}
              onClick={this.showPage.bind(this)}
            >
            </button>
          ))
        }
      </footer>
    );
  }

  /**
   * Enable a button by it's index
   * 
   * @param index the index of the button
   */
  active(index, cb) {
    this.setState({
      activeIndex: index
    }, () => {
      if(typeof cb === 'function') {
        cb();
      }
    });
  }

  /**
   * Emit an event to show a screen by it's index
   */
  showPage(e) {
    let index = Number(e.target.getAttribute('data-index'));
    this.active(index, () => {
      this.context.emitter.emit('changeScreen', index);
    });
  }
}

Control.contextTypes = {
  emitter: React.PropTypes.object
}
