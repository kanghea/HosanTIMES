import React, {component, useState} from 'react';

function Header() {
    const date = new Date();
    return <>
    { 
        <div className="w-full h-20 flex align-middle items-center text justify-between border-b-2 m-0 sticky text-center ">
            <a href='/'>
                <div className='text-[50px] text-center'>
                    HOSAN TIEMS
                </div>
            </a>
            <div>
                <ol>
                    <li className='px-2 float-left'>메인페이지</li>
                    <li className='px-2 float-left'>갤러리</li>
                    <li className='px-2 float-left'>급식메뉴</li>
                    <li className='px-2 float-left'>학사일정</li>
                    <li className='px-2 float-left'>길찾기</li>
                </ol>
            </div>
        </div>
    }
    </>
  }
  export default Header;