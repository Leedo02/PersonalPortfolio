import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

const Team = () => {

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2100,
        centerMode: true,
    }

    return(
        <div className="Team" id="teamSection">
            <div className="TeamIn">
                <h2 className="titleName">🖱️팀 프로젝트</h2>
                <p className="titleMini">- 팀원과 협업해서 만들었어요.</p>
                <Slider {...sliderSettings} className="teamImg">
                    <p><img src="img/ezfitmockup.png" alt="메인" /></p>
                    <p><img src="img/team-home01.png" alt="홈1" /></p>
                    <p><img src="img/team-home02.png" alt="홈2" /></p>
                    <p><img src="img/team-home03.png" alt="통계1" /></p>
                    <p><img src="img/team-home04.png" alt="통계2" /></p>
                    <p><img src="img/team-exercise.png" alt="운동1" /></p>
                    <p><img src="img/team-exercise02.png" alt="운동2" /></p>
                </Slider>
                <div className="teamTxt">
                    <div className="teamEx">
                        <h3>EZfit</h3>
                        <p className="useStack">
                            담당 페이지 : 식단관리, 통계, 피드창 <br />
                            사용 기술 스택 : react.js, rechart라이브러리, chart.js라이브러리
                        </p>
                        <p>
                            4인 팀프로젝트입니다. 운동 입문자를 위한 홈트레이닝 어플입니다.
                            식단, 운동 기록 등 기본적인 기능과 피드 페이지를 만들어 유저간
                            소통과 정보공유를 할 수 있도록 만들었습니다.
                            실제 어플에서는 어플 자체 제작 운동 영상을 넣어야겠지만 프로젝트성
                            어플인만큼 유튜브를 활용하여 샘플 영상들을 삽입했습니다.
                            부가적으로 정보성 배너를 배치하여 운동 입문자인만큼 운동이나
                            식단에 대한 정보글을 공유하였습니다.
                            아쉬운 점은 부족한 실력 탓에 원하던 기능을 기간 내에 100% 구현을 못한
                            것입니다. 마지막에는 컴포넌트를 합치기 급했던 기억이 있습니다.
                        </p>
                    </div>
                    <div className="projectBtns">
                        <p className="projectBtn">
                            <p className="projectBtn">
                                <span>배포링크</span><br />
                                <a
                                    href="https://ezfit-b275f.web.app/open"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >https://ezfit-b275f.web.app/open</a>
                            </p>
                            <p className="projectBtn">
                                <span>리포지토리</span><br />
                                <a
                                    href="https://github.com/Leedo02/teamProject"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >https://github.com/Leedo02/teamProject</a>
                            </p>                         </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Team;