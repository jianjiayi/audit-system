/* eslint-disable prefer-template */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import classNames from 'classnames';
import Normal from './Normal';
import Image from './Image';
// import Audio from './Audio';
import Video from './Video';
import styles from './index.module.less';

const iphoneBg = require('./iPhone_bg.svg');

function ButtonMobilePreview(props) {
  const [visible, setVisible] = useState(false);
  const { title, curArt = {}, newsDataType, ...rest } = props;

  const mobileProps = {
    title,
    visible,
    centered: true,
    destroyOnClose: true,
    onCancel: () => {
      setVisible(!visible);
    },
    ...rest,
  };

  return (
    <>
      <Button
        className={styles.btn}
        type="primary"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {title}
      </Button>
      <Modal {...mobileProps}>
        <div className={styles.container}>
          <div
            className={classNames(styles.bg_box, newsDataType === 'IMAGE' ? styles.dark : '')}
          ></div>
          <div className={styles.mobile} style={{ backgroundImage: 'url(' + iphoneBg + ')' }}>
            <div className={styles['body-box']}>
              {newsDataType === 'NEWS' && <Normal curArt={curArt}></Normal>}
              {newsDataType === 'IMAGE' && <Image images={curArt.oppoPics}></Image>}
              {newsDataType === 'VIDEO' && <Video curArt={curArt}></Video>}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ButtonMobilePreview;
