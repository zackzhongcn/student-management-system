import React from 'react';
import { Divider } from 'antd';

type Props = {
  title: string;
  description: string;
};

export default function LottleDescription(props: Props) {
  return (
    <>
      <h3 className='text-2xl mt-4 mb-5'>{props.title}</h3>
      <div className='text-left mb-4'>{props.description}</div>
    </>
  );
}
