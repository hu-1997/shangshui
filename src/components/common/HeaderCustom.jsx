import React, { Component } from 'react';
import { Layout, Icon, Dropdown, Menu } from 'antd';
import history from './history';
import { removeCookie } from "../../helpers/cookies";
import { withRouter } from 'react-router-dom';

import '../../style/header.less';
import logo from '../../statistics/logo.jpg';
import { nowTime } from '../../publicFunction/index';
// import { setCookie } from "../../helpers/cookies";
// import {color} from "echarts/src/export";
import {getUserId}  from '../../publicFunction';
import {outLoginUrl } from '../../dataModule/UrlList'
import { Model } from '../../dataModule/testBone';

const { Header } = Layout;
const model = new Model()

class HeaderCustom extends Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed: props.collapsed,
            date: nowTime(),
        }
        this.logout = this.logout.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps);
        this.onCollapse(nextProps.collapsed);
    }

    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
        });
    };

    logout = () => {
        model.fetch(
          {'user_id':getUserId()},
          outLoginUrl,
          'get',
          function(response) {
            console.log('登出状态还原')
          }
        )
        // 删除登陆信息，并跳转页面
        removeCookie("mspa_user");
        history.push('/login');
    };

    //setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: nowTime()
        });
    }

    render(){
        const menu = (
            <Menu>
              <Menu.Item onClick={this.logout}>退出登陆</Menu.Item>
            </Menu>
          );

      return(
        <Header className="header-style header">
          <img alt="logo" src={logo} width='200px'/>
          {/* <Link to="/technology-system"> */}
            <span className={'header-span'}>循环水智慧管家远程监控系统</span>
          {/* </Link> */}
          {/* <span className="date-span">{this.state.date.toLocaleString()}</span> */}
          <div className={"user-icon-div"}>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{color: 'white'}}>
                <span style={{marginRight: 5}}>
                  <Icon type="user" style={{marginRight: 10}}/>
                  {this.props.username}
                </span>
                <Icon type="down" />
              </a>
            </Dropdown>
          </div>
        </Header>
      )
    }
}

export default withRouter(HeaderCustom)
