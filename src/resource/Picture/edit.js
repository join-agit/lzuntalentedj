import React from 'react';
import PropTypes from 'prop-types';
import Picture from './Picture';

class PictureEdit extends React.Component {
  static propTypes = {
    resetHeight: PropTypes.func.isRequired,
    imgSrc: PropTypes.string,
  }

  static defaultProps = {
    imgSrc: '',
  }

  onLoad = () => {
    const { resetHeight } = this.props;
    resetHeight();
  }

  render() {
    const { imgSrc } = this.props;
    return (
      <Picture imgSrc={imgSrc} onLoad={this.onLoad} />
    );
  }
}

export default PictureEdit;
