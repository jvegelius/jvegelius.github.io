import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

export const Card = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <img
        src={require('./johan.jpg')}
        alt={'Lukas'}
        className={'shadow rounded-full flex items-center justify-center w-64'}
      />
      <div className='flex flex-row justify-center mt-2 text-5xl laptop:text-4xl'>
        <a href={'https://github.com/jvegelius'} className='hover:text-blue-400'>
          <AiFillGithub />
        </a>
        <a
          href={'https://www.linkedin.com/in/johan-vegelius-81a01790/'}
          className='hover:text-blue-400'
        >
          <AiFillLinkedin />
        </a>
        <a href={'mailto: johan.vegelius@gmail.com'} className='hover:text-blue-400'>
          <AiFillMail />
        </a>
      </div>
    </div>
  );
};
