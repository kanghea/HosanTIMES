import Header from "./Header";

function Content0(){

    const title = ["호산고등학교.. 충격"]
    const produce = ["충격적인 호산고 입시근황 충격적"]
    const writer = ["이승민"]
    const Content = ["로봇공학반의 개설로 주목받았던 호산고 ... 충격을 주고 있... 귀추가 주목됩니다."]
    
    const date = new Date();
    const urlParams = new URL(window.location.href).searchParams;

    const name = urlParams.get('name');
    const date1 = (date.toLocaleDateString('ko-kr'));
    const searchParams = new URLSearchParams(window.location.search);

    for (const param of searchParams) {
      console.log(param);
    }

    return(
        
        <div>
            <Header/>
            <div className="flex mx-60">
                <div>
                    <div className="border-b-[1px] border-b-black">
                        <h1 className='text-5xl'>"{title[0]}"</h1>
                        <h2>{produce[0]}</h2>
                        <h4 className=' rounded-3xl p-1 border-2 shadow-[10px] w-24'>{writer[0]} 기자</h4>
                        <h4>입력일:{date1}</h4>
                    </div>
                    <div>
                        <h3 className='font-semibold'>{Content[0]}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content0;