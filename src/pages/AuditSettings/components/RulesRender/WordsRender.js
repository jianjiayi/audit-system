/* eslint-disable object-shorthand */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import { Tag, Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import BaseTable from '@components/BaseTable';

import styles from './WordsRender.module.less';

import * as api from '../../services/index.js';

const getDenyWordsKey = (name) => {
  const words = [
    {
      key: 'sensitive',
      value: '敏感词-聚发',
    },
    {
      key: 'sensitive',
      value: '敏感词-审核',
    },
    {
      key: 'forbidden',
      value: '违禁词-聚发',
    },
    {
      key: 'hot',
      value: '热词-聚发',
    },
    {
      key: 'personage',
      value: '人物词-聚发',
    },
  ];
  return words.find((item) => {
    return item.value === name;
  });
};

function WordsRender(props) {
  const { showType = 'form', bid = '100002', label = '', value: tagsList, onChange = () => {} } = props;

  // console.log('dataSource',tagsList)

  const tableRef = useRef(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const getAsyncData = async () => {
    const { code, data } = await api.getDenyWords({
      type: getDenyWordsKey(label).key,
      bid: bid,
    });
    // console.log(code ,data)
    if (code === 200) return setDataSource(data);
  };

  // 获取词库
  useEffect(() => {
    if (modalVisible) {
      getAsyncData();
    }
  }, [modalVisible, bid]);

  useEffect(() => {
    let idKeys = [];
    !_.isEmpty(tagsList) &&
      tagsList.map((item) => {
        idKeys.push(item.id);
      });
    setSelectedKeys(idKeys);
    
    // 默认全部，设置为-1
    if(tagsList === null || tagsList === undefined){
      onChange(-1)
    }
  }, [tagsList]);

  const modalProps = {
    title: `${label}列表`,
    footer: null,
    width: 620,
    visible: modalVisible,
    bodyStyle: { padding: 0 },
    destroyOnClose: true,
    onCancel: () => {
      setModalVisible(false);
      // tableRef.current.setSelectedRowKeys(null);
      // tableRef.current.setSelectedRows(null);
    },
  };

  // 删除tags
  const handleClose = (removedTag) => {
    const tags = tagsList.filter((tag) => tag.id !== removedTag.id);

    onChange(_.isEmpty(tags) ? -1 : [...tags]);
  };

  const forMapTagsRender = (tag) => {
    const tagElem = (
      <Tag
        closable={showType === 'form'}
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag.word || tag.name}
      </Tag>
    );
    return (
      <span key={tag.id} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };

  const tableProps = {
    className: styles['table-container'],
    // 类型
    selectionType: 'checkbox',
    // 表头
    columns: [
      {
        title: 'id',
        dataIndex: 'id',
      },
      {
        title: '名称',
        align: 'center',
        // dataIndex: 'word',
        render: (r) => <a>{r.word || r.name}</a>,
      },
    ],
    dataSource,
    selectedKeys,
  };

  // console.log('selectedKeys',selectedKeys)

  const handleSubmit = () => {
    const data = tableRef.current.selectedRows || [];
    !_.isEmpty(data) &&
      data.map((item) => {
        const { id, word } = item;
        item = { id, word };
      });
    tableRef.current.setSelectedRowKeys(null);
    tableRef.current.setSelectedRows(null);

    onChange(_.isEmpty(data) ? -1 : [...data]);

    setModalVisible(false);
  };
  // console.log('tagsList', tagsList);

  return (
    <>
      {!_.isEmpty(tagsList) ? tagsList.map(forMapTagsRender) : showType !== 'form' && <Tag>全部</Tag>}

      {showType === 'form' && (
        <>
          <Tag onClick={() => setModalVisible(true)} className="site-tag-plus">
            {_.isEmpty(tagsList) ? (
              '全部'
            ) : (
              <>
                <PlusOutlined />
                增加
              </>
            )}
          </Tag>

          <Modal {...modalProps}>
            <BaseTable {...tableProps} ref={tableRef}>
              <div className={styles['right-button']}>
                <Button type="primary" onClick={() => handleSubmit()}>
                  保存
                </Button>
              </div>
            </BaseTable>
          </Modal>
        </>
      )}
    </>
  );
}

export default WordsRender;
