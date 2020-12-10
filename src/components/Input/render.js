import React from 'react';
import PropTypes from 'prop-types';
// import { Input } from 'antd';
import Layout from '../EditItem/render';

function Text(props) {
  const { color, fontSize, text } = props;
  return (
    <div
      style={{
        width: '100%',
        minHeight: '40px',
        padding: 10,
        color,
        fontSize,
      }}
    >
      {text}
    </div>
  );
}
export default Layout(Text);
