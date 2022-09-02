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
                        <h1 className='text-5xl'>호산고의 단점들은 무엇이 있을까?</h1>
                        <h2>호산고 재학생이 말하는 호산고등학교</h2>
                        <h4 className=' rounded-3xl p-1 border-2 shadow-[10px] w-24'>한다연 기자</h4>
                        <h4>입력일:2022.07.19</h4>
                    </div>
                    <div className="mx-0">
                        <h3 className='font-semibold'>
                            호산고의 불편사항은?
                        </h3>

                        <h3>
                            길었던 중학교 생활을 마치고 올해 3월 호산고등학교의 학생이 된 1학년들은 어느덧 1학기를 끝내고 여름방학을 맞이할 준비를 하고 있다.

                            학교를 다니면서 좋았던 점도 있을것이고 불편했던 점도 있을텐데, 호산고 학생들의 불편사항에불 어떤 것이 있을지 조사해 보았다.
                        </h3>
                        <h3>
                            첫번째 생리대 자판기의 위치

                            호산고의 생리대 자판기의 위치는 후관 본 계단 바로 앞이다. 많은 학생들 선생님들이 드나드는 곳에서 생리대 자판기를 사용하기 민망하다. 여자화장실 안에 설치 되어있으면 더 편리할 것 같다.등의 의견이 빗발치고 있지만 여전히 개선되지 않고 있는 부분이다.
                        </h3>
                        <h3>
                            두번째로 매점이다.

                            호산고등학교에는 매점대신 자판기가 설치되어 있다. 자판기는 2년간 코로나의 여파로 운영되지 않고 있다가 얼마전 운영 허가 승인이 되었다. 하지만 아직까지 여러가지 이유로 아직까지 운영되지 않고 있는 상황이다. 아침일찍 학교를 와 아침을 먹지못하고 오거나 여러가지 사정으로 인해 점심을 먹지 못하게 되는 상황이 자주 발생하는 학생들의 입장에서는 집에서 간식을 가지고 오거나 학교가 끝난 후 편의점까지 가야하는 번거로움 이 발생한다.
                        </h3>
                        <h3>
                            학교가 절대적인 편리를 제공해줄 수 없는 것은 모두가 알고 있는 사실이다. 하지만 집보다 학교에서 보내는 시간이 더 많은 학생들의 입장에서는 불편한 것이 많은것도 사실이다. 그렇기 때문에 어서빨리 학생들의 불편사항이 개선되어 학생들을 위하는 행복한 호산고가 되기를 바란다
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