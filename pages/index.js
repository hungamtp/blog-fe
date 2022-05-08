import Header from '../component/Header';
import HomePage from '../page/HomePage';
import Link from 'next/link';
import Profile from '../component/Profile';
export default function Home() {
  return (
    <div>
      <Link href="/">
        <HomePage />
      </Link>
      <Link href="/about">
        {/* <div style={{ width: '200px', height: '200PX', backgroundColor: 'red' }}></div> */}
        <Profile />
      </Link>
    </div>
  );
}
