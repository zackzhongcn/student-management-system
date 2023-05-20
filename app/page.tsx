'use client';

import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Form, Input, Button } from 'antd';
import { classInfo } from '@/utils/constants';
import LottleDivider from '@/components/LottleDivider';

export default function Home() {
  const columns = [
    {
      title: '课次',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
    },
  ];

  const getSutdents = useCallback(async () => {
    const result = await fetch('/api/students', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const stu = await result.text();
    console.log('stu: ', result.body, stu);
  }, []);

  useEffect(() => {
    getSutdents();
  }, [getSutdents]);

  const onFinish = async (values: any) => {
    console.log(values);
    try {
      const result = await fetch('/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      console.log('result: ', result);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <main className='text-cetenter'>
      <div className='px-4'>
        <h1 className='text-5xl pt-4'>乐涂科创</h1>
        <h2 className='text-4xl'>2023年科技类白名单赛事集训课程</h2>
        <LottleDivider />
        <h3 className='text-2xl mt-4 mb-5'>机构介绍</h3>
        <div className='mb-4'>
          乐涂科创，广州本土专业的打科技类竞赛机构。致力于让孩子以最高的效率解决JL问题，并且在比赛备赛过程体会到科技编程知识的奥妙。带领孩子以科技的视角去“发现问题，解决问题”
        </div>
        <LottleDivider />
        <h3 className='text-2xl mt-4 mb-5'>课程介绍</h3>
        <div className='mb-4'>
          2023下半年科技类白名单比赛集训介绍。快速备赛“广州市中小学生科技创客电视大赛”“全国青少年科技创新大赛”。剑指科技类白名单赛事，广州市教育局赛事。7月学习编程知识与硬件内容。8月制作作品。
        </div>
        <LottleDivider />
        <h3 className='text-2xl mt-4 mb-5'>课程内容</h3>
        <div className='flex justify-center'>
          <ul className='list-inside list-disc text-left'>
            {classInfo.map((info, i) => (
              <li key={i}>
                {info.index}:&nbsp;&nbsp;&nbsp;{info.content}
              </li>
            ))}
          </ul>
        </div>
        <LottleDivider />
        <h3 className='text-2xl mt-4 mb-5'>课堂及作品展示</h3>
        <div className='grid grid-cols-3 gap-4'>
          <div>
            <Image
              src='/class-1.jpg'
              alt='课堂展示'
              width={900}
              height={600}
              priority
            />
          </div>
          <div>
            <Image
              src='/class-2.jpg'
              alt='课堂展示'
              width={900}
              height={600}
              priority
            />
          </div>
          <div>
            <Image
              src='/class-3.jpg'
              alt='课堂展示'
              width={900}
              height={600}
              priority
            />
          </div>
          <div>
            <Image
              src='/portfolio-1.jpg'
              alt='作品集'
              width={900}
              height={600}
              priority
            />
          </div>
          <div>
            <Image
              src='/portfolio-2.jpg'
              alt='作品集'
              width={900}
              height={600}
              priority
            />
          </div>
          <div>
            <Image
              src='/portfolio-3.jpg'
              alt='作品集'
              width={900}
              height={600}
              priority
            />
          </div>
        </div>
        <LottleDivider />
        <h3 className='text-2xl mt-4 mb-5'>学员信息</h3>
        <div className='flex justify-center'>
          <Form
            name='basic'
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            initialValues={{ remember: true }}
            autoComplete='off'
          >
            <Form.Item
              label='姓名'
              name='name'
              rules={[{ required: true, message: '请输入您的姓名！' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='联系电话'
              name='phone'
              rules={[{ required: true, message: '请输入您的手机号！' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='微信号'
              name='wechatId'
              rules={[{ required: true, message: '请输入您的微信号！' }]}
              className='mb-3'
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button htmlType='submit'>提交</Button>
            </Form.Item>
          </Form>
        </div>
        <LottleDivider />
        <h3 className='text-2xl mt-4 mb-5'>缴费方式</h3>
        <div className='flex justify-center'>
          <img src='/payment-qr.jpg' alt='缴费二维码' className='w-72' />
        </div>
      </div>
    </main>
  );
}
