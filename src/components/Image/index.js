/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './index.module.less';

function ImageComponent(props) {
  // 预览图片状态和图片地址
  const [previewVisible, setPreviewVisible] = useState(false);

  const {
    imgSrc = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    width = 102,
    idx = null,
    showRemoveIcon = false,
    onRemove = () => {},
    showPreviewIcon = true,
    onPreview = () => {
      setPreviewVisible(true);
    },
    showCropperIcon = true,
    onCropper = () => {},
    childern = null,
  } = props;

  return (
    <>
      <div className={styles['ant-image']} style={{ width: `${width}px`, height: `${width}px` }}>
        <img className={styles['ant-image-img']} src={imgSrc} />
        <div className={styles['ant-image-mask']}>
          <div className={styles['ant-image-mask-info']}>
            <span className={styles['ant-upload-list-item-actions']}>
              {showPreviewIcon && <EyeOutlined onClick={onPreview} />}
              {showRemoveIcon && <DeleteOutlined onClick={()=>onRemove(imgSrc,idx)} />}
              {childern}
            </span>
          </div>
        </div>
        {showCropperIcon && 
          <Button type="primary" size="small" className={styles.button} onClick={() => onCropper(imgSrc, idx)}>裁切</Button>
        }
      </div>
      {/* 图片预览 */}
      <Modal
        visible={previewVisible}
        title="图片预览"
        footer={null}
        onCancel={() => setPreviewVisible(false)}
      >
        <img alt="example" style={{ width: '100%' }} src={imgSrc} />
      </Modal>
    </>
  );
}
export default ImageComponent;
