'use client';

import React from 'react';
import Image from 'next/image';
import { Typography, Divider, Card, Table, Form, Input } from 'antd';
import { classInfo } from '@/utils/constants';

const { Title } = Typography;

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

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Card className='px-4'>
        <Title className='text-center pt-4'>
          - 乐涂科创｜2023年科技类白名单赛事集训课程
        </Title>
        <Divider />
        <Title level={2} className='text-center'>
          - 2023下半年科技类白名单比赛集训介绍
        </Title>
        <Table dataSource={classInfo} columns={columns} />
        <Title level={2} className='text-center'>
          - 作品展示
        </Title>
        <Image
          src='/portfolio-1.jpg'
          alt='作品集'
          width={900}
          height={600}
          priority
          className='mb-3'
        />
        <Image
          src='/portfolio-2.jpg'
          alt='作品集'
          width={900}
          height={600}
          priority
          className='mb-3'
        />
        <Image
          src='/portfolio-3.jpg'
          alt='作品集'
          width={900}
          height={600}
          priority
          className='mb-3'
        />
        <Title level={2} className='text-center'>
          - 学员信息
        </Title>
        <Form
          name='basic'
          labelWrap
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete='off'
        >
          <Form.Item
            label='姓名'
            name='username'
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
          >
            <Input />
          </Form.Item>
        </Form>
        <Title level={2} className='text-center'>
          - 缴费方式
        </Title>
        <Image
          src='/payment-qr.jpg'
          alt='缴费二维码'
          width={900}
          height={1300}
          priority
          className='mb-3'
        />
      </Card>
    </main>
  );
}
