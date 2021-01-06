/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable spaced-comment */
import React, { useRef } from 'react';
import { Row, Col, Modal, Button, Radio, Input } from 'antd';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import styles from './index.module.less';

export default function CropperModal(props) {
  const cropRef = useRef(null);

  const { 
    idx= null, // 需要替换图片索引
    visible = false, //modal状态
    loading = false,
    submitCropper =()=> {}, // 确认裁切
    onCloseModal = () => {}, // 关闭modal
    src = 'https://test-crawler.oss-cn-beijing.aliyuncs.com/image/20210105/auditing-system/fb3026be-6610-4a5b-b498-63b7d49755bd.png?timestamp=1609832955171', 
  } = props;

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
    onCloseModal(false);
  };

  // 确认裁切
  const saveCropper = () => {
    cropRef.current.cropper.getCroppedCanvas().toBlob((blob) => {
      // blobFile = blob;
      submitCropper(blob,idx)
    }, 'image/png');
  };

  return (
    <Modal
      title="裁切"
      visible={visible}
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
              src={src}
              style={{ height: 400, width: '100%' }}
              preview=".preview"
              viewMode={1} //定义cropper的视图模式
              zoomable={true} //是否允许放大图像
              guides={true} //显示在裁剪框上方的虚线
              background={true} //是否显示背景的马赛克
              rotatable={true} //是否旋转
              aspectRatio={16 / 9} //裁切比列
              crossOrigin='Anonymous'
              checkCrossOrigin={true}
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
            <Button type="primary" loading={loading} block onClick={() => saveCropper()}>
              确认
            </Button>
          </Col>
        </Row>
      </div>
    </Modal>
  )
}
