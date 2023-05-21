import './globals.css';
import 'antd/dist/reset.css';

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
      </body>
    </html>
  );
}
