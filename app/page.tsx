'use client';

import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Form, Input, Button } from 'antd';
import { classInfo, imageUrls, lottleDescription } from '@/utils/constants';
import LottleDivider from '@/components/LottleDivider';
import LottleDescription from '@/components/LottleInfoSection';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Home() {
  const getSutdents = useCallback(async () => {
    try {
      const baseUrl = '/api/students';
      const students = await axios.get(baseUrl, {
        headers: { 'Api-Key': process.env.NEXT_PUBLIC_API_ROUTE_KEY },
      });
    } catch (error: any) {
      // console.log('errror: ', error);
      // toast.error('Failed to get students records.');
    }
  }, []);

  useEffect(() => {
    getSutdents();
  }, [getSutdents]);

  const onFinish = async (values: any) => {
    try {
      const baseUrl = '/api/students';
      const result = await axios.post(baseUrl, JSON.stringify(values), {
        headers: { 'Api-Key': process.env.NEXT_PUBLIC_API_ROUTE_KEY },
      });
      console.log('result: ', result);
      toast.success('登记信息成功！');
    } catch (error: any) {
      console.error(error);
      toast.error('登记信息失败，请再次尝试或联系工作人员。');
    }
  };

  return (
    <main className='text-cetenter'>
      <div className='px-4'>
        <h1 className='text-5xl pt-4'>乐涂科创</h1>
        <h2 className='text-4xl'>2023年科技类白名单赛事集训课程</h2>
        <LottleDivider />
        {lottleDescription.map((desc, i) => (
          <div key={i}>
            <LottleDescription
              title={desc.title}
              description={desc.descriiption}
            />
            <LottleDivider />
          </div>
        ))}
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
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {imageUrls.map((url, i) => (
            <div key={i}>
              <Image
                src={url}
                alt='图片展示'
                width={900}
                height={600}
                priority
              />
            </div>
          ))}
        </div>
        <LottleDivider />
        <h3 className='text-2xl mt-4 mb-3'>学员信息登记</h3>
        <div className='flex justify-center'>
          <Form
            name='registration'
            onFinish={onFinish}
            initialValues={{ remember: true }}
            autoComplete='off'
            layout='vertical'
            size='large'
            className='w-full md:w-2/3'
          >
            <div className='px-10 py-4 mb-5 bg-secondary shadow-lg hover:shadow-indigo-500/40'>
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
                className='mb-5'
              >
                <Input />
              </Form.Item>
            </div>
            <Form.Item className='md:px-5'>
              <Button
                htmlType='submit'
                className='w-full btn-secondary hover:drop-shadow-lg hover:shadow-indigo-500/40'
              >
                提交
              </Button>
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
