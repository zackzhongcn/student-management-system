import React from 'react';
import { Divider } from 'antd';

export default function LottleDivider() {
  return (
    <div className='flex justify-center'>
      <Divider
        className='w-72 min-w-0'
        style={{ borderBlockStartColor: '#8ea9ae' }}
      />
    </div>
  );
}
