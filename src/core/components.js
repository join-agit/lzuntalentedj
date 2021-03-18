import Text from '../components/Text';
import Picture from '../components/Picture';
import QQVideo from '../components/QQVideo';
import Input from '../components/Input';
import Button from '../components/Button';
import {
  COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE, COMPONENT_TYPE_QQ_VIDEO,
  COMPONENT_TYPE_INPUT, COMPONENT_TYPE_BUTTON,
} from './constants';

const map = {
  [COMPONENT_TYPE_TEXT]: Text,
  [COMPONENT_TYPE_PICTURE]: Picture,
  [COMPONENT_TYPE_QQ_VIDEO]: QQVideo,
  [COMPONENT_TYPE_INPUT]: Input,
  [COMPONENT_TYPE_BUTTON]: Button,
};

export function getComponentEditMap(key) {
  return map[key].edit;
}

export function getComponentRenderMap(key) {
  return map[key].render;
}

export function getComponentStyleMap(key) {
  return map[key].style;
}
