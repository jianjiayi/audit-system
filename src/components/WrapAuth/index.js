/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useAccess, Access } from 'umi';
import { Button } from 'antd';

const wrapAuthButton = (props) => {
  const access = useAccess();
  const { text, pathUrl = '', perms = '', children, ...rest } = props;
  // console.log('access.canReadFoo', access.canReadFoo())

  return (
    <>
      {perms ? (
        <Access
          accessible={access.canReadButton(pathUrl, perms)}
          fallback={
            children ? (
              ''
            ) : (
              <Button {...rest} disabled>
                {text}
              </Button>
            )
          }
        >
          {children ? children : <Button {...rest}>{text}</Button>}
        </Access>
      ) : children ? (
        children
      ) : (
        <Button {...rest}>{text}</Button>
      )}
    </>
  );
};
export default wrapAuthButton;
