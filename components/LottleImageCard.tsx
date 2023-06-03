import React from 'react';
import Image from 'next/image';

type Props = {
  url: string;
};

export default function LottleImageCard(props: Props) {
  const { url } = props;

  return (
    <div className='bg-white rounded-lg'>
      <div className='px-3 pt-6 pb-3 leading-relaxed'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        autem doloremque veritatis accusamus minima suscipit nihil quam velit
        sequi cumque. Vitae vel minima repudiandae expedita eaque saepe facere?
        Expedita, quisquam.
      </div>
      <Image
        src={url}
        alt='图片展示'
        width={900}
        height={600}
        priority
        className='rounded-lg'
      />
    </div>
  );
}
