import {
  MOVE_START, MOVE_END, MOVE_CHANGE, CREATE_ITEM_STORE,
  RESET_CONTENT_HEIGHT, CHANGE_ACTIVE_EDIT_KEY, ADD_ITEM_ATTRS, CHANGE_ITEM_ATTR,
} from './constants';

export function startMove(value) {
  return {
    type: MOVE_START,
    value,
  };
}

export function endMove(value) {
  return {
    type: MOVE_END,
    value,
  };
}

export function change(value) {
  return {
    type: MOVE_CHANGE,
    value,
  };
}

export function createItemStore(value) {
  return { type: CREATE_ITEM_STORE, value };
}

export function resetContentHeight(value) {
  return { type: RESET_CONTENT_HEIGHT, value };
}

export function changeActiveEditKey(value) {
  return { type: CHANGE_ACTIVE_EDIT_KEY, value };
}

export function addAttrs(attrs, key) {
  return { type: ADD_ITEM_ATTRS, value: { attrs, key } };
}

export function changeAttrs(attrs, key) {
  return { type: CHANGE_ITEM_ATTR, value: { attrs, key } };
}
