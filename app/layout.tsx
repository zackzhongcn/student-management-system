import './globals.css';
import 'antd/dist/reset.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: '乐涂科创',
  description: '乐涂科创课程简介',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-primary flex justify-center'>
        <div className='w-90 md:w-1/2 py-10 md:py-24'>{children}</div>
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
        />
      </body>
    </html>
  );
}
