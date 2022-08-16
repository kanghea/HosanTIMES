import './mainpage.css';
function Mainpage(){
    return(
        <div className="my-10 flex h-full border-b-2 pb-5">
            <a href="/0">
                <div className="w-[780px] flex flex-col justify-center align-middle items-center p-3 rounded-[10px] h-auto">
                    <img src="img/hosan1.jpg" className="rounded-[10px]"></img>
                    <h1 className="m-0">"충격적인 호산고 입시 근황"</h1>
                    <h2 className="text-blue-900 m-0">이승민의 입시분석</h2>
                </div>
            </a>
            <div>
                <ol className="flex flex-col justify-between">
                    <li><a href='/1'><h2 className="hover:border-b-2 hover:border-b-black border-b-2 pt-3">세상에 이런일이.. 호산고 충격</h2></a></li>
                    <li><a href='/2'><h2 className="hover:border-b-2 hover:border-b-black border-b-2 pt-3">입시에서 중요한것은 직시[박보현]</h2></a></li>
                    <li><a href='https://www.jinhak.or.kr/subList/20000000284'><h2 className="hover:border-b-2 hover:border-b-black border-b-2 pt-3">2023학생부종합전형 어떻게 바뀌나?</h2></a></li>
                    <li><a><h2 className="hover:border-b-2 hover:border-b-black border-b-2 pt-3">호산고 키오스크 생겨.. 어떤가?</h2></a></li>
                    <li><a><h2 className="hover:border-b-2 hover:border-b-black border-b-2 pt-3">홍수시 이렇게 해라! 장민혁의 솔루션은?</h2></a></li>
                    <li><a><h2 className="hover:border-b-2 hover:border-b-black border-b-2 pt-3">지금은 XX주 살때 [강해의 주식교실]</h2></a></li>
                </ol>
            </div>
        </div>
    )
}

export default Mainpage;