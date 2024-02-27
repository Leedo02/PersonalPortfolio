const Profile = () => {
    return(
        <div className="Profile" id="aboutmeSection">
            <h2 className="headTitle"></h2>
            <div className="myIcon">
                <p>
                    <img src="/img/MyMimot.png" alt="프로필 사진" />
                </p>
            </div>
            <div className="profileTxt">
                <p className="myName">이도경</p>
                <p className="highSchool">부산진여자상업고등학교 금융경영 졸업</p>
                <div className="profileTag">
                    <p>#도전적인</p>
                    <p>#INTP</p>
                    <p>#탐구형</p>
                    <p>#왜?</p>
                    <p>#성취감</p>
                    <p>#성장형</p>
                </div>
                <div className="myPR">
                    안녕하세요. <span>탐구</span>하는 과정에서 <span>성취감</span>을 얻는
                    프론트엔드 개발자입니다.<br />
                    저에게 항상 <span>왜?</span>라는 질문을 던지며, 내 것으로 만들 때까지                        탐구하는 것이 취미입니다.
                </div>
                    {/* 
                    연락처
                    <div className="contact">
                        <p>
                            <span>e-mail : </span>
                            <a href="mailto:dlehrud030202@gmail.com">dlehrud030202@gmail.com</a>
                        </p>
                        <p>
                            <span>Tistory : </span>
                            <a href="https://controlcva.tistory.com/">https://controlcva.tistory.com</a>
                        </p>
                    </div> */}
            </div>
        </div>
    );
};

export default Profile;