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
                        <h1 className='text-5xl'>열정넘치는 호산고 학생들의 진로계열특강</h1>
                        <h2>호산고 진로계열특강</h2>
                        <h4 className=' rounded-3xl p-1 border-2 shadow-[10px] w-24'>이채빈 기자</h4>
                        <h4>입력일:2022.07.06</h4>
                    </div>
                    <div className="mx-0">
                        <h3 className='font-semibold'>
                        지난 7월 5일날 호산고등학교 학생들은 4시30분부터 6시 45분까지 약 2시간가량을 자신의 진로계열에 대한 동영상시청과 강의를 들었다. 계열특강으론 소프트웨어·컴퓨터공학, 경영·경제, 교육, 기계·전자공학, 간호·보건, 생명과학·공학, 심리학·사회복지·미디어 커뮤니케이션계열등의 특강이 열렸다.
                        </h3>

                        <h3>
                        이런 진로 계열특강을 듣는 학생들은 자신의 진로에대해서 열정적으로 경청하고 보고서를 쓰고 열심히 강사님의 조언을 받아적는등 생기부를 잘 챙기기 위하여 엄청난 노력을 기울이고있다.
                        </h3>
                        <div className="flex">
                            <img src="../img/4-1.jpg"></img>
                        </div>
                        <h5 className="text-gray-400">(간호·보건계열특강)</h5>

                        <h3>
                        계열특강에서는 자신의 진로학과는 어느 대학에 많이 포진되어있는가, 원하는 학과에 가기 위해선 어느 선택과목을 정해야하는가부터 ~~학과의 생기부에는 어떤 능력이 드러나게 적히도록 하면되는가에 대하여서 강의를 하였다.</h3>
                        <h3>
                        이런 계열특강을 들은 학생들의 반응으로는 '내가 원하는 학과에 가기위해서 선택과목은 무엇을 정해야할지에 대해서 알 수 있어서 좋았다'같은 반응부터 '다음에도 이런기회가 더 있었으면 좋겠다'같은 긍정적인 반응이 나오고있다. 이를 계기로 학생들의 진로설계에 관련하여서 이런 활동들이 호산고에 더 많이 생기기를 바란다.
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