import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET /api/students
// Required fields in body: name, phone, wechatId
export async function GET(request: Request) {
  try {
    const apiKey = request.headers.get('API-Key');
    if (apiKey !== process.env.NEXT_PUBLIC_API_ROUTE_KEY) {
      const error_response = {
        status: 'fail',
        message: 'You are not authorized to call this API.',
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const students = await prisma.student.findMany();
    console.log('fee:', students);

    const json_response = {
      status: 'success',
      data: students,
    };
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.log('error: ', error);
    if (error.code === 'P2002') {
      const error_response = {
        status: 'fail',
        message: 'Student with title already exists',
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 409,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const error_response = {
      status: 'error',
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// POST /api/students
// Required fields in body: name, phone, wechatId
export async function POST(request: Request) {
  try {
    const apiKey = request.headers.get('API-Key');
    if (apiKey !== process.env.API_ROUTE_KEY) {
      const error_response = {
        status: 'fail',
        message: 'You are not authorized to call this API.',
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const json = await request.json();
    console.log('json: ', json);
    const { name, phone, wechatId } = json;

    const result = await prisma.student.create({
      data: {
        name: name,
        phone: phone,
        wechatId: wechatId,
      },
    });

    const json_response = {
      status: 'success',
      data: { result },
    };
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.log('error: ', error);
    if (error.code === 'P2002') {
      const error_response = {
        status: 'fail',
        message: 'Student with title already exists',
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 409,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const error_response = {
      status: 'error',
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
