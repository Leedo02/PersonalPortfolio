const Personal = () => {
    return(
        <div className="Personal" id="personalSection">
            <h2 className="titleName">💻개인 프로젝트</h2>
            <p className="titleMini">- 혼자 만들었어요.</p>
            <div className="pContent">
                <div className="perProject">
                    <p className="perImg">
                        <img src="img/person-movie.png" alt="영화" />
                    </p>
                    <div className="projectTxt">
                        <h3>연도별 영화List</h3>
                        <p className="useStack">
                            구현 기능 : 필터링, 영화 상세보기 모달창 <br />
                            사용 기술 스택 : react.js, css
                        </p>
                        <p className="projectEx">
                            API 기능을 사용하지 않고 더미데이터를 활용해 만든 페이지입니다.
                            필터링 기능을 사용해 연도별 영화를 나누어 볼 수 있도록 했습니다.
                            이후 수업에서 API를 활용한 페이지도 제작하면서 개발자에게 API가 굉장히
                            중요한 기능이라는 것을 깨달았습니다.
                        </p>
                        <div className="projectBtns">
                            <p className="projectBtn">
                                <span>배포링크</span><br />
                                <a
                                    href="https://movieui-c4e72.web.app"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >https://movieui-c4e72.web.app</a>
                            </p>
                            <p className="projectBtn">
                                <span>리포지토리</span>
                                <a
                                    href="https://github.com/Leedo02/movieUI"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >https://github.com/Leedo02/movieUI</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="perProject">
                    <p className="perImg">
                        <img src="img/person-diary.png" alt="다이어리" />
                    </p>
                    <div className="projectTxt">
                        <h3>Diary App</h3>
                        <p className="useStack">
                            구현 기능 :  일기 작성 · 수정 · 삭제 기능, 먼슬리<br />
                            사용 기술 스택 : react.js, typeScript, css
                        </p>
                        <p className="projectEx">
                            국비 교육 기간 중 수업 때 만든 다이어리 앱을 개인적으로 수정, 보완하였습니다.
                            UI 수정과 메인화면에 먼슬리 기능을 추가하였습니다.
                            추가적으로 프로젝트를 진행할 때 리팩토링 능력이 다소 떨어진다는 것을 느꼈습니다.
                            그래도 완성이라도 하자는 마음으로 프로젝트를 진행하였습니다.
                        </p>
                        <div className="projectBtns">
                            <p className="projectBtn">
                                <span>배포링크</span><br />
                                <a
                                    href="https://github.com/Leedo02/movieUI"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >미완성</a>
                            </p>
                            <p className="projectBtn">
                                <span>리포지토리</span><br />
                                <a
                                    href="https://github.com/Leedo02/MacUI"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >미완성</a>
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
                            구현 기능 : UI재구현 <br />
                            사용 기술 스택 : html, css
                        </p>
                        <p className="projectEx">
                            html과 css만 사용해 만든 메인페이지입니다. html, css에 익숙해지기 위해 과정 초반에
                            제작했던 페이지입니다. 현재 사이트에는 없거나 있지만 사용하기 불편한 기능들을 신경 쓰면서 제작했습니다.
                            그리고 제작을 하면서 디자이너와 웹퍼블리셔의 필요성을 매우 느꼈습니다.
                            
                        </p>
                        <div className="projectBtns">
                            <p className="projectBtn">
                                <span>배포링크</span><br />
                                <a
                                    href="https://ulsantrip.netlify.app"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >https://ulsantrip.netlify.app</a>
                            </p>
                            <p className="projectBtn">
                                <span>리포지토리</span>
                                <a
                                    href="https://github.com/Leedo02/ulsanTrip.git"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >https://github.com/Leedo02/ulsanTrip.git</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Personal;