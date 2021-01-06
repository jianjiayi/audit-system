/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import _ from 'lodash';
import ImageComponent from '@/components/Image';

import styles from './ImageList.module.less';

function ImageLIst(props) {
  const {
    fileList = []
  } = props;

  return (
    <div className={styles.img_list}>
      {!_.isEmpty(fileList) && fileList.map((item, index) => {
        return (
          <div className={styles.item} key={index}>
            <ImageComponent
              idx={index}
              imgSrc={item.originalUrl || item.src}
              showCropperIcon={false}
            ></ImageComponent>
          </div>
        );
      })}
    </div>
  )
}

export default ImageLIst;
