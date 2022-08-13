function Content(){
    const title = ["호산고등학교.. 충격","세상에 이런일이..."]
    const produce = ["충격적인 호산고 입시근황 충격적"]
    const writer = ["이승민"]
    const Content = ["로봇공학반의 개설로 주목받았던 호산고 ... 충격을 주고 있... 귀추가 주목됩니다."]
    return(
        <div className="flex justify-center">
            <div>
                <div className="shadow-sm">
                    <h1>"{title[0]}"</h1>
                    <h2>{produce[0]}</h2>
                    <h4>{writer[0]} 기자</h4>
                </div>
                <div>
                    <h3>{Content[0]}</h3>
                </div>
            </div>
        </div>
    )
}

export default Content;