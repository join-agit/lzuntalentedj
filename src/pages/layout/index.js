import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
} from 'antd';
import NavHeader from '../Header';

import './index.scss';

const { Header, Content } = Layout;// 引入样式文件

class LayoutFrame extends React.Component {
  static propTypes = {
    children: PropTypes.object,
  }

  static defaultProps = {
    children: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      tag: 0,
    };
  }

  render() {
    const { menus, tag, defaultName } = this.state;
    const { children } = this.props;
    return (
      <Layout className="layout">
        <Header className="layout-header-container">
          <NavHeader />
        </Header>
        <Content className="layout-content-container">
          {
            children
          }
        </Content>
      </Layout>
    );
  }
}

export default LayoutFrame;
