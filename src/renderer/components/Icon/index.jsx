import React from 'react';
import classNames from 'classnames';

const Icon = (props) => {
  return (
    <span className={classNames(['iconfont', props.icon, props.className])} />
  );
};

export default Icon;
