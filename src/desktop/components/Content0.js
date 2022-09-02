import { useState } from "react";
import Header from "./Header";

function Content0() {
    let [userName] = useState('hacker');
    let [comment, setComment] = useState('');
    let [feedComments, setFeedComments] = useState([]);
    let [isValid, setIsValid] = useState(false);

    let post = e => {
        const copyFeedComments = [...feedComments];
        copyFeedComments.push(comment);
        setFeedComments(copyFeedComments);
        setComment('');
    }
    const title = ["학교 급식, 학생들의 만족도를 높일 수는 없을까?"]
    const produce = [""]
    const writer = ["강은빈"]
    const Content = ["로봇공학반의 개설로 주목받았던 호산고 ... 충격을 주고 있... 귀추가 주목됩니다."]

    const date = new Date();
    const urlParams = new URL(window.location.href).searchParams;

    const name = urlParams.get('name');
    const date1 = (date.toLocaleDateString('ko-kr'));
    const searchParams = new URLSearchParams(window.location.search);

    for (const param of searchParams) {
        console.log(param);
    }
    {feedComments.map((commentArr,i)=> {
        return ( 
            <CommentList
                userName={userName}
                userComment={commentArr}
                key={i}
            />
        );
    })}
    const CommentList = props => {
        return(
            <div className="userCommentBox">
                <p className="userName">{props.userName}</p>
                <p className="userComment">{props.userComment}</p>
            </div>
        );
    };

    return (

        <div>
            <Header />
            <div className="flex mx-40">
                <div>
                    <div className="border-b-[1px] border-b-black">
                        <h1 className='text-5xl'>{title[0]}</h1>
                        <h2>호산고 급식에 대한 학생들의 생각</h2>
                        <h4 className=' rounded-3xl p-1 border-2 shadow-[10px] w-24'>{writer[0]} 기자</h4>
                        <h4>입력일:2022.07.19</h4>
                    </div>
                    <div className="mx-0">
                        <h3 className='font-semibold'>학기 초, 매일 급식을 먹던 학생들이 최근에는 급식을 잘 먹지 않는 모습이 보인다.</h3>

                        <h3>
                            1학년 한 반을 대상으로 실시한 급식 이용 설문조사에서 ‘급식을 매일 먹는다’에 응답한 학생은 47.8%,
                            ‘급식을 자주 먹는다’에 응답한 학생은 30.4%였다. 급식을 가끔 먹거나 전혀 먹지 않는 학생 또한
                            보였다. 급식을 먹지 않는 이유에는 ‘급식이 맛이 없거나 입에 맞지 않는다’, ‘급식실 위생이 좋지
                            않은 것 같다’ 등의 이유가 있었다.
                            배식 받는 양에 대한 설문조사도 함께 시행하였는데, ‘급식 양이 적당하다’에 응답한 학생은 47.8%,
                            ‘급식 양이 많다’에 응답한 학생은 43.5%였고, ‘급식 양이 적다’에 응답한 학생도 8.7%가 있었다.
                            급식 양의 변화에 관련하여 ‘양이 적당하여 변화가 필요하지 않다’, ‘양이 많아 배식 받는 양을 줄이면 좋겠다’,
                            ‘양이 적어서 배식 받는 양을 늘리면 좋겠다’ 등의 반응이 나왔다.
                        </h3>
                        <div className="flex">
                            <img src="../img/1-1.png"></img><img src="../img/1-2.png"></img>
                        </div>
                        <h5 className="text-gray-400">한 학급을 대상으로 실시한 ‘급식 설문조사’이다. 왼쪽:급식 이용 여부 / 오른쪽 : 급식 양</h5>

                        <h3>
                            급식 문제와 관련하여 해결 방안에 대해 몇몇 학생과 간단한 인터뷰를 진행하였다.
                            인터뷰에 참여해 준 학생들은 여러 의견을 제시하였다.
                            “급식을 자율 배식으로 바꾸는 게 좋을 것 같다. 가끔 급식을 먹을 때 확인해 보면 버리는 양이 너무 많
                            고 낭비가 된다고 느낀다. 직접 담으면 잔반량이 확실히 눈에 띄게 줄 것 같다. 급식 지도 시간이나 먹는
                            시간은 지금보단 오래 걸리겠지만, 낭비를 막기 위해 자율 배식을 하면 좋을 것 같다.”
                            “급식실 환경을 조금 개선하면 좋을 것 같다. 급식실 특성상 조리실 온도가 높고 습하고, 음식물이 있기
                            때문에 벌레가 발생하는 것은 어쩔 수 없는 것 같다. 그러나 급식을 먹을 때 벌레가 조금 많이 날아다니
                            는 등의 문제로 급식을 먹기 조금 불편하고 꺼려지는 경향이 있다.”
                            “학생들 입맛에 급식이 잘 맞지 않아 급식을 먹지 않는 경우가 대다수인 것 같다. 음식의 종류뿐 아니라
                            음식의 간도 잘 맞지 않아 불편함을 호소하는 학생들이 주로 보인다. 한두 달에 한 번씩 주기적으로 급
                            식 만족도 설문조사를 통하여 학생들의 의견을 적극 수렴한다면 급식을 먹는 학생이 늘어날 것 같다.”
                            위 내용처럼 학생들은 급식 환경 개선 및 급식 이용 횟수 증가를 위하여 평소 자신이 느꼈던 불편한 점
                            을 이야기하며 개선 방안을 함께 제시해 주었다.
                        </h3>
                        <h3>
                            급식과 관련한 학생들의 간단한 설문조사 및 인터뷰를 통하여 건의 사항을 쉽게 확인할 수 있었고, 이러
                            한 건의 사항이 하루빨리 해결이 되어 호산고 학생 모두가 건강한 급식 생활을 할 수 있길 바란다.
                        </h3>
                    </div>
                    <input
                        type={"text"}
                        className="inputComment"
                        placeholder="댓글 달기"
                        onChange={e => {
                            setComment(e.target.value);
                        }}
                        onKeyUp={e => {
                            e.target.value.length > 0
                                ? setIsValid(true)
                                : setIsValid(false);
                        }}

                        value={comment}
                    />
                    <button
                        type="button"
                        className={
                            comment.length > 0
                                ? 'submitCommentActive'
                                : 'submitCommentInactive'
                        }
                        onClick={post}
                        disabled={isValid ? false : true}
                    >
                        게시
                    </button>
                    <CommentList/>
                </div>
            </div>
        </div>
    )
}

export default Content0;