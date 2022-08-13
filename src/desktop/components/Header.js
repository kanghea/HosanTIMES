import React, {component, useState} from 'react';

function Header() {
    const date = new Date();
    const date1 = (date.toLocaleDateString('ko-kr'));
    return <>
    { 
        <div className="w-full h-20 flex align-middle items-center text justify-between shadow-sm m-0">
            <div>{date1}</div>
            <div className='text-[50px]'>
                HOSAN TIEMS
            </div>
            <div>
                <ol>
                    <li className='px-2'>😠</li>
                    <li className='px-2'>💓</li>
                    <li className='px-2'>👍</li>
                    <li className='px-2'>🧑</li>
                </ol>
            </div>
        </div>
    }
    </>
  }
  export default Header;