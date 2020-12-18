/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import React, { useRef } from 'react';
import { message, Modal, Tag, Image, Tooltip } from 'antd';
import _ from 'lodash';
import { history, connect } from 'umi';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import BaseTable from '@components/BaseTable';
import ViewLog from '../components/viewlog';
import WrapAuthButton from '@components/WrapAuth';
import styles from './index.module.less';

const { confirm } = Modal;



function TableList(props) {
  const tableRef = useRef(null);
  const viewRecordRef = useRef(null);

  const {
    dispatch,
    Search: { query, loading, dataSource, pagination },
  } = props;

  // 格式化所属队列
  const getQueueText = (data) => {
    let str = '';
    if (!_.isEmpty(data)) {
      data.map((item, index) => {
        if (index === data.length - 1) {
          str += item.name;
        } else {
          str += `${item.name},`;
        }
      });
    }
    const text = str.length > 20 ? `${str.slice(0, 20)}...` : str;

    return (
      <Tooltip title={str}>
        <a>{text}</a>
      </Tooltip>
    );
  };

  // 列表配置
  const tableProps = {
    scroll: { x: 1800 },
    // 类型
    selectionType: 'checkbox', // checkbox or radio or null||false
    // 表头
    columns: [
      {
        title: '标题',
        dataIndex: 'title',
        align: 'center',
        width: '200px',
        fixed: 'left',
        render: (text) => (
          <Tooltip title={text}>
            <a>{text.length > 50 ? `${text.slice(0, 50)}...` : text}</a>
          </Tooltip>
        ),
      },
      {
        title: 'ID',
        align: 'center',
        width: '180px',
        dataIndex: 'articleId',
      },
      {
        title: '分类',
        align: 'center',
        dataIndex: 'categorys',
      },
      {
        title: '来源',
        align: 'center',
        dataIndex: 'source',
      },
      {
        title: '采集源ID',
        align: 'center',
        width: '140px',
        dataIndex: 'crawlSourceId',
      },
      {
        title: '采集源',
        align: 'center',
        dataIndex: 'crawlSource',
      },
      {
        title: '所属队列',
        align: 'center',
        dataIndex: 'queues',
        render: (text) => getQueueText(text),
      },
      {
        title: '封面图',
        align: 'center',
        width: '150px',
        render(r){
          return r.cover && <Image key={r.id} width={120} height={90} alt="封面图" src={r.cover}/>
        },
      },
      {
        title: '是否上架',
        align: 'center',
        dataIndex: 'status',
        width: '100px',
        render: (text) => <span>{text}</span>,
      },
      {
        title: '审核状态',
        align: 'center',
        dataIndex: 'resultStatus',
        width: '100px',
        render: (text) => <span>{text}</span>,
      },
      {
        title: '入审时间',
        align: 'center',
        width: '200px',
        dataIndex: 'createTime',
      },
      {
        title: '操作',
        fixed: 'right',
        width: '100px',
        align: 'center',
        render(r) {
          return (
            <div className={styles.tableaction}>
              <WrapAuthButton
                pathUrl="/search"
                perms="news:get"
                type="primary"
                size="small"
                text="领审"
                onClick={() => goDetails(r)}
              />
              <WrapAuthButton
                pathUrl="/search"
                perms="history:select"
                size="small"
                text="操作记录"
                onClick={() => getViewRecord(r.id)}
              />
            </div>
          );
        },
      },
    ],
    loading,
    dataSource,
    pagination,
    onPageChg: (page) => {
      // console.log(page)
      dispatch({
        type: 'Search/getNewsList',
        payload: {
          pageNum: page.current,
          pageSize: page.pageSize,
        },
      });

      tableRef.current.setSelectedRowKeys(null);
      tableRef.current.setSelectedRows(null);
    },
  };

  // 领审操作
  const goDetails = (data) => {
    const { businessId, id, queues, type } = data;
    const { queueType, id: queue } = _.isEmpty(queues) ? '' : queues[0];
    const params = {
      routersource: 'search',
      businessId,
      id,
      queue,
      queueType,
      type,
    };

    console.log(params);
    try {
      dispatch({
        type: 'CDetails/getNewsGetTask',
        payload: params,
        callback: (data) => {
          if (_.isEmpty(data)) {
            return message.error('当前文章不可以领取');
          }

          dispatch({ type: 'CDetails/save', payload: { query: params } });

          sessionStorage.setItem('$QUERY', JSON.stringify(params));

          sessionStorage.setItem('$QUERY_FROM_SEARCH', query);
          sessionStorage.setItem('$QUERY_FROM_SEARCH', JSON.stringify(query));
          history.push({
            pathname: '/search/cdetails',
            query: {
              isBack: true,
            },
          });
        },
      });
    } catch (e) {
      console.log('e', e);
    }
  };

  // 查看操作记录
  const getViewRecord = (id) => {
    dispatch({
      type: 'Search/getNewsLog',
      payload: {
        id,
      },
      callback: (data) => {
        viewRecordRef.current.setModalVisible(true);
        viewRecordRef.current.setDataSource(data);
      },
    });
  };

  // 批量审核操作
  const batchAudit = (status) => {
    const pass = status;
    // console.log(tableRef.current.selectedRows)
    const { selectedRows } = tableRef.current; // 获取选中的列表
    if (_.isEmpty(selectedRows)) return message.error('请勾选文章列表后在操作');

    // 处理选中文章数据
    const paramsList = [];
    selectedRows.map((item) => {
      const { id } = item;
      paramsList.push({ id });
    });

    // console.log(paramsList)

    dispatch({
      type: 'Search/batchAudit',
      payload: {
        pass,
        paramsList,
      },
      callback: (data) => {
        tableRef.current.setSelectedRowKeys(null);
        tableRef.current.setSelectedRows(null);

        if ((pass && _.isEmpty(data._2)) || (!pass && _.isEmpty(data._1))) return;

        // 温馨提示
        Modal.warning({
          title: '温馨提示',
          content: (
            <div>
              {pass ? (
                <div className="">
                  <p>以下文章id没有操作成功</p>
                  {data._2.map((item) => {
                    return <Tag key={item}>{item}</Tag>;
                  })}
                </div>
              ) : (
                <div className="">
                  <p>以下文章id没有操作成功</p>
                  {data._1.map((item) => {
                    return <Tag key={item}>{item}</Tag>;
                  })}
                </div>
              )}
            </div>
          ),
          onOk() {},
        });
      },
    });
  };

  // 提示
  const showConfirm = (status) => {
    confirm({
      title: '温馨提示',
      icon: <ExclamationCircleOutlined />,
      centered: true,
      content: '批量操作需谨慎',
      onOk() {
        batchAudit(status)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  return (
    <>
      <BaseTable {...tableProps} ref={tableRef}>
        <div className={styles['right-button']}>
          <WrapAuthButton
            pathUrl="/search"
            perms="news:audit"
            text="通过"
            type="primary"
            onClick={() => showConfirm(true)}
          />
          <WrapAuthButton
            pathUrl="/search"
            perms="news:audit"
            text="未通过"
            type="danger"
            onClick={() => showConfirm(false)}
          />
        </div>
      </BaseTable>
      <ViewLog ref={viewRecordRef} />
    </>
  );
}

function mapStateToProps({ Global, Search }) {
  return { Global, Search };
}

export default connect(mapStateToProps)(TableList);
