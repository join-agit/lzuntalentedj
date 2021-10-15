import Resource from '@lzshow/resource';

import {
  COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE, COMPONENT_TYPE_QQ_VIDEO,
  COMPONENT_TYPE_INPUT, COMPONENT_TYPE_BUTTON, COMPONENT_TYPE_ART_INPUT,
  COMPONENT_TYPE_MAP, COMPONENT_TYPE_SHAPE, COMPONENT_TYPE_VIDEO,
  COMPONENT_TYPE_TEXT_TYPED, COMPONENT_TYPE_ART_SHADOW,
  COMPONENT_TYPE_ART_SOLID, COMPONENT_TYPE_ART_BORDER,
  COMPONENT_TYPE_LINK, COMPONENT_TYPE_MOTHER_DAY, COMPONENT_TYPE_LOVE_FOREVER,
} from '@lzshow/constants';
import ArtInput from '@lzshow/resource-artinput';
import MotherDay from '@lzshow/resource-motherday';
import LoveForever from '@lzshow/resource-loveforever';
import { getDefaultAttrs } from './utils';
import EditItem from './components/EditItem';
import RenderItem from './components/EditItem/render';

import 'animate.css';

const {
  Text, Picture, QQVideo, Input, Button,
  BDMap, Shape, Video, TypedText, ArtShadow, ArtSolid, ArtBorder,
  Link,
} = Resource;

const map = {
  // [COMPONENT_TYPE_TEXT]: Text,
  // [COMPONENT_TYPE_PICTURE]: Picture,
  // [COMPONENT_TYPE_QQ_VIDEO]: QQVideo,
  // [COMPONENT_TYPE_INPUT]: Input,
  // [COMPONENT_TYPE_BUTTON]: Button,
  // [COMPONENT_TYPE_ART_INPUT]: ArtInput,
  // [COMPONENT_TYPE_MAP]: BDMap,
};

/**
 * 注册组件
 * @param {*} key
 * @param {*} obj
 */
function registerComponent(key, obj) {
  const {
    render, edit, style, size, name,
  } = obj;
  map[key] = {
    preview: render,
    edit: EditItem(edit),
    render: RenderItem(render),
    style,
    size,
    attrs: getDefaultAttrs(style),
    name,
  };
}

registerComponent(COMPONENT_TYPE_TEXT, Text);
registerComponent(COMPONENT_TYPE_PICTURE, Picture);
registerComponent(COMPONENT_TYPE_QQ_VIDEO, QQVideo);
registerComponent(COMPONENT_TYPE_INPUT, Input);
registerComponent(COMPONENT_TYPE_BUTTON, Button);
registerComponent(COMPONENT_TYPE_ART_INPUT, ArtInput);
registerComponent(COMPONENT_TYPE_MAP, BDMap);
registerComponent(COMPONENT_TYPE_SHAPE, Shape);
registerComponent(COMPONENT_TYPE_VIDEO, Video);
registerComponent(COMPONENT_TYPE_TEXT_TYPED, TypedText);
registerComponent(COMPONENT_TYPE_ART_SHADOW, ArtShadow);
registerComponent(COMPONENT_TYPE_ART_SOLID, ArtSolid);
registerComponent(COMPONENT_TYPE_ART_BORDER, ArtBorder);
registerComponent(COMPONENT_TYPE_LINK, Link);
registerComponent(COMPONENT_TYPE_MOTHER_DAY, MotherDay);
registerComponent(COMPONENT_TYPE_LOVE_FOREVER, LoveForever);


export function getComponentEditMap(key) {
  const obj = map[key];
  if (obj) return obj.edit;
  return null;
}

export function getComponentRenderMap(key) {
  const obj = map[key];
  if (obj) return obj.render;
  return null;
}

export function getComponentStyleMap(key) {
  const obj = map[key];
  if (obj) return obj.style;
  return null;
}

export function getComponentDefaultSize(key) {
  const obj = map[key];
  let result = {};
  if (obj && obj.attrs) result = obj.size;
  return result;
}

export function getComponentDefaultAttrs(key) {
  const obj = map[key];
  let result = {};
  if (obj && obj.size) result = obj.attrs;
  return result;
}

export function getComponentDefaultName(key) {
  const obj = map[key];
  if (obj && obj.name) return obj.name;
  return '元素';
}

export function getComponentPreview(key) {
  const obj = map[key];
  if (obj) {
    const { preview, attrs } = obj;
    return {
      comp: preview,
      attrs,
    };
  }
  return null;
}
