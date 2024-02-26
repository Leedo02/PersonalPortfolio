const Team = () => {
    return(
        <div className="Team">
            <div className="TeamIn">
                <h2 className="titleName">🖱️팀 프로젝트</h2>
                <p className="titleMini">- 팀원과 협업해서 만들었어요.</p>
                <div className="teamImg">
                    <p><img src="img/ezfitmockup.png" alt="메인" /></p>
                    <p><img src="img/team-home01.png" alt="홈1" /></p>
                    <p><img src="img/team-home02.png" alt="홈2" /></p>
                    <p><img src="img/team-home03.png" alt="통계1" /></p>
                    <p><img src="img/team-home04.png" alt="통계2" /></p>
                    <p><img src="img/team-exercise.png" alt="운동1" /></p>
                    <p><img src="img/team-exercise02.png" alt="운동2" /></p>
                </div>
                <div className="teamTxt">
                    <h3>프로젝트 제목</h3>
                    <p>프로젝트 설명</p>
                    <div className="projectBtns">
                        <p className="projectBtn">
                            <span>배포링크 : </span><button>사이트 주소</button>
                        </p>
                        <p className="projectBtn">
                            <span>리포지토리 : </span><button>사이트 주소</button>                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Team;