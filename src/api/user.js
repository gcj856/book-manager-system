export function loginApi(userInfo) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (userInfo && userInfo.toString() !== '') {
        res("登录成功！");
      } else {
        rej("登录失败！");
      }
    }, 1000)
  })
}

export function logoutApi() {
  return new Promise((res) => {
    setTimeout(() => {
      res("退出成功！");
    }, 1000)
  })
}

