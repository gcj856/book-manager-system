import React, { Component } from 'react';
import { CheckOutlined } from '@ant-design/icons';

import { tokens, newTokens } from '@/api/token'
import { Button } from 'antd';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Info: tokens[0],
      newt: newTokens[0],
      resToken: []
    }
  }

  componentDidMount() {
    console.log(this.state.Info);
    this.handleNewTokens();
  }

  getList = (old, newt) => {
    let result = [];
    //debugger;
    for (let i = 0; i < newt.length; i++) {
      let hdNew = newt[i].hdData.join("");
      result[i] = {};
      result[i].newItem = newt[i].orData;
      result[i].oldItem = [];
      let newWord = newt[i].orData[1];
      for (let j = 0; j < old.length; j++) {
        let hdOld = old[j].hdData.join("");
        let orOld = old[j].orData;
        if (hdNew !== hdOld) {
          let oldWord = orOld[1];
          if (oldWord === newWord) {
            if (result[i].oldItem.length === 0) {
              result[i].oldItem.push(orOld);
            } else {
              for (let r = 0; r < result[i].oldItem.length; r++) {
                let oArr = JSON.parse(JSON.stringify(result[i].oldItem[r]));
                oArr.splice(0, 1, "");
                oArr.splice(4, 1, "");
                oArr.splice(5, 1, "");
                if (oArr.join("") !== hdOld) {
                  result[i].oldItem.push(orOld);
                }
              }
            }
          }
        }
      }
    }
    this.setState({
      resToken: result
    })
  }
  //处理数据为{newOrg:'',newDel:""}
  handleNewTokens = () => {
    let oldt = JSON.parse(JSON.stringify(this.state.Info.tokens));
    let newt = JSON.parse(JSON.stringify(this.state.newt.tokens));
    let oldTokens = this.delNoChange(oldt);
    let newTokens = this.delNoChange(newt);
    console.log(newTokens);
    this.getList(oldTokens, newTokens);
  }
  delNoChange = (arr) => {
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
      let item = JSON.parse(JSON.stringify(arr[i]));
      item.splice(0, 1, "");
      item.splice(4, 1, "");
      item.splice(5, 1, "");
      let obj = {
        orData: arr[i],
        hdData: item
      };
      resArr.push(obj);
    }
    return resArr;
  }
  mergeData = (index, oldIdx) => {
    debugger;
    let { resToken } = this.state;
    if (resToken.length > 0) {
      let getResToken = JSON.parse(JSON.stringify(resToken));
      let newItem = getResToken[index].newItem;
      let oldItem = JSON.parse(JSON.stringify(getResToken[index].oldItem[oldIdx]));
      oldItem[0] = newItem[0];
      oldItem[4] = newItem[4];
      oldItem[5] = newItem[5];
      getResToken[index].resItem = oldItem;
      this.setState({
        resToken: getResToken
      })
    }
    //console.log(this.resToken);
  }
  sumbitData = () => {
    let { resToken } = this.state;
    if (resToken.length > 0) {
      let getResToken = JSON.parse(JSON.stringify(resToken));
      let result = [];
      for (let i = 0; i < getResToken.length; i++) {
        result[i] = getResToken[i].resItem
          ? getResToken[i].resItem
          : getResToken[i].newItem;
      }
    }
  }
  showTokensCon = (con) => {
    if (con && con.length > 0) {
      let res = con.map((item, index) => (
        <p className="val" key={`res${index}`}>{item}</p>
      ))
      return res;
    }
  }
  render() {
    const { resToken } = this.state;
    let resDiv = '';
    if (resToken.length > 0) {
      resDiv = resToken.map((item, index) => (
        <div className="sentBox" key={index}>
          <div className="newData">
            {item.resItem ? this.showTokensCon(item.resItem) : this.showTokensCon(item.newItem)}
          </div>
          {item.oldItem && item.oldItem.length > 0 ? (
            <ul className="old-list">
              {
                item.oldItem.map((old, oldIdx) => (
                  <li key={`old${oldIdx}`}>
                    {this.showTokensCon(old)}
                    <CheckOutlined style={{ fontSize: '14px' }} onClick={() => this.mergeData(index, oldIdx)} />
                  </li>
                ))
              }
            </ul>
          ) : ''}
        </div >
      ))
      console.log(resDiv);
    }
    return (
      <div className="edit">
        <h2>编辑句子</h2>
        <div className="sent-list">
          {resDiv}
        </div >
        <Button type="primary" onClick={() => this.sumbitData()}>点击确认</Button >
      </div >
    )
  }
}

export default Edit;