const Contact = () => {
    return(
        <div className="Contact">
            <div className="contactIn">
                <div className="conIco">
                    <p className="icoImg">
                        <a href="https://github.com/Leedo02"><img src="/img/ico-github.svg" alt="깃허브" /></a>
                    </p>
                    <p className="conTxt">
                        Github
                    </p>
                    <button className="copyTxt">
                        <img src="img/ico-copy.png" /><span>Leedo02</span>
                    </button>
                </div>
                <div className="conIco">
                    <p className="icoImg">
                        <a href="https://controlcva.tistory.com/"><img src="/img/ico-tistory.svg" alt="티스토리" /></a>
                    </p>
                    <p className="conTxt">
                        Tistory
                    </p>
                    <button className="copyTxt">
                        <img src="img/ico-copy.png" /><span>https://controlcva.tistory.com/</span>
                    </button>
                </div>
                <div className="conIco">
                    <p className="icoImg">
                        <a href="mailto:leedo030202@gmail.com"><img src="/img/ico-email.svg" alt="이메일" /></a>
                    </p>
                    <p className="conTxt">
                        e-mail
                    </p>
                    <button className="copyTxt">
                        <img src="img/ico-copy.png" /><span>leedo030202@gmail.com</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Contact;