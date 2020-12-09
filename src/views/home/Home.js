import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';


class Home extends Component {

  state = {
    date: new Date()
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }
  componentDidMount() {
    //console.log(this.props.userInfo)
    this.timerID = setInterval(() => this.tick(), 1000);

  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  render() {
    return (
      <div className="home">
        <h2>主页页面</h2>
        <Link to='/article?'>查看文章</Link>
        <div className="">{this.state.date.toLocaleTimeString()}</div>
      </div>
    )
  }
}

Home.propTypes = {
  userInfo: propTypes.object,
};

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

export default withRouter(connect(mapStateToProps)(Home));