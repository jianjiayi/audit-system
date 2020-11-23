/* eslint-disable no-func-assign */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

import ButtonImgModal from '../../components/ButtonImgModal';
import ButtonMobilePreview from '../../components/ButtonMobilePreview';
import ButonCoverImgModal from '../../components/ButonCoverImgModal';

import styles from './index.module.less';

function SectionCover(props, ref) {
  const coverModal = useRef(null);
  const [coverImg, setCoverImg] = useState([]);

  const [dataList, setDataList] = useState([]);

  const { className, curArt, newsDataType, dispatch } = props;
  // 向父组件暴露的方法
  useImperativeHandle(ref, () => {
    return coverImg;
  });

  useEffect(() => {
    setDataList((curArt.coverInfo && curArt.coverInfo.imageInfos) || curArt.images || []);
    setCoverImg((curArt.coverInfo && curArt.coverInfo.imageInfos) || []);
  }, [curArt]);

  // 三图
  const coverImgProps = {
    title: '三图',
    okText: '修改封图',
    disabled: dataList.length < 3,
    dataList: dataList,
    handleOk: () => {
      // 打开修改封面图
      coverModal.current.setVisible(true);
    },
  };

  // 修改封面图
  const ChangeImgModalProps = {
    title: '修改封面图',
    fileList: (curArt.coverInfo && curArt.coverInfo.imageInfos) || [],
    dispatch,
    setCoverImages: data => {
      console.log(data);
      setCoverImg(data);
    },
  };

  // 正文全图
  const contentImgsProps = {
    title: '正文全图',
    footer: null,
    dataList: curArt.images || [],
  };

  // 预览效果
  const MobilePreviewProps = {
    title: '预览效果',
    footer: null,
    width: 420,
    curArt, //当前文章
    newsDataType,
  };

  console.log(curArt.coverInfo && curArt.coverInfo.imageInfos);

  return (
    <div className={classNames(className, styles['section1'])}>
      <div className={styles['cover-img']}>
        <img
          src={
            curArt.coverInfo &&
            !_.isEmpty(curArt.coverInfo.imageInfos) &&
            curArt.coverInfo.imageInfos[0].originalUrl
          }
        ></img>
      </div>
      <div className={styles['button-box']}>
        <ButtonImgModal {...coverImgProps}></ButtonImgModal>
        <ButonCoverImgModal {...ChangeImgModalProps} ref={coverModal}></ButonCoverImgModal>
        <ButtonImgModal {...contentImgsProps}></ButtonImgModal>
        <ButtonMobilePreview {...MobilePreviewProps}></ButtonMobilePreview>
      </div>
    </div>
  );
}

SectionCover = forwardRef(SectionCover);

export default SectionCover;
