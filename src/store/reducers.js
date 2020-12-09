import {
  SETUSERINFO,
  LOGOUT,
} from './actions';

const initState = {
  getToken: '',
  userInfo: {
    name: 'test',
    password: '1111'
  }, // 用户信息
};

function userInfo(state = initState.userInfo, action) {
  switch (action.type) {
    case SETUSERINFO:
      if (!action.info) {
        localStorage.userInfo = '';
      } else {
        localStorage.userInfo = JSON.stringify(action.info);
      }
      return action.info;
    default:
      return state;
  }
}

function clearUserInfo(state = initState.userInfo, action) {
  switch (action.type) {
    case LOGOUT:
      localStorage.userInfo = '';
      return null;
    default:
      return state;
  }
}

export default { userInfo, clearUserInfo };