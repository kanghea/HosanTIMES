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
    const date = new Date();
    const urlParams = new URL(window.location.href).searchParams;

    const name = urlParams.get('name');
    const date1 = (date.toLocaleDateString('ko-kr'));
    const searchParams = new URLSearchParams(window.location.search);

    for (const param of searchParams) {
        console.log(param);
    }
    {
        feedComments.map((commentArr, i) => {
            return (
                <CommentList
                    userName={userName}
                    userComment={commentArr}
                    key={i}
                />
            );
        })
    }
    const CommentList = props => {
        return (
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
                        <h1 className='text-5xl'>자율로 이루어지는 오자,야자</h1>
                        <h2>1학년의 참여 현황은?</h2>
                        <h4 className=' rounded-3xl p-1 border-2 shadow-[10px] w-24'>최다혜 기자</h4>
                        <h4>입력일:2022.07.18</h4>
                    </div>
                    <div className="mx-0">
                        <h3 className='font-semibold'>

                            1학년들은 지난 한 학기동안 고등학생이 된 후 흔히 줄여서 '오자', '야자'라고 부르는 오후자율학습, 야간자율학습을 했다. 희망자를 받아서 진행하는 것이기 때문에 참여학생들이 들쑥날쑥했다. 그러나 현재는 참여하는 학생들의 윤곽이 어느정도 잡혔다. 자율학습은 대체로 새로 추가하기보단 해오던 사람이 계속하는 경향을 보인다.
                        </h3>

                        <h3>
                            자율학습에 강제성이 없기때문에 인원 수가 많지 않아 두 반씩 합쳐서 진행하고 있다. 매일 야자까지 하는 학생부터 오자만 신청한 학생까지 다양하며 각자 신청한 요일과 시간이 다르다. 또한 개인사정, 학원보강, 병원, 결석 등 다양한 이유로 참석을 하지 못하는 경우도 적지 않기 때문에 날마다 참여인원이 달라진다.
                        </h3>
                        <div className="flex">
                            <img src="../img/6-1.jpg"></img>
                        </div>
                        <h5 className="text-gray-400">1학년 자습실</h5>

                        <h3>
                            지난 6월 A, B 두 반의 오자, 야자 평균 참여 인원을 분석해 본 결과 오자는 매일 평균 17명, 야자는 매일 평균 6명으로 나타났다. (신청했지만 참여하지 못한 경우도 참여인원에서 제외하였다.) 야자 신청 학생 수가 오자보다 적은 이유는 저녁시간에 진행되는 학원의 영향이 크다.</h3>
                        <h3>
                            추가로, 수요일 같은 경우에는 희망자를 받아서 진행하고 있지만 신청한 1학년을 다 합쳐도 10명정도이며 실제로 참여하는 학생들은 더 적어서 1학년끼리 별도의 교실에 모여서 진행되고있다.
                        </h3>
                        
                        <h3>
                            신청을 하지않는 이유는 무엇일까?

                            학원 때문에 시간이 나지않아 신청을 안하는 경우가 대다수였다. 학교가 아닌 스터디 카페나 독서실, 집에서 하는 경우도 있었다. 또한 학기 초에 신청했다가 취소한 경우도 있었다. 학기 초다보니 제대로된 공부 분위기도 형성되지 않은데다가, 아무래도 같은 반 친구들끼리 모여있다보니 자습시간에 떠드는 소수의 학생들때문에 방해를 받은 적이 있다고 한다.
                        </h3>
                        <h3>
                            그렇다면 반대로 신청을 한 이유는 특별히 있을까?

                            어떤 학생은 '집에 가면 안 할까봐' 라고 답했다. 그러자 집에 있는 것보다 학교에 있으니 더 도움이 되는 것 같냐고 물었는데, 그렇다고 답했다. 다른 학생은 '저녁시간이 애매해 학교에서 석식을 먹을려고' 의 이유도 있었다.
                        </h3>
                        <h3>
                            스터디 카페나 집에서 하는 것보다 학교에서 하면 좋은 장점을 물어보았다. '친구들과 함께 있으니 더 자극이 된다', '학교 수행평가 준비를 크롬북을 이용해서 자습시간에 할 수 있다', '굳이 이동하지 않아도 학교에서 할 수 있어서 편하다' 등의 답변이 있었다.
                        </h3>
                        <h3>
                            이처럼 다른 장소에서도 열심히 공부하는 학생들이 많다. 편한 곳에서 하는 것이 가장 좋기 때문에 어디서 공부하든 모두 열심히 학업역량을 키워 원하는 꿈과 목표를 이루기를 응원한다.
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
                    <CommentList />
                </div>
            </div>
        </div>
    )
}

export default Content0;