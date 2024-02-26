const Personal = () => {
    return(
        <div className="Personal">
            <h2 className="titleName">💻개인 프로젝트</h2>
            <p className="titleMini">- 혼자 만들었어요.</p>
            <div className="pContent">
                <div className="perProject">
                    <p className="perImg">
                        <img src="img/person-kyobo.png" alt="교보문고" />
                    </p>
                    <div className="projectTxt">
                        <h3>교보문고</h3>
                        <p className="useStack">
                            사용 기술 스택
                        </p>
                        <p className="projectEx">
                            프로젝트 설명
                        </p>
                        <div className="projectBtns">
                            <p className="projectBtn">
                                <span>배포링크 : </span><button>사이트 주소</button>
                            </p>
                            <p className="projectBtn">
                                <span>리포지토리 : </span><button>사이트 주소</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="perProject">
                    <p className="perImg">
                        <img src="img/person-mac.png" alt="맥" />
                    </p>
                    <div className="projectTxt">
                        <h3>MAC Cosmetics</h3>
                        <p className="useStack">
                            사용 기술 스택
                        </p>
                        <p className="projectEx">
                            프로젝트 설명
                        </p>
                        <div className="projectBtns">
                            <p className="projectBtn">
                                <span>배포링크 : </span><button>사이트 주소</button>
                            </p>
                            <p className="projectBtn">
                                <span>리포지토리 : </span><button>사이트 주소</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="perProject">
                    <p className="perImg">
                        <img src="img/person-ulsan.png" alt="관광" />
                    </p>
                    <div className="projectTxt">
                        <h3>울산 관광 홍보 페이지</h3>
                        <p className="useStack">
                            사용 기술 스택
                        </p>
                        <p className="projectEx">
                            프로젝트 설명
                        </p>
                        <div className="projectBtns">
                            <p className="projectBtn">
                                <span>배포링크 : </span><button>사이트 주소</button>
                            </p>
                            <p className="projectBtn">
                                <span>리포지토리 : </span><button>사이트 주소</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Personal;