import React from 'react';
import {
  Select, Row, Col, Input,
} from 'antd';
import { connect } from 'react-redux';
import getSelectOptions from './config';
import { changeAnimation } from '../../../../store/action';
import { ANIMATE_REPEAT_INFINITE, ANIMATE_REPEAT_NORMAL } from '../../../../core/constants';

const opts = getSelectOptions();
const { Option, OptGroup } = Select;

class Animation extends React.Component {
  setBaseStyle = key => (e) => {
    const { dispatch, activeEditKey } = this.props;
    const { target } = e;
    let value = e;
    if (target) {
      value = +target.value;
    }
    dispatch(changeAnimation({ [key]: value }, activeEditKey));
  }

  render() {
    const {
      animate, activeEditKey, dispatch, animateDuration, animateDelay, animateRepeat,
    } = this.props;
    const {
      name, delay, repeat, duration,
    } = animate;
    return (
      <div className="animate-container">
        <Row align="middle" type="flex" gutter={8}>
          <Col span={8}>动画名称</Col>
          <Col span={16}>
            <Select
              onChange={(e) => {
                dispatch(changeAnimation({
                  name: e,
                }, activeEditKey));
              }}
              style={{ width: '100%' }}
              value={name}
            >
              {
                Object.keys(opts).map(item => (
                  <OptGroup label={item} key={item}>
                    {
                        opts[item].map(it => <Option value={it} key={it}>{it}</Option>)
                    }
                  </OptGroup>
                ))
              }
            </Select>
          </Col>
        </Row>
        <Row align="middle" type="flex" gutter={8}>
          <Col span={8}>动画时间</Col>
          <Col span={16}>
            <Input value={duration} type="number" onChange={this.setBaseStyle('duration')} />
          </Col>
        </Row>
        <Row align="middle" type="flex" gutter={8}>
          <Col span={8}>动画延时</Col>
          <Col span={16}>
            <Input value={delay} type="number" onChange={this.setBaseStyle('delay')} />
          </Col>
        </Row>
        <Row align="middle" type="flex" gutter={8}>
          <Col span={8}>动画循环</Col>
          <Col span={16}>
            <Select
              onChange={this.setBaseStyle('animateRepeat')}
              style={{ width: '100%' }}
              value={repeat}
            >
              <Option value={ANIMATE_REPEAT_NORMAL}>默认</Option>
              <Option value={ANIMATE_REPEAT_INFINITE}>无限循环</Option>
            </Select>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const { editList, activeEditKey } = state;
  const result = { activeEditKey };
  if (activeEditKey && activeEditKey.length === 1) {
    const item = editList[activeEditKey[0]];
    if (item) return Object.assign(result, item);
  }
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Animation);
