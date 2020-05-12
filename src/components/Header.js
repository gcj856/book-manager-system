import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//import { changeUserInfo } from '@/store/actions/user';

import '@/assets/less/header.less'

class Header extends Component {
  render() {
    return (
      <div className="Header" >
        <h2><Link to="/">教材管理系统</Link></h2>
      </div>
    )
  }
}

export default withRouter(Header);