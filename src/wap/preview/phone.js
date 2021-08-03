import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 're-carousel';

// 引入样式文件
import './index.scss';
import { getComponentRenderMap } from '../../core/components';
import { winSize } from '../../utils';
import Music from '../../utils/music';
import MusicIcon from './music';

let marginTop = 0;
function getTop() {
  const height = window.innerHeight;
  if (height > winSize.height) {
    marginTop = (height - winSize.height) / 2;
  }
}

// 解决音乐不自动播放问题
// function addEventListen(cb) {
//   window.document.addEventListener('touchstart', () => {
//     cb();
//   });
// }

class RealPreview extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      activePageIndex: 0,
      lastData: null,
    };
    this.musicHandler = new Music();
    this.magicRefs = {};
    getTop();
  }

  static getDerivedStateFromProps(props, state) {
    const { lastData } = state;
    if (lastData !== props.data) {
      return Object.assign(state, { lastData: props.data });
    }
    return null;
  }

  onTransitionEnd = (e) => {
    const { current } = e;
    const index = current.firstElementChild.getAttribute('data-index');
    this.setState({ activePageIndex: +index });
  }

  renderComponent() {
    const { data } = this.props;
    const { activePageIndex } = this.state;
    return data.list.map((item, index) => {
      const style = {
        position: 'relative',
        height: winSize.height,
        display: 'none',
        marginTop,
        overflow: 'hidden',
      };
      if (activePageIndex === index) style.display = 'block';
      return (
        <div key={index} data-index={index} style={style}>
          {
              item.map((it, idx) => {
                const { type, animates = [], ...others } = it;
                const Component = getComponentRenderMap(type);
                return (
                  <Component
                    show={style.display === 'block'}
                    animates={[...animates]}
                    {...others}
                    key={idx}
                  />
                );
              })
            }
        </div>
      );
    });
  }

  render() {
    const { data } = this.props;
    if (!data) return null;
    const style = {
      backgroundImage: `url(${data.backGroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
    return (
      <div className="content" style={style}>
        <Carousel onTransitionEnd={this.onTransitionEnd} axis="y">
          {
            this.renderComponent()
          }
        </Carousel>
        {
          data.backMusicUrl && (<MusicIcon backMusicUrl={data.backMusicUrl} />)
        }
      </div>
    );
  }
}

export default RealPreview;
