/* eslint-disable func-names */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useImperativeHandle, forwardRef } from 'react';

let editor = null;

const toolbars = [
  [
    'source',
    '|',
    'undo',
    'redo',
    '|',
    'bold',
    'italic',
    'underline',
    // 'fontborder',
    'strikethrough',
    'removeformat',
    // 'formatmatch',
    // 'autotypeset',
    'blockquote',
    // 'pasteplain',
    '|',
    'forecolor',
    'backcolor',
    'insertorderedlist',
    'insertunorderedlist',
    '|',
    'paragraph',
    'fontfamily',
    'fontsize',
    '|',
    'indent',
    'justifyleft',
    'justifycenter',
    'justifyright',
    'justifyjustify',
    '|',
    // 'touppercase', 'tolowercase', '|',
    'link',
    // 'unlink',
    '|',
    'imagenone',
    'imageleft',
    'imageright',
    'imagecenter',
    '|',
    'simpleupload',
    'insertimage',
    // '|',
    // 'horizontal',
    // 'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', '|',
    // 'searchreplace'
  ],
];

function UEditor(props, ref){
  useEffect(() => {
    if (window.UE.getEditor) {
      setConfig(props.initData, props.config, props.setContent);
    }
    
    return () => {
      editor.destroy(props.id);
      // 组件销毁时候移除页面中id的textarea
      let tagElement = window.document.querySelector(`#ueditor-container`);
      tagElement.parentElement.removeChild(tagElement);
      // editor.removeListener(); //不要打开，否则返回有问题报错
    };
  }, []);


  // 初始化编辑器
  const setConfig = (initData, config, setContent) => {
    editor =
      window.UE &&
      window.UE.getEditor('ueditor-container', {
        toolbars,
        // enableAutoSave: false,
        maximumWords: 1000000,
        scaleEnabled: false,
        autoFloatEnabled: false,
        autoHeightEnabled: false,
        initialFrameHeight: (config && config.initialFrameHeight) || 450,
        initialFrameWidth: (config && config.initialFrameWidth) || '100%',
        zIndex: 1,
      }
    );
    editor.ready(() => {
      if (initData) {
        editor.setContent(initData); // 设置默认值/表单回显
      }
    });
    editor.addListener('blur', function () {
      setContent(editor.getContent());
    });
  };

  // 暴露方法
  useImperativeHandle(ref, () => ({
    getUEContent: () => {
      return editor.getContent(); // 获取编辑器内容
    },
  }));


  return <script id="ueditor-container" type="text/plain" />;
};

export default forwardRef(UEditor);
