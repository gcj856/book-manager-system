import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aId: 1,
    }
  }
  render() {
    let { aId } = this.state;
    return (
      <div className="article">
        <h2>文章内容</h2>
        <Link to={`/article/sentence?aId=${aId}`}>查看句子</Link>
      </div>
    )
  }
}

export default Article;