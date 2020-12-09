import { loginApi, logoutApi } from "@/api/user";

/*
 * action 类型
 */
export const SETUSERINFO = 'SETUSERINFO';
export const LOGOUT = 'LOGOUT';

/*
 * action 创建函数
 */

// 登录
export function setUserInfo(info) {
  return { type: SETUSERINFO, info };
}

export function login(info) {
  return (dispatch) => {
    let promise = new Promise((resolve, reject) => {
      loginApi(info).then((res) => {
        let action = setUserInfo(info)
        dispatch(action);
        resolve(res);
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
  }

}


// 切换用户信息
export function logout() {
  return { type: LOGOUT };
}

export function userLogout() {
  return (dispatch) => {
    let promise = new Promise((resolve, reject) => {
      logoutApi().then((res) => {
        let action = logout();
        dispatch(action);
        resolve(res)
      }).catch(err => {
        reject(err);
      })
    })
    return promise;
  }
}