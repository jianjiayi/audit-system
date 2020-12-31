/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-const */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable spaced-comment */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Upload, message, Modal, Button, Radio, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import { UPLOAD_FILE_URL, acceptType, maxFileSize } from '@/pages/constants';

import styles from './index.module.less';

const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>上传</div>
  </div>
);

let blobFile = null;

function UploadCropper(props) {
  const cropRef = useRef(null);
  const [fileImgInfo, setFileImgInfo] = useState({});
  const [cropVisible, setCropVisible] = useState(false);
  // 设置裁切比例
  const setAspectRatio = (e) => {
    cropRef.current.cropper.setAspectRatio(e.target.value);
  };

  // 设置旋转角度
  const setRotateTo = (value) => {
    cropRef.current.cropper.rotate(value);
  };

  // 取消裁切，关闭弹窗
  const cancelCropper = () => {
    setCropVisible(false);
  };

  // 确认裁切
  const saveCropper = () => {
    cropRef.current.cropper.getCroppedCanvas().toBlob((blob) => {
      blobFile = blob;
    }, 'image/jpeg');
  };

  // 临时文件
  const [fileList, setFileList] = useState([]);

  const beforeUpload = (file) => {
    // 校验文件类型
    const reg = new RegExp(`.(${acceptType.join('|')})$`, 'i');
    if (!reg.test(file.type)) message.error(`文件类型只支持${acceptType.join(',')}类型`);
    // 校验文件大小
    if (file.size / 1024 / 1024 > maxFileSize) message.error(`上传文件大小不能超过${maxFileSize}M`);

    // 启动裁切模块
    let reader = new FileReader();
    //开始读取文件
    reader.readAsDataURL(file);
    // 因为读取文件需要时间,所以要在回调函数中使用读取的结果
    reader.onload = (e) => {
      // 打开裁切modal
      setCropVisible(true);
      // 保存文件
      setFileImgInfo({
        src: e.target.result, //cropper的图片路径
        filename: file.name, //文件名称
        size: file.size / 1024 / 1024, //文件大小
        type: file.type.split('/')[1], //文件类型
        uid: file.uid,
      });
    };

    // 根据条件  是否继续中断上传
    return new Promise((resolve, reject) => {
      const { uid, filename } = fileImgInfo;
      let index = setInterval(() => {
        // 监听裁剪是否完成
        if (blobFile) {
          // 需要给裁剪后的blob对象设置uid，否则会报错！！！
          blobFile.uid = uid;
          // 创造提交表单数据对象
          const formData = new FormData();
          // 添加要上传的文件
          formData.append('file', blobFile, filename);

          // 执行后续的上传操作
          resolve(formData);
          // 关闭裁切modal
          setCropVisible(false);
          
          // 清空
          blobFile = null;
          window.clearInterval(index);
        }
      }, 100);
    });
  };

  // 上传流程
  const handleChange = (info) => {
    const { status = '' } = info.file;
    if (status === 'done') {
      setFileList([
        ...fileList,
        {
          uid: new Date(),
          url: info.file.response.data.fileUrl,
          imageKey: info.file.response.data.imageKey,
          originalUrl: info.file.response.data.fileUrl,
          width: info.file.response.data.width,
          height: info.file.response.data.height,
        },
      ]);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <>
      <Upload
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={UPLOAD_FILE_URL}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {fileList.length < 3 && uploadButton}
      </Upload>

      <Modal
        title="裁切"
        visible={cropVisible}
        footer={null}
        width={960}
        destroyOnClose
        onCancel={() => cancelCropper()}
      >
        <div className={styles.cropperModal}>
          <Row gutter={[16, 16]}>
            <Col span={18}>
              <Cropper
                ref={cropRef}
                src={fileImgInfo.src}
                style={{ height: 400, width: '100%' }}
                preview=".preview"
                viewMode={1} //定义cropper的视图模式
                zoomable={true} //是否允许放大图像
                guides={true} //显示在裁剪框上方的虚线
                background={true} //是否显示背景的马赛克
                rotatable={true} //是否旋转
                aspectRatio={16 / 9} //裁切比列
              />
            </Col>
            <Col span={6} className={styles.right_content}>
              <div
                className="preview"
                style={{
                  height: 200,
                  width: '100%',
                  float: 'left',
                  flex: 1,
                  overflow: 'hidden',
                  border: '1px solid #e8e8e8',
                }}
              ></div>

              <Radio.Group
                onChange={setAspectRatio}
                buttonStyle="solid"
                defaultValue={16 / 9}
                className={styles.button_group}
              >
                <Radio.Button value={16 / 9}>16:9</Radio.Button>
                <Radio.Button value={9 / 16}>9:16</Radio.Button>
                <Radio.Button value={4 / 3}>4:3</Radio.Button>
              </Radio.Group>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={9}>
              <Input.Group>
                <Button onClick={() => setRotateTo(-90)}>左旋转</Button>
                <Button onClick={() => setRotateTo(-15)}>-15°</Button>
                <Button onClick={() => setRotateTo(-30)}>-30°</Button>
                <Button onClick={() => setRotateTo(-45)}>-45°</Button>
              </Input.Group>
            </Col>
            <Col span={9}>
              <Input.Group>
                <Button onClick={() => setRotateTo(90)}>右旋转</Button>
                <Button onClick={() => setRotateTo(15)}>15°</Button>
                <Button onClick={() => setRotateTo(30)}>30°</Button>
                <Button onClick={() => setRotateTo(45)}>45°</Button>
              </Input.Group>
            </Col>
            <Col span={6}>
              <Button type="primary" block onClick={() => saveCropper()}>
                确认
              </Button>
            </Col>
          </Row>
        </div>
      </Modal>
    </>
  );
}

export default UploadCropper;
