/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import _ from 'lodash';
import ImageComponent from '@/components/Image';

function ImageLIst(props) {
  const {
    fileList = []
  } = props;

  return (
    <div style={{display: 'flex',flexWrap: 'wrap'}}>
      {
        !_.isEmpty(fileList) ?
        fileList.map((item, index) => {
          return (
            <div style={{margin: '0 8px 8px 0'}} key={index}>
              <ImageComponent
                idx={index}
                imgSrc={item.originalUrl || item.url || item.src}
                showCropperIcon={false}
              ></ImageComponent>
            </div>
          );
        }):
        <p>暂无内容图片</p>
      }
    </div>
  )
}

export default ImageLIst;
