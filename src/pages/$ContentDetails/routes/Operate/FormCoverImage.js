/* eslint-disable no-func-assign */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
import _ from 'lodash';
import { Image, Button, Modal, Upload, message, Radio } from 'antd';
import ImgCrop from 'antd-img-crop';
import { PlusOutlined } from '@ant-design/icons';

import { connect } from 'dva';

import { UPLOAD_FILE_URL, acceptType, maxFileSize, errorImg } from '@/pages/constants';
import ButtonMobilePreview from '../../components/ButtonMobilePreview';

import styles from './FormCoverImage.module.less';
import 'antd/es/modal/style';
import 'antd/es/slider/style';

function FormCoverImage(props) {
  const {
    CDetails: { curArt, newsDataType },
    handleCoverImages = () => {},
  } = props;

  // const list = [
  //   {
  //     uid: '-1',
  //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //   },
  //   {
  //     uid: '-2',
  //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //   },
  // ];
  // 对象转数组方法
  const objToArr = (arrObj)=>{
    let arr = [];
    if(_.isEmpty(arrObj)) return;
    Object.keys(arrObj).map(key=>{
      // console.log(arrObj[key]);
      arrObj[key].uid = key;
      arrObj[key].url = arrObj[key].originalUrl;
      arr.push(arrObj[key])
    });
    // console.log(arr)
    return arr;
  }

  // 封面图原始数据
  const list = objToArr(curArt.covers) || objToArr(curArt.picMessageMap);

  useEffect(()=>{
    setFileList(objToArr(curArt.covers));
  },[curArt.covers])

  // 正文全图原始数据
  const contentImages = objToArr(curArt.picMessageMap);

  const [coverPictureVisible, setCoverPictureVisible] = useState(false);
  const [tabKey, setTabKey] = useState(0);

  // 单图和三图的切换
  const [imagesValue, setImagesValue] = useState(3);
  // 用来共享组件内的封面图数据
  const [fileList, setFileList] = useState(list || []);
  // 封面图
  const [contentList, setContentList] = useState(contentImages || []);
  // 预览图片状态和图片地址
  const [previewVisible, setPreviewVisible] = useState(false);
  const [imageSourceType, setImageSourceType] = useState('cover');
  const [previewImage, setPreviewImage] = useState('');
  

  const handleOkSubmit = () => {};

  // 三图多图切换
  const setCoverImagesNumber = (number) => {
    setImagesValue(number);
    // if (_.isEmpty(fileList)) return;
    if (number === 1) {
      return setFileList([fileList[0]])
    };
    setFileList(list);
  };

  

  // 上传文件校验
  const beforeUpload = (file) => {
    // console.log(file);
    if (!acceptType) return true;
    const reg = new RegExp(`.(${acceptType.join('|')})$`, 'i');
    if (reg.test(file.type)) {
      // console.log(file.size / 1024 / 1024);
      if (!maxFileSize) return true;

      if (file.size / 1024 / 1024 <= maxFileSize) {
        return true;
      }
      message.error(`上传文件大小不能超过${maxFileSize}M`);
      return false;
    }
    message.error(`文件类型只支持${acceptType.join(',')}类型`);
    return false;
  };
  // 修改图片
  const onChange = (info) => {
    const { status = '' } = info.file;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
      setFileList([...info.fileList]);
    }
    if (status === 'done') {
      setFileList([
        ...fileList,
        {
          uid: new Date(),
          url: info.file.response.data.fileUrl,
          imageKey: info.file.response.data.fileUrl,
          originalUrl: info.file.response.data.fileUrl,
          width: info.file.response.data.width,
          height: info.file.response.data.height,
        },
      ]);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  // 图片预览
  const onPreview = async (file) => {
    if (!file.url) return;
    setPreviewVisible(true);
    setPreviewImage(file.url);
  };

  // 预览效果
  const MobilePreviewProps = {
    title: '预览效果',
    footer: null,
    width: 420,
    curArt, // 当前文章
    newsDataType,
  };

  // console.log('fileList[0]',fileList[0])

  

  return (
    <>
      <div className={styles.content}>
        <img width={240} height={180} src={(!_.isEmpty(fileList) && fileList[0]&& fileList[0].originalUrl) || errorImg} />
        <div className={styles.button_list}>
          <Button
            type="primary"
            disabled={_.isEmpty(fileList) || !fileList[2]}
            onClick={() => {
              setCoverPictureVisible(true);
              setTabKey(0);
              setFileList(list || []);
              setImageSourceType('cover');
            }}
          >
            三图
          </Button>
          <Button
            type="primary"
            onClick={() => {
              setCoverPictureVisible(true);
              setTabKey(1);
              setFileList(list || []);
            }}
          >
            修改封面图
          </Button>
          <Button
            type="primary"
            onClick={() => {
              setCoverPictureVisible(true);
              setTabKey(2);
              setImageSourceType('contentImages')
            }}
          >
            正文全图
          </Button>
          <ButtonMobilePreview {...MobilePreviewProps} />
        </div>
      </div>

      <Modal
        title={tabKey === 2 ? '正文全图' : '封面图'}
        centered
        destroyOnClose
        visible={coverPictureVisible}
        onOk={handleOkSubmit}
        onCancel={() => {
          setCoverPictureVisible(false);
          setImageSourceType('cover');
          if (tabKey !== 2) {
            setFileList(...[list]);
          }
        }}
        footer={null}
      >
        {(tabKey === 0 || tabKey === 2) && (
          <div className={styles.images_list}>

            {/* 封面图 */}
            {imageSourceType === 'cover' && !_.isEmpty(fileList) ? (
              fileList.map((item,index)=>{
                return (
                  <Image
                    className={styles.item}
                    key={index}
                    width={120}
                    height={90}
                    alt="封面图"
                    src={item.originalUrl}
                    fallback={errorImg}
                  />
                );
              })
            ) : (
              imageSourceType === 'cover' && <p>暂无封面图</p>
            )}

            {/* 正文全图 */}
            {imageSourceType === 'contentImages' && !_.isEmpty(contentList) ? (
              contentList.map((item,index)=>{
                return (
                  <Image
                    className={styles.item}
                    key={index}
                    width={120}
                    height={90}
                    alt="封面图"
                    src={item.originalUrl}
                    fallback={errorImg}
                  />
                );
              })
            ) : (
              imageSourceType === 'contentImages' && <p>暂无内容图片</p>
            )}
          </div>
        )}

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
            <ImgCrop rotate>
              <Upload
                action={UPLOAD_FILE_URL}
                listType="picture-card"
                fileList={ objToArr(fileList) || []}
                beforeUpload={beforeUpload}
                onChange={onChange}
                onPreview={onPreview}
              >
                {!_.isEmpty(fileList) && objToArr(fileList).length >= imagesValue ? null : (
                  <>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </>
                )}
              </Upload>
            </ImgCrop>
          </div>
        )}

        {/* 图片预览 */}
        <Modal
          visible={previewVisible}
          title="图片预览"
          footer={null}
          onCancel={() => setPreviewVisible(false)}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>

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
                  handleCoverImages(fileList);
                }}
              >
                确定
              </Button>
            )}

            <Button onClick={() => setCoverPictureVisible(false)}>关闭</Button>
          </div>
        )}
      </Modal>
    </>
  );
}

function mapStateToProps({ CDetails }) {
  return { CDetails };
}

export default connect(mapStateToProps)(FormCoverImage);
