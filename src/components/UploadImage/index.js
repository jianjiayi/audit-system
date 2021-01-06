/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable spaced-comment */
/* eslint-disable prefer-const */

import React, { useState } from 'react';
import { Upload, message } from 'antd';
import _ from 'lodash';
import { PlusOutlined } from '@ant-design/icons';

import CropperModal from '@/components/Cropper/index';
import ImageComponent from '@/components/Image';

import { UPLOAD_FILE_URL, acceptType, maxFileSize } from '@/pages/constants';

import * as api from '@/services/global';

import styles from './index.module.less';

const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>上传</div>
  </div>
);

function UploadImage(props) {
  const [file, setFile] = useState({
    src: '',
    uid: '',
    name: '',
  });
  // 裁切modal 状态
  const [cropVisible, setCropVisible] = useState(false);
  const [croLoading, setCroLoading] = useState(false);
  // change 图片的索引
  const [idx, setIdx] = useState(null);

  // 临时文件
  const [fileList, setFileList] = useState([]);

  // 上传之前校验
  const beforeUpload = (file) => {
    // 校验文件类型
    const reg = new RegExp(`.(${acceptType.join('|')})$`, 'i');
    if (!reg.test(file.type)) {
      message.error(`文件类型只支持${acceptType.join(',')}类型`);
      return false;
    }
    // 校验文件大小
    if (file.size / 1024 / 1024 > maxFileSize) {
      message.error(`上传文件大小不能超过${maxFileSize}M`);
      return false;
    }

    // 启动裁切模块
    let reader = new FileReader();
    //开始读取文件
    reader.readAsDataURL(file);
    // 因为读取文件需要时间,所以要在回调函数中使用读取的结果
    reader.onload = (e) => {
      // 打开裁切modal
      setCropVisible(true);
      // 保存文件
      setFile({
        src: e.target.result,
        name: file.name,
      }); //cropper的图片路径
    };

    return false;
  };

  // 关闭modal
  const closeModal = () => {
    setIdx(null);
    setCropVisible(false);
    setCroLoading(false);
  }

  // 裁切参数
  const CropperProps = {
    idx,
    src: file.src,
    loading: croLoading,
    visible: cropVisible,
    onCloseModal: () => {
      closeModal();
    },
    submitCropper: async (blob, idx) => {
      setCroLoading(true);
      let fromData = new FormData();
      fromData.append('file', blob, file.name);
      const { code, data } = await api.fileUploadImage(fromData);
      if (code === 200) {
        // 关闭裁切modal
        setCropVisible(false);
        if (idx !== null) {
          // 修改图片
          let tableList = _.cloneDeep(fileList);
          const item = tableList[idx];
          tableList.splice(idx, 1, {
            ...{
              uid: new Date(),
              url: data.fileUrl,
              imageKey: data.imageKey,
              originalUrl: data.fileUrl,
              width: data.width,
              height: data.height,
            }
          });
          closeModal();
          return setFileList([...tableList]);
        }
        // 新增图片
        setFileList([
          ...fileList,
          {
            uid: new Date(),
            url: data.fileUrl,
            imageKey: data.imageKey,
            originalUrl: data.fileUrl,
            width: data.width,
            height: data.height,
          },
        ]);
        closeModal();
      }

      setCroLoading(false)
    },
  };

  // 打开裁切按钮
  const onCropper = (src = '', index = null) => {
    setIdx(index);
    // 打开裁切modal
    setCropVisible(true);
    // 保存文件
    setFile({
      src,
      name: 'cropper2.png',
    });
  };

  // 删除图片
  const onRemove = (src = '', index = null) => {
    const List = _.cloneDeep(fileList);
    List.splice(index, 1);
    setFileList([...List]);
  };

  return (
    <>
      <div className={styles.upload_container}>
        <div className={styles.img_list}>
          {fileList.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <ImageComponent
                  idx={index}
                  imgSrc={item.url}
                  showRemoveIcon={true}
                  onRemove={onRemove}
                  showCropperIcon={true}
                  onCropper={onCropper}
                ></ImageComponent>
              </div>
            );
          })}
        </div>

        {fileList.length < 3 && (
          <Upload
            listType="picture-card"
            className={styles.uploader}
            showUploadList={false}
            fileList={fileList || []}
            action={UPLOAD_FILE_URL}
            beforeUpload={beforeUpload}
          >
            {uploadButton}
          </Upload>
        )}
      </div>

      {/* 裁切modal */}
      <CropperModal {...CropperProps} />
    </>
  );
}

export default UploadImage;
