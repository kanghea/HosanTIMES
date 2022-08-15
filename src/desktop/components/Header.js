import React, {component, useState} from 'react';

function Header() {
    const date = new Date();
    const date1 = (date.toLocaleDateString('ko-kr'));
    return <>
    { 
        <div className="w-full h-20 flex align-middle items-center text justify-between shadow-sm m-0 ">
            <div className='text-[50px] text-center'>
                HOSAN TIEMS
            </div>
            <div>
                <ol>
                    <li className='px-2'>로그인</li>
                    <li className='px-2'>회원가입</li>
                    <li className='px-2'>글쓰기</li>
                    <li className='px-2'>글수정하기</li>
                    <li className='px-2'>검색하기</li>
                </ol>
            </div>
        </div>
    }
    </>
  }
  export default Header;