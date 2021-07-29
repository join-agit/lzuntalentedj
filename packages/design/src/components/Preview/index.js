import React from 'react';
import { Drawer, Input, Button } from 'antd';
import Content from './content';

export default function Preview(props) {
  const { visible, hidePreview } = props;
  return (
    <Drawer
      title="作品信息"
      placement="right"
      visible={visible}
      getContainer={false}
      destroyOnClose
      className="drawer-preview"
      onClose={hidePreview}
      closable
    >
      <Content />
    </Drawer>
  );
}
