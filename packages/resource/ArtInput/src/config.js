import {
  STYLE_RENDER_TYPE_COLOR, STYLE_RENDER_TYPE_SELECT,
  STYLE_RENDER_TYPE_SLIDER_INPUT, STYLE_VALUE_TYPE_NUMBER, STYLE_RENDER_TYPE_HIDDEN,
} from '@lzshow/constants';
import Align from './style/align';

const config = [
  {
    label: '字号',
    key: 'fontSize',
    initValue: 16,
    renderType: STYLE_RENDER_TYPE_SELECT,
    valueType: STYLE_VALUE_TYPE_NUMBER,
    props: {
      options: [
        {
          key: 12,
          text: '12',
        },
        {
          key: 14,
          text: '14',
        },
        {
          key: 16,
          text: '16',
        },
        {
          key: 18,
          text: '18',
        },
        {
          key: 20,
          text: '20',
        },
        {
          key: 24,
          text: '24',
        },
        {
          key: 48,
          text: '48',
        },
      ],
    },
  },
  {
    label: '文字颜色',
    key: 'color',
    initValue: '#ff79a2',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    label: '背景颜色',
    key: 'bgColor',
    initValue: '',
    renderType: STYLE_RENDER_TYPE_COLOR,
  },
  {
    key: [
      'textAlign',
      'fontStyle',
      'textDecoration',
      'fontWeight',
    ],
    initValue: {
      textAlign: 'center',
      fontStyle: '',
      textDecoration: '',
      fontWeight: '',
    },
    renderType: Align,
  },
  {
    label: '行高',
    key: 'lineHeight',
    initValue: 1.5,
    renderType: STYLE_RENDER_TYPE_SLIDER_INPUT,
    props: {
      min: 0,
      max: 3,
      step: 0.1,
    },
  },
  {
    label: '字间距',
    key: 'letterSpacing',
    initValue: 0,
    renderType: STYLE_RENDER_TYPE_SLIDER_INPUT,
    props: {
      min: 0,
      max: 100,
      step: 1,
    },
  },
  {
    label: '透明度',
    key: 'opacity',
    initValue: 1,
    renderType: STYLE_RENDER_TYPE_SLIDER_INPUT,
    props: {
      min: 0,
      max: 1,
      step: 0.01,
    },
  },
  {
    key: 'text',
    initValue: '双击输入文本',
    renderType: STYLE_RENDER_TYPE_HIDDEN,
  },
];

export default config;
