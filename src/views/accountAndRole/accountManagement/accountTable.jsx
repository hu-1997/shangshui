import { Table, Pagination, Icon, Tooltip } from 'antd';
import React, { Component } from 'react';

class AccountTable extends Component{

    render() {
      const {
        size,
        isLoading,
        data,
        total,
        // showPagination,
        changePage,
        // changeSize,
        currentPage,
        rolesObject
      } = this.props;

      const columns =  [
        {
          title: '账号',
          dataIndex: 'account',
          align: 'center',
          width: 100
        },
        {
          title: '姓名',
          dataIndex: 'name',
          align: 'center',
          width: 120
        },
        {
          title: '角色',
          dataIndex: 'role_name',
          align: 'center',
          width: 120,
          render: (text, record, index) => {
            if (rolesObject) {
              return rolesObject[record['role_id']]
            }
            return ''
          }
        },
        {
          title: '创建时间',
          dataIndex: 'add_time',
          align: 'center',
          width: 120
        },
        {
          title: '创建人',
          dataIndex: 'add_by',
          align: 'center',
          width: 80
        },
        {
          title: '修改时间',
          dataIndex: 'mod_time',
          align: 'center',
          width: 120
        },
        {
          title: '修改人',
          dataIndex: 'mod_by',
          align: 'center',
          width: 80
        },
        {
          title: '操作',
          align: 'center',
          width: 80,
          render: (text, record, index) => {
            return [
              <Tooltip placement="top" key={"edit"} title={"账户管理"}>
                <Icon type="edit" theme="twoTone" onClick={() => this.props.showEditModal(record, 'basicInfoVisible')}/>
              </Tooltip>,
              <Tooltip placement="top" key={"ordered-list"} title={"权限编辑"}>
                <Icon  style={{ marginLeft: 10}}  type="ordered-list" onClick={() => this.props.showEditModal(record, 'editPowerVisible')}/>
              </Tooltip>,
              <Tooltip placement="top" key={"delete"} title={"删除账户"}>
                <Icon style={{ marginLeft: 10, color: 'red' }} type="delete" onClick={() => this.props.showEditModal(record, 'delAccountVisible')}/>
              </Tooltip>
          ]
          }
        }
      ];

        return (
          <div
            style={{
                width: '100%',
                position: 'relative',
                marginBottom: '30px'
            }}
          >
            <Table
              style={{
                overflow: 'auto',
                width: '100%',
                wordBreak: 'keep-all',
                whiteSpace: 'nowrap',
                fontSize: '5px',
              }}
              rowKey={'aid'}
              classname='engine-table'
              dataSource={ data }
              columns={ columns }
              bordered
              pagination={ false }
              size='middle'
              loading={ isLoading }
            />
            <div style={{ marginTop:15, position: 'absolute', right: '0%' }}>
                <Pagination
                  size="small"
                  pageSize={size}
                  current={ currentPage }
                  total={ total }
                  style={{ marginRight: 0 }}
                  onChange={(page) => changePage(page)}
                />
            </div>
          </div>
        )
    }
}

export default AccountTable;
