import React, { Component } from 'react';
import { Input, Select, Button } from 'antd';

import { Model } from '../../dataModule/testBone';
import { maintenanceUrl } from '../../dataModule/UrlList';

import '../maintenance/style/index.less';
import  Equipment   from '../maintenance/publicComponents/equipment.js';

const model = new Model()
class MaintenanceIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            aid: '',
            equipment_code: '',
            client_unit: '',
            status: '',
            region: '',
            whetherTest: false, 
            keyStatus: '',
        }
      }
    
    componentDidMount() {
        const me = this
        model.fetch(
            {},
            maintenanceUrl,
            'get',
            function(response) {
                if (me.state.whetherTest === false) {
                  // console.log(response.data.data)
                  me.setState({
                    data: response.data.data
                  })
                } else {
                  me.setState({
                    data: response.data.data
                  })
                }
              },
              function() {
                console.log('加载失败，请重试')
              },
              this.state.whetherTest
        )
    }

    //设备状态下拉框值改变时触发的函数
    regionHandleChange = (value) => {
      // console.log(value);
      this.setState({
        region: value
      })
    }

    StatusHandleChange = (value) => {
      // console.log(value);
      this.setState({
        status: value
      })
    }

    //将数据分组
    getGroup = (data,key) => {
      let groups = {};
      data.forEach( c => {
          let value = c[key];
          groups[value] = groups[value]||[];
          groups[value].push(c);
      });
      return groups;
    }
  
    //搜索输入框的值改变时触发
    changeValue = (e) => {
      const newForm = {...this.state}
      newForm[e.target.name] = e.target.value
      this.setState(newForm)
      // console.log(this.state)
    } 

    //重置
    handleClear= () => {
      this.setState({
       client_unit: '',
       status: '0',
       region:'',
       keyStatus: new Date()
      })
      const me = this
      model.fetch(
          "13:123",
          maintenanceUrl,
          'get',
          function(response) {
              if (me.state.whetherTest === false) {
                // console.log(response.data.data)
                me.setState({
                  data: response.data.data
                })
              } else {
                me.setState({
                  data: response.data.data
                })
              }
            },
            function() {
              console.log('加载失败，请重试')
            },
            this.state.whetherTest
      )
    }

    getparams( status=null, client_unit=null, region=null) {
      let params = {};
      params = {
        status,
        client_unit,
        region,
      }
      return params;
    }  

    //搜素
    handleSearch = () => {
      const { status, client_unit, region } = this.state;
      let params = this.getparams( status, client_unit, region );
      const me = this
      for (let i in params) {
        if (params[i] === undefined || params[i] === null) {
          params[i] = ''
        }
      }
      model.fetch(
        params,
        maintenanceUrl,
        'get',
        function(response) {
          if (me.state.whetherTest === false) {
            me.setState({
              data: response.data.data,
            })
          } else {
            me.setState({
              data: response.data.data
            })
          }
        },
        function() {
          console.log('加载失败，请重试')
        },
        this.state.whetherTest
      )
    }

  render() {
    const { Option } = Select;
    let selectData = []
    if (this.state.data !== [] && this.state.data !== undefined ) {
      this.state.data.map((item,index) => {
        if(item.status === '0' || item.status === '3' || item.status === '4' ) {
          selectData.push(item)
        }
        return null
      })
    }
    const Newdata = this.getGroup(selectData,'region');
    const allowClear = true;
  

    return (
        <div>
            <div className="title" >
                循环水智慧管家远程监控系统
            </div>
            <div className='line-bottom-high'></div>
            <div  className='Search'>
                <div className='search-area'>地区筛选:</div>
                      <Select  className='area' name='region'  size='small' key={this.state.keyStatus} allowClear={ allowClear } style={{ width: 120, }}  onChange={ this.regionHandleChange } >
                      { Object.keys(Newdata).map((key,index) => {
                        return  <Option key={index} value={key} >{key}</Option>
                      } )}
                      </Select>
                <div className='search-user'>用户单位:</div>
                      {/* <Select  className='user' name='client_unit'  size='small' key={this.state.keyStatus} allowClear={ allowClear } style={{ width: 120, }}  >
                        { Object.keys(Newdata).map((key,index) => {
                           Newdata[key].map((item,index) => {
                              return <Option value={ item.client_unit }>{ item.client_unit }</Option>
                          })
                        } )}
                      </Select> */}
                <Input className='user' name='client_unit' value={ this.state.client_unit } onChange={ this.changeValue } />
                <div className='search-status'>设备状态:</div>
                <div className='status'>
                    <Select size='small' key={this.state.keyStatus} allowClear={ allowClear }  style={{ width: 120, }} onChange={ this.StatusHandleChange }>
                        <Option value="0">在线</Option>
                        <Option value="3">报修</Option>
                        <Option value="4">维护</Option>
                    </Select>
                </div>
                <div className='button1'>
                    <Button type="primary" onClick={ this.handleSearch }>搜索</Button>
                </div>
                <div className='button2'>
                    <Button onClick={ this.handleClear } >重置</Button>
                </div>
            </div >
            { Object.keys(Newdata).map((key,index) => 
                { if (index > 4)  {
                   return null;
                } else {
                return  <div key={ index } className='content'>
                        <div className="areaName" >{ key }地区</div>
                        <div className='line-bottom'></div>
                    { Newdata[key].map((item,index) => {
                      if( item.status ==='1'|| item.status === '2' ) {
                        return null
                      } else {
                        return <Equipment key={ index } aid={ item.aid } equipment_code={ item.equipment_code } client_unit={ item.client_unit } status={ item.status } />
                      }
                    }) }
                </div>
                  }
                }
            )}
        </div>
    )
  }

}

export default MaintenanceIndex;