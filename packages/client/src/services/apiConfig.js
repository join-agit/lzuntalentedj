export default {
  create: {
    getList: '/index/getList',
    add: '/index/add',
    getDetail: '/index/getDetail',
  },
  file: {
    getList: '/file/getList',
    upload: '/file/upload',
    cropImage: '/file/cropImage',
    parsePsd: '/file/parsePsd',
  },
  // 商城相关
  mall: {
    getList: '/tmp/getList',
    addTemplate: '/tmp/add',
    removeTemplate: '/tmp/remove',
  },
  user: {
    register: '/user/register',
    login: '/user/login',
  },
};

export function isDaily() {
  if (window.location.host.indexOf('localhost') > -1) {
    return true;
  }
  return false;
}

export function getDomain() {
  let result = 'http://show.lzuntalented.cn';
  if (isDaily()) {
    result = 'http://localhost';
  }
  return result;
}

export function getUrlPrefix() {
  const doamin = getDomain();
  const urlPrefix = `${doamin}:8380`;
  return urlPrefix;
}
