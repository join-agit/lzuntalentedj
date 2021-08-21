import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from './store';
import App from './app';
import ConfigProvide from './context/provider';

import './style';

export default function LzDesign(props) {
  const { onPublish, libs } = props;
  return (
    <Provider store={store}>
      <ConfigProvide config={{ onPublish, libs }}>
        <App />
      </ConfigProvide>
    </Provider>
  );
}

LzDesign.propTypes = {
  // 发布按钮点击
  onPublish: PropTypes.func.isRequired,
  // 弹出库
  libs: PropTypes.shape({
    // 图片库
    picture: PropTypes.shape({
      initData: PropTypes.array.isRequired,
      fetchPromise: PropTypes.func.isRequired,
      upLoadProps: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};
