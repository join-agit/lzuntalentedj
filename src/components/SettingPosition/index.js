import React from 'react';
import { Row, Col, Input } from 'antd';
import {
  COMPONENT_STYLE_WIDHT, COMPONENT_STYLE_HEIGHT, COMPONENT_STYLE_LEFT, COMPONENT_STYLE_TOP,
} from '../EditItem/constants';

export default function (props) {
  const {
    width, height, top, left,
    setBaseStyle,
  } = props;
  return (
    <React.Fragment>
      <Row align="middle" type="flex" gutter={8}>
        <Col span={8}>尺寸</Col>
        <Col span={8}>
          <Input value={width} onChange={setBaseStyle(COMPONENT_STYLE_WIDHT)} />
        </Col>
        <Col span={8}>
          <Input value={height} onChange={setBaseStyle(COMPONENT_STYLE_HEIGHT)} />
        </Col>
        <Col span={8} />
        <Col span={8} className="text-center">
              宽
        </Col>
        <Col span={8} className="text-center">
              高
        </Col>
      </Row>
      <Row align="middle" type="flex" gutter={8}>
        <Col span={8}>位置</Col>
        <Col span={8}>
          <Input value={left} onChange={setBaseStyle(COMPONENT_STYLE_LEFT)} />
        </Col>
        <Col span={8}>
          <Input value={top} onChange={setBaseStyle(COMPONENT_STYLE_TOP)} />
        </Col>
        <Col span={8} />
        <Col span={8} className="text-center">
              X
        </Col>
        <Col span={8} className="text-center">
              Y
        </Col>
      </Row>
    </React.Fragment>
  );
}
