import React from 'react';
import { Countup } from 'count-up-react';
import classNames from 'classnames';
import _ from 'lodash';

import styles from './index.module.less';

function TextCountUp(props) {
  const countupProps = {
    className: styles.countup,
    itemHeight: 40,
    symbol: ',',
    scrollTime: 2000,
    initStatus: true,
  };

  const { className, dataSource } = props;

  return (
    <div className={classNames(className, styles.container)}>
      {!_.isEmpty(dataSource) &&
        dataSource.map((item, index) => {
          return (
            <div key={index} className={styles.item}>
              <span>{item.name}</span>
              <Countup number={item.value} {...countupProps} />
            </div>
          );
        })}
    </div>
  );
}

export default TextCountUp;
