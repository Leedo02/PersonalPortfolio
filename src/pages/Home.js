import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {

    const navigate = useNavigate();
    const clickBtn = () => {
        navigate('/main');
    };
    return (
        <div className="Home">
            <Header />
            <div className="homeTitle">
                <p className="titleTxt">
                    Front-End<br />
                    <span>PORTFOLIO</span>
                </p>
                <p className="btn">
                    <button
                        onClick={clickBtn}
                    >Click here</button>
                    <svg width="1.2em" height="0.8em" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </p>
            </div>
        </div>
    );
};

export default Home;