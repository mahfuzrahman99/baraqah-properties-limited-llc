

/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import BGPIC from '../assets/Error_Page.jpg';

const ErrorPage = () => {
  return (
    <div className='relative min-h-screen flex items-center justify-center bg-cover bg-opacity-35' style={{ backgroundImage: `url(${BGPIC})` }}>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className='text-center space-y-5 z-10 text-transparent bg-clip-text bg-gradient-to-l from-[#526d7c] to-[#a9a3cf]'>
        <h1 className='text-9xl font-extrabold'>404</h1>
        <h3 className='text-3xl font-semibold italic'>
          Sorry, we can't find where you want to go.
        </h3>
        <div className='mt-4'>
          <Link to={`/`} className="hover:text-white px-4 py-2 bg-transparent rounded hover:bg-[#a9a3cf] font-bold ">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
