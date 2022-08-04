import React, {useState} from 'react';

function Act() {
    const [act1,setAct1] = useState(false);
    const [act2, setAct2] = useState(false);
    const [act3, setAct3] = useState(false);
    const [act11,setAct11] = useState(true);
    const [act21, setAct21] = useState(false);
    const [act31, setAct31] = useState(false);
    const [act12,setAct12] = useState(false);
    const [act22, setAct22] = useState(false);
    const [act32, setAct32] = useState(false);
    return <>
      <div className="w-full h-full flex mb-36 gap-10 mt-5 xl:px-26 justify-center transition-all flex-wrap">
        <a className='w-[525px] box-border h-full '>
          <div className="mt-5 w-[525px] bg-gray-100 hover:bg-blue-400 hover:mt-0 hover:mb-5 duration-200 h-[632px] rounded-[40px] p-10 hover:text-white hover:border-white border-stone-400 ">
            <div className="text-[40px] leading-[60px] font-semibold">숙제 자가진단</div>
            <div className="text-lg font-normal pt-3">학생들이 스스로 숙제를 하고<br></br>그 추이를 기록할수 있는 기능입니다!</div>
            <div className="pt-5">
              <button className="px-3 py-3 w-32 h-auto border-2 rounded-3xl" onClick={() => { setAct1(true); }}>자세히보기➜</button>
            </div>
            <img src='img/등록.png' className='h-[150px] mt-52 ml-72'  />
          </div>
        </a>
        <a href="/" className='w-[525px] h-full'>
          <div className="mt-5 w-[525px] bg-gray-100 hover:bg-green-400 hover:mt-0 hover:mb-5 duration-200 h-[632px] rounded-[40px] p-10 hover:text-white hover:border-white border-stone-400">
            <div className="text-[40px] leading-[60px] font-semibold">출결 관리 </div>
            <div className="text-lg font-normal pt-3">수업시작 20분전에 알림을 해줍니다!<br></br>피치못할 사정으로 등원하지 못할 경우<br></br>그 사유를 적으면 자동으로 결석처리가 됩니다.</div>
            <div className="pt-5">
              <button className="px-3 py-3 w-32 h-auto border-2 rounded-3xl" onClick={() => {setAct2(true);}}>자세히보기➜</button>
            </div>
            <img src='img/지도이미지.png' className='h-[150px] mt-32 ml-72'  />
          </div>
        </a>
        <a href="/" className='w-[525px] h-full'>
          <div className="mt-5 bg-gray-100 hover:bg-yellow-400 hover:mt-0 hover:mb-5 duration-200 h-[632px] rounded-[40px] p-10 hover:text-white hover:border-white border-stone-400 ">
            <div className="text-[40px] leading-[60px] font-semibold">발빠른 부동산 이슈</div>
            <div className="text-lg font-normal pt-3">핵심적인 부동산 뉴스들만 콕콕!<br></br>알림신청으로 남들보다 앞서가세요!</div>
            <div className="pt-5">
              <div className="px-3 py-3 w-32 h-auto border-2 rounded-3xl">자세히보기➜</div>
            </div>
          </div>
        </a>
        <a href="/" className='w-[525px] h-full'>
          <div className="mt-5 w-[525px] bg-gray-100 hover:bg-red-400 hover:mt-0 hover:mb-5 duration-200 h-[632px] rounded-[40px] p-10 hover:text-white hover:border-white border-stone-400 ">
            <div className="text-[40px] leading-[60px] font-semibold">건물주모드</div>
            <div className="text-lg font-normal pt-3">건물주님들을 위한 핵심 기능!<br></br>대.부.연이 건물주 임차관리를 돕습니다</div>
            <div className="pt-5">
              <div className="px-3 py-3 w-32 h-auto border-2 rounded-3xl">자세히보기➜</div>
            </div>
          </div>
        </a>
      </div>
      {act1&&
        <div>
          <div className='z-10 w-full h-full bg-black/70 fixed top-0 left-0 flex justify-center items-center'>
            <div className='flex w-[720px] h-[600px] p-8 bg-white rounded-[40px]'>
              <div className='absolute w-[640px] border-b-gray-400'>
                <div className='text-2xl mb-6 font-semibold'>매물등록</div>
                <ul className='flex gap-12 text-xl text-gray-400 border-b-[1px] border-gray-400 font-[550] pb-5'>
                  <li className= 'hover:text-black focus:text-black cursor-pointer' onClick={()=>{setAct11(true);}}>
                    {act11 ? <div className='text-black'>간편한 매물등록</div>
                      : <div>간편한 매물등록</div>}
            
                  </li>
                  <li className='hover:text-black cursor-pointer' onClick={()=>{setAct11(false);}}>
                    <button className='focus:text-black'>
                      {act11 ? <div>철저한 매물관리</div>
                      : <div className='text-black'>철저한 매물관리</div>}
                    </button>
                  </li >
                  <button type="button" className="flex-none col-span-1 text-gray-400 hover:text-gray-800 ml-auto" onClick={() => {
                    setAct1(false);
                  }}>
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </ul>
                {act11
                    ?<div> 
                      <div className='w-auto h-auto mt-5 block overflow-y-scroll overflow-x-hidden'>
                        <div>Content</div>
                        <div>Content</div>
                      </div>
                    </div>
                    :<div className='w-auto h-auto mt-5 block overflow-y-scroll overflow-x-hidden'>
                      <div>content?</div>
                    </div>} 
              </div>
            </div>
          </div>
        </div>
      }
    </>
  }
  export default Act;