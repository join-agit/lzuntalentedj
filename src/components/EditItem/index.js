/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  POINT_LEFT_CENTER, POINT_RIGHT_CENTER, POINT_TOP_CENTER, POINT_BOTTOM_CENTER, ALL_ITEM,
} from './constants';
import './event';

import './index.scss';
import { createId } from '../../utils/IDManage';
import {
  createItemStore, startMove, resetContentHeight, changeActiveEditKey, addAttrs, changeAttrs,
} from './action';

const refNames = {
  content: 'content',
};

export default function (Component) {
  // 唯一id
  const uniqueId = createId();
  class Layout extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      activeEditKey: PropTypes.string.isRequired,
    }

    constructor(props) {
      super(props);
      const { dispatch } = props;
      this.magicRefs = {};
      this.childDownFlag = false;
      dispatch(createItemStore(uniqueId));
    }

    componentDidMount() {
      this.resetHeight();
    }

    // 重置高度
    resetHeight = () => {
      const { dispatch } = this.props;
      const elem = this.magicRefs[refNames.content];
      if (elem) {
        const height = elem.clientHeight;
        dispatch(resetContentHeight({ height, key: uniqueId }));
      }
    }

    onScale = flag => () => {
      const { dispatch, activeEditKey } = this.props;
      if (activeEditKey !== uniqueId) {
        dispatch(changeActiveEditKey(uniqueId));
        return;
      }
      if (flag === ALL_ITEM && this.childDownFlag) {
        return;
      }
      if (flag !== ALL_ITEM) this.childDownFlag = true;
      dispatch(startMove(flag));
    }

    // 设置魔术引用
    setMagicRefs = name => (r) => { this.magicRefs[name] = r; }

    setChildDownFLag = () => {
      this.childDownFlag = false;
    }

    setAttrs = (attrs) => {
      const { dispatch } = this.props;
      dispatch(addAttrs(attrs, uniqueId));
    }

    render() {
      const {
        width, left, top, height, activeEditKey, attrs,
      } = this.props;
      const cls = activeEditKey === uniqueId ? 'edit-item' : 'edit-item edit-item-not-active';
      return (
        <div
          className={cls}
          onMouseDown={this.onScale(ALL_ITEM, false)}
          style={{
            width,
            left,
            top,
            height,
          }}
        >
          {
            activeEditKey === uniqueId
            && (
              <ul className="ctrl-container">
                <li className="line l" />
                <li className="line r" />
                <li className="line t" />
                <li className="line b" />
                <li
                  className="point lc"
                  onMouseDown={this.onScale(POINT_LEFT_CENTER)}
                  onMouseUp={this.setChildDownFLag}
                />
                <li
                  className="point rc"
                  onMouseDown={this.onScale(POINT_RIGHT_CENTER)}
                  onMouseUp={this.setChildDownFLag}
                />
                <li
                  className="point tc"
                  onMouseDown={this.onScale(POINT_TOP_CENTER)}
                  onMouseUp={this.setChildDownFLag}
                />
                <li
                  className="point bc"
                  onMouseDown={this.onScale(POINT_BOTTOM_CENTER)}
                  onMouseUp={this.setChildDownFLag}
                />
              </ul>
            )
          }
          <div
            className="content-container"
            ref={this.setMagicRefs(refNames.content)}
          >
            <Component resetHeight={this.resetHeight} setAttrs={this.setAttrs} {...attrs} />
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = (store) => {
    const state = store.toJS();
    const { editList, activeEditKey } = state;
    const item = editList[uniqueId];
    const result = { uniqueId, activeEditKey };
    if (item) return Object.assign(result, item.current);
    return result;
  };

  const mapDispatchToProps = dispatch => ({ dispatch });
  return connect(mapStateToProps, mapDispatchToProps)(Layout);
}
