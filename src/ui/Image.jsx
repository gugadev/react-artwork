import React, { Component } from 'react';
import defaultLoading from 'assets/img/loading.gif';


export default class Image extends Component {

  constructor(props) {
    super(props);
    this.isLoaded = false;
    this.state = {
      image: this.props.loadingImage
        ? this.props.loadingImage
        : defaultLoading
    };
  }

  render() {
    return (
      <img
        id={this.props.id}
        ref="img"
        src={this.state.image}
        data-loading={true}
      >
      </img>
    );
  }

  /**
   * Load the real image. This method  is called
   * by the parent (screen) when it is shown.
   * This method only could be fired once by image.
   */
  load() {
    if (!this.isLoaded) {
      this.setState({
        image: this.props.image
      }, () => {
        this.refs.img.onload = () => {
          this.refs.img.removeAttribute('data-loading');
          this.isLoaded = true;
        }
      });
    }
    this.context.emitter.emit('changeTitle', this.props.title);
  }
}

Image.contextTypes = {
  emitter: React.PropTypes.object
}
