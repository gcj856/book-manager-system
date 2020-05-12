import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>主页页面</h2>
        <Link to='/article?'>查看文章</Link>
      </div>
    )
  }
}

export default Home;