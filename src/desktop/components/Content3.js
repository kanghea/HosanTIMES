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
                        <h1 className='text-5xl'>"3년만에 돌아온 체육대회"</h1>
                        <h2>5월 27일 개최된 호산고 체육대회</h2>
                        <h4 className=' rounded-3xl p-1 border-2 shadow-[10px] w-24'>김지안 기자</h4>
                        <h4>입력일:2022.07.19</h4>
                    </div>
                    <div className="mx-0">
                        <h3 className='font-semibold'>
                            지난 5월 27일 오전 대구 호산고등학교에서 개회식을 시작으로 화려한 막을 올렸다.

                            매년 열렸던 체육대회는 신종 코로나 바이러스 감염증 (코로나 19)으로 인해 3년 가까이 중단되었다 올해 2022년, 3년 만에 개최되었다. 하지만 이번 체육대회에는 3학년 학생들을 제외한 1학년 학생들과 2학년 학생들만 참가하였다는 점이 아쉬움을 자아냈다.

                            호산고등학교 학생들은 경기도 하고 장기자랑도 하였다. 구체적인 종목으로는 이어달리기, 미션이어달리기, 단체 줄넘기, 통굴리기 등이있었다. 오랜만에 개최되는 체육대회인 만큼 학생들은 행사 전 몇 주 간 열심히 경기 연습을 하였다. 또한 장기자랑으로는 밴드부 학생들과 희망 학생들이 노래를 부르거나 춤을 추어 체육대회의 신나는 분위기를 만들어냈다. 모든 경기와 장기자랑이 끝난 후에는 여흥경기로박터트리기를 하며 즐거운 시간을 보낸 후, 폐회식을 통해 막을 내렸다.

                            호산고등학교 학생들은 "몇 년 만에 체육대회를 하여서 좋았어요", "친구들과 함께 응원하며 더욱 돈독해지는 계기가 되었습니다" 또는 짧아서 아쉬웠다 등의 의견을 내보였다.
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