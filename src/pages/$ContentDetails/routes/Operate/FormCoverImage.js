/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable no-func-assign */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Form, Button, Modal, Radio } from 'antd';

import { connect } from 'umi';
import ImageList from './components/ImageList';
import UploadImage from '@/components/UploadImage';

import { UPLOAD_FILE_URL } from '@/pages/constants';
import ButtonMobilePreview from '../../components/ButtonMobilePreview';

import styles from './FormCoverImage.module.less';
import 'antd/es/modal/style';
import 'antd/es/slider/style';

function FormCoverImage(props) {
  const {
    name = 'FormImages',
    pForm,
    CDetails: { curArt, newsDataType },
  } = props;

  // 对象转数组方法
  const objToArr = (arrObj) => {
    let arr = [];
    if (_.isEmpty(arrObj)) return [];
    Object.keys(arrObj).map((key) => {
      arrObj[key].uid = key;
      arrObj[key].url = arrObj[key].originalUrl;
      arr.push(arrObj[key]);
    });
    return arr;
  };

  const [imgList, setImgList] = useState([]);

  // 正文全图原始数据
  const contentImages = curArt.mediaInfo && objToArr(curArt.mediaInfo.images) || [];

  const [coverPictureVisible, setCoverPictureVisible] = useState(false);
  const [tabKey, setTabKey] = useState(0);

  // 单图和三图的切换
  const [imagesValue, setImagesValue] = useState(3);
  // 用来共享组件内的封面图数据
  const [fileList, setFileList] = useState([]);
  // 封面图
  const [contentList, setContentList] = useState(contentImages || []);

  const [imageSourceType, setImageSourceType] = useState('cover');


  // 设置封面图
  useEffect(() => {
    // 设置封面图字段初始值
    pForm.setFieldsValue({
      covers: objToArr(curArt.covers),
    });

    setFileList(objToArr(curArt.covers));
    setImgList(objToArr(curArt.covers))
  }, [curArt.covers]);

  // 设置正文全图
  useEffect(()=>{
    if(curArt.mediaInfo){
      setContentList(objToArr(curArt.mediaInfo.images))
    }

    // 没有封面图是时，取正文图作为封面图
    if(_.isEmpty(curArt.covers) && curArt.mediaInfo){
      pForm.setFieldsValue({
        covers: objToArr(curArt.mediaInfo.images).slice(0,3),
      });
  
      setFileList(objToArr(curArt.mediaInfo.images).slice(0,3));
      setImgList(objToArr(curArt.mediaInfo.images).slice(0,3))
    }
  },[curArt.mediaInfo])

  

  // 三图多图切换
  const setCoverImagesNumber = (number) => {
    setImagesValue(number);
    // if (_.isEmpty(fileList)) return;
    if (number === 1) {
      return setFileList(imgList[0] ? [imgList[0]] : []);
    }
    
    setFileList([...imgList]);
  };

  // 上传成功后修改图片
  const onChange = (info) => {
    setFileList([...info]);
    // 修改表单里的封面图
    const {getFieldsValue,setFieldsValue} = pForm;
    const values = getFieldsValue();
    setFieldsValue({
      ...values,
      covers: info,
    })
  };
  // 删除已上传的图片
  const onRemove = (src = '', index = null) => {
    const List = _.cloneDeep(fileList);
    List.splice(index, 1);
    setFileList([...List]);
  };

  return (
    <Form name ={name} form={pForm}>
      <div className={styles.content}>
        <UploadImage 
          name = 'avatar'
          action={UPLOAD_FILE_URL}
          fileList={objToArr(fileList) || []}
          maxSize = {1}
          width = {200}
          height = {150}
          showRemoveIcon = {false}
          onChange={onChange}
          onRemove={onRemove}
        ></UploadImage>
        <div className={styles.button_list}>
          <Button
            type="primary"
            size="small"
            disabled={_.isEmpty(fileList) || !fileList[2]}
            onClick={() => {
              setCoverPictureVisible(true);
              setTabKey(0);
              // setFileList(list || []);
              setImageSourceType('cover');
            }}
          >
            三图
          </Button>
          <Button
            type="primary"
            size="small"
            onClick={() => {
              setCoverPictureVisible(true);
              setTabKey(1);
              // setFileList(list || []);
            }}
          >
            修改封面图
          </Button>
          <Button
            type="primary"
            size="small"
            onClick={() => {
              setCoverPictureVisible(true);
              setTabKey(2);
              setImageSourceType('contentImages');
            }}
          >
            正文全图
          </Button>
          <ButtonMobilePreview curArt={curArt} newsDataType={newsDataType}/>
        </div>
      </div>
      
      <Form.Item name="covers" noStyle>
        <Modal
          title={tabKey === 2 ? '正文全图' : '封面图'}
          centered
          destroyOnClose
          visible={coverPictureVisible}
          onCancel={() => {
            setCoverPictureVisible(false);
            setImageSourceType('cover');
            if (tabKey !== 2) {
              setFileList([...fileList]);
            }
          }}
          footer={null}
        >
          {
            (tabKey === 0 || tabKey === 2) && 
            <ImageList fileList={imageSourceType === 'cover' ? fileList : contentList}></ImageList>
          }

          {/* 上传图片组件 */}
          {tabKey === 1 && (
            <div className={styles.upload_list}>
              <Radio.Group
                className={styles.button_header}
                name="image-number"
                defaultValue={imagesValue}
                onChange={(e) => setCoverImagesNumber(e.target.value)}
              >
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
              </Radio.Group>
              {/* 上传组件 */}
              <UploadImage 
                action={UPLOAD_FILE_URL}
                fileList={objToArr(fileList) || []}
                maxSize = {imagesValue}
                onChange={onChange}
                onRemove={onRemove}
              ></UploadImage>
            </div>
          )}

          {tabKey !== 2 && (
            <div className={styles.footer}>
              {tabKey === 0 ? (
                <Button type="primary" onClick={() => setTabKey(1)}>
                  修改封面图
                </Button>
              ) : (
                <Button
                  type="primary"
                  onClick={() => {
                    pForm.setFieldsValue({
                      covers: fileList,
                    });
                    setCoverPictureVisible(false);
                  }}
                >
                  确定
                </Button>
              )}

              <Button onClick={() => setCoverPictureVisible(false)}>关闭</Button>
            </div>
          )}
        </Modal>
      </Form.Item>
    </Form>
  );
}

function mapStateToProps({ CDetails }) {
  return { CDetails };
}

export default connect(mapStateToProps)(FormCoverImage);
