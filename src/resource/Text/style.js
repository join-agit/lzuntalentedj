import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Select, Row, Col, Slider, Input, Icon, Tooltip,
} from 'antd';
import { changeAttrs, changeBaseStyle } from '../../store/action';
import SettingPosition from '../../components/SettingPosition';
import ColorPicker from '../../components/ColorPicker';

import './style.scss';

class TextStyle extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
    }

    state = {}

    onChange = (e) => {
      const { dispatch, activeEditKey } = this.props;
      dispatch(changeAttrs({ fontSize: +e }, activeEditKey));
    }

    onChangeColor = (e) => {
      const { dispatch, activeEditKey } = this.props;
      dispatch(changeAttrs({ color: e }, activeEditKey));
    }

    onChangeAttr = key => (e) => {
      const { target } = e;
      let value = e;
      if (target) {
        value = +target.value;
      }
      const { dispatch, activeEditKey } = this.props;
      dispatch(changeAttrs({ [key]: value }, activeEditKey));
    }

    setBaseStyle = key => (e) => {
      const { dispatch, activeEditKey } = this.props;
      const { target } = e;
      let value = e;
      if (target) {
        value = +target.value;
      }
      dispatch(changeBaseStyle({ [key]: value }, activeEditKey));
    }

    onChangeStyle = obj => () => {
      const { dispatch, activeEditKey } = this.props;
      dispatch(changeAttrs(obj, activeEditKey));
    }

    render() {
      const { activeEditKey } = this.props;
      if (!activeEditKey || activeEditKey.length < 0) return <div>no style</div>;
      const {
        width, height, top, left, attrs,
      } = this.props;
      const { lineHeight } = attrs;
      return (
        <div className="component-text-style-container">
          <Row align="middle" type="flex" gutter={8}>
            <Col span={8}>字号</Col>
            <Col span={16}>
              <Select value={attrs.fontSize} onChange={this.onChange}>
                <Select.Option key={12}>12</Select.Option>
                <Select.Option key={14}>14</Select.Option>
                <Select.Option key={16}>16</Select.Option>
                <Select.Option key={18}>18</Select.Option>
                <Select.Option key={20}>20</Select.Option>
                <Select.Option key={24}>24</Select.Option>
                <Select.Option key={48}>48</Select.Option>
              </Select>
            </Col>
          </Row>
          <Row align="middle" type="flex" gutter={8}>
            <Col span={8}>文字颜色</Col>
            <Col span={16}>
              <ColorPicker color={attrs.color} onChange={this.onChangeColor} />
            </Col>
          </Row>
          <Row align="middle" type="flex" gutter={8}>
            <Col span={8}>背景颜色</Col>
            <Col span={16}>
              <ColorPicker color={attrs.bgColor} onChange={this.onChangeAttr('bgColor')} />
            </Col>
          </Row>
          <Row align="middle" type="flex" gutter={6} className="quick-btns">
            <Col>
              <Tooltip placement="top" title="靠左">
                <Icon type="align-left" className={attrs.textAlign === 'left' && 'active'} onClick={this.onChangeStyle({ textAlign: 'left' })} />
              </Tooltip>
            </Col>
            <Col>
              <Tooltip placement="top" title="靠左">
                <Icon type="align-center" className={attrs.textAlign === 'center' && 'active'} onClick={this.onChangeStyle({ textAlign: 'center' })} />
              </Tooltip>
            </Col>
            <Col>
              <Tooltip placement="top" title="靠左">
                <Icon type="align-right" className={attrs.textAlign === 'right' && 'active'} onClick={this.onChangeStyle({ textAlign: 'right' })} />
              </Tooltip>
            </Col>
            <Col>
              <Tooltip placement="top" title="加粗">
                <Icon type="bold" className={attrs.fontWeight === 'bold' && 'active'} onClick={this.onChangeStyle({ fontWeight: 'bold' })} />
              </Tooltip>
            </Col>
            <Col>
              <Tooltip placement="top" title="斜体">
                <Icon type="italic" className={attrs.fontStyle === 'italic' && 'active'} onClick={this.onChangeStyle({ fontStyle: 'italic' })} />
              </Tooltip>
            </Col>
            <Col>
              <Tooltip placement="top" title="下划线">
                <Icon type="underline" className={attrs.textDecoration === 'underline' && 'active'} onClick={this.onChangeStyle({ textDecoration: 'underline' })} />
              </Tooltip>
            </Col>
            <Col>
              <Tooltip placement="top" title="删除线">
                <Icon type="strikethrough" className={attrs.textDecoration === 'line-through' && 'active'} onClick={this.onChangeStyle({ textDecoration: 'line-through' })} />
              </Tooltip>
            </Col>
            <Col>
              <Tooltip placement="top" title="清除样式">
                <Icon
                  type="delete"
                  onClick={this.onChangeStyle({
                    textDecoration: '', fontStyle: '', fontWeight: '', textAlign: 'center',
                  })}
                />
              </Tooltip>
            </Col>
          </Row>
          <Row align="middle" type="flex" gutter={8}>
            <Col span={8}>行高</Col>
            <Col span={8}>
              <Slider
                min={0}
                max={3}
                step={0.1}
                onChange={this.onChangeAttr('lineHeight')}
                value={lineHeight}
              />
            </Col>
            <Col span={8}>
              <Input value={lineHeight} onChange={this.onChangeAttr('lineHeight')} />
            </Col>
          </Row>
          <Row align="middle" type="flex" gutter={8}>
            <Col span={8}>字间距</Col>
            <Col span={8}>
              <Slider
                min={0}
                max={100}
                step={1}
                onChange={this.onChangeAttr('letterSpacing')}
                value={attrs.letterSpacing}
              />
            </Col>
            <Col span={8}>
              <Input value={attrs.letterSpacing} onChange={this.onChangeAttr('letterSpacing')} />
            </Col>
          </Row>
          <Row align="middle" type="flex" gutter={8}>
            <Col span={8}>透明度</Col>
            <Col span={8}>
              <Slider
                min={0}
                max={100}
                step={1}
                onChange={this.onChangeAttr('opacity')}
                value={attrs.opacity}
              />
            </Col>
            <Col span={8}>
              <Input value={attrs.opacity} onChange={this.onChangeAttr('opacity')} />
            </Col>
          </Row>
          <SettingPosition {...this.props} setBaseStyle={this.setBaseStyle} />
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
export default connect(mapStateToProps, mapDispatchToProps)(TextStyle);
