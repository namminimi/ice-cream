import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { getCookie } from '../util/cookie';
import LeaveMember from './LeaveMember';
import "./MyPage.scss"
import MyPageSelectContainer from '../containers/MyPageSelectContainer';

const MyPage = () => {
    const userId = getCookie('userId')
    const [isMemberState, setMemberState] = useState(false)
    const onLeave = () => {
        if(isMemberState == false) {
            setMemberState(true)
        }
    }
    return (
        <div id="myPage" className='inner'>
            <div className='myPageForm'>
                <h2>마이페이지</h2>
                <MyPageSelectContainer userId={userId}/>
                <h3>내 정보수정 및 회원 탈퇴</h3>
                {window.innerWidth !== 476 ?
                <ul className='catagoryList'>
                    <li>
                        <Link to='/editPass'>
                            <h4>비밀번호 변경하기</h4>
                            <p>개인정보 보안을 위해서 3개월에 한번씩은 변경해주세요</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/myPageEdit/${userId}`}>
                            <h4>개인정보 수정</h4>
                            <p>개인정보 수정을 원하시면 클릭해주세요</p>
                        </Link>
                    </li>
                    <li onClick={onLeave} className="leave">
                        <h4>회원 탈퇴</h4>
                        <p>회원 탈퇴를 원하시면 클릭해주세요</p>
                    </li>
                </ul>:
                <ul className='catagoryList'>
                    <li>
                        <Link to='/editPass'>
                            <h4>비밀번호 변경하기</h4>
                            <p>개인정보 보안을 위해서 3개월에 한번씩은 변경해주세요</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/myPageEdit/${userId}`}>
                            <h4>개인정보 수정</h4>
                            <p>개인정보 수정을 원하시면 클릭해주세요</p>
                        </Link>
                    </li>
                    <li onClick={onLeave} className="leave">
                        <h4>회원 탈퇴</h4>
                        <p>회원 탈퇴를 원하시면 클릭해주세요</p>
                    </li>
                </ul>

                }
                <div className='myPageNotice'>원하시는 카테고리를 선택해주세요</div>
                <LeaveMember isMemberState={isMemberState} userId={userId} setMemberState={setMemberState}/>
            </div>
        </div>
    );
};

export default MyPage;