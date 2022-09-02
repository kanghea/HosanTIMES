import './mainpage.css';
function Mainpage(){
    return(
        <div className="my-10 flex h-full border-b-2 pb-5">
            <a href="/0">
                <div className="w-[780px] flex flex-col justify-center align-middle items-center p-3 rounded-[10px] h-auto">
                    <img src="img/hosan1.jpg" className="rounded-[10px]"></img>
                    <h1 className="m-0">"학교 급식 만족도를 높일수 없을까?"</h1>
                    <h2 className="text-blue-900 m-0">호산고 급식 설문조사</h2>
                </div>
            </a>
            <div>
                <ol className="flex flex-col justify-between">
                    <li><a href='/1'><h2 className="hover:border-b-2 hover:border-b-black border-b-2 pt-3">호산고의 단점에는 어떤게 있을까?[한다연]</h2></a></li>
                    <li><a href='/2'><h2 className="hover:border-b-2 hover:border-b-black border-b-2 pt-3">입시에서 중요한것은 직시[박보현]</h2></a></li>
                    <li><a href='/3'><h2 className="hover:border-b-2 hover:border-b-black border-b-2 pt-3">3년만의 체육대회[김지안]</h2></a></li>
                    <li><a href='/4'><h2 className="hover:border-b-2 hover:border-b-black border-b-2 pt-3">호산고 키오스크 생겨.. 어떤가?[이승민]</h2></a></li>
                    <li><a href='/5'><h2 className="hover:border-b-2 hover:border-b-black border-b-2 pt-3">열정넘치는 호산고 학생들의 진로계열특강<br></br>[이채빈]</h2></a></li>
                    <li><a href='/6'><h2 className="hover:border-b-2 hover:border-b-black border-b-2 pt-3">자율로 이뤄지는 야자,오자 1학년의 <br></br>참여 현황은?[최다혜]</h2></a></li>
                </ol>
            </div>
        </div>
    )
}

export default Mainpage;