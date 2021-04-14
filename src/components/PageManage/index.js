import React from 'react';
import { connect } from 'react-redux';
import Draggable from 'react-draggable'; // The default
import {
  Button, Tabs, Icon, Row, Col, Tooltip,
} from 'antd';

import './index.scss';
import {
  addPage, changeActivePage, copyPage, deletePage,
} from '../../store/action';
import LevelManage from '../LevelManage';

const { TabPane } = Tabs;

class PageManage extends React.Component {
  onAddPage = () => {
    const { dispatch } = this.props;
    dispatch(addPage());
  }

  onCopy = (e) => {
    e.stopPropagation();
    const { dispatch } = this.props;
    dispatch(copyPage());
  }

  onDelete = (e) => {
    e.stopPropagation();
    const { dispatch } = this.props;
    dispatch(deletePage());
  }

  changePage = pageIndex => () => {
    const { dispatch } = this.props;
    dispatch(changeActivePage(pageIndex));
  }


  render() {
    const { pages, activePage } = this.props;
    return (
      <Draggable
        axis="both"
        handle=".component-page-manage-container > .header"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <section className="component-page-manage-container">
          <header className="header">页面管理</header>
          <Tabs className="tabs-content">
            <TabPane tab="页面" key="1">
              <div className="content">
                {
                  pages.map((it, index) => (
                    <div
                      key={index}
                      onClick={this.changePage(index)}
                      className={activePage === index ? 'page-item active' : 'page-item'}
                    >
                      <div className="index">{index + 1}</div>
                      <div className="describe">
                        <Row type="flex" justify="space-between">
                          <Col>{`第${index + 1}页`}</Col>
                          {
                            activePage === index && (
                            <Col>
                              <Tooltip placement="top" title="复制页面">
                                <Icon onClick={this.onCopy} type="copy" alt="复制页面" />
                              </Tooltip>
                              { pages.length > 1 && <Tooltip placement="top" title="删除页面"><Icon className="delete" onClick={this.onDelete} type="delete" alt="删除页面" /></Tooltip>}
                            </Col>
                            )
                          }
                        </Row>
                      </div>
                    </div>
                  ))
                }
                <div className="text-center m-t-8">
                  <Button onClick={this.onAddPage} type="primary">新增页面</Button>
                </div>
              </div>
            </TabPane>
            <TabPane tab="图层" key="2">
              <LevelManage />
            </TabPane>
          </Tabs>

        </section>
      </Draggable>
    );
  }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const { pages, activePage } = state;
  const result = { pages, activePage };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(PageManage);
