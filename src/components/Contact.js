const Contact = () => {

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
          .then(() => {
            console.log('Text copied to clipboard');
            alert('클립보드에 복사되었습니다.');
          })
          .catch((err) => {
            console.error('Unable to copy text to clipboard', err);
            alert('복사에 실패했습니다.');
          });
      };

      const handleCopyClick = (text) => {
        copyToClipboard(text);
      };

    return(
        <div className="Contact" id="contactSection">
            <div className="contactHeader">
                <h2 className="titleName">📪Contact</h2>
                <p className="titleMini">- 아이콘 클릭 시 사이트로 바로 이동해요!</p>
            </div>
            <div className="contactIn">
                {/* 깃허브 버튼 */}
                <div className="conIco">
                    <p className="icoImg">
                        <a 
                            href="https://github.com/Leedo02"
                            target="_blank"
                        ><img src="/img/ico-github.svg" alt="깃허브" /></a>
                    </p>
                    <p className="conTxt">
                        Github
                    </p>
                    <button
                        className="copyTxt"
                        onClick={() => handleCopyClick('https://github.com/Leedo02')}
                    >
                        <img src="img/ico-copy.png" /><span>Leedo02</span>
                    </button>
                </div>
                {/* 티스토리 버튼 */}
                <div className="conIco">
                    <p className="icoImg">
                        <a 
                            href="https://controlcva.tistory.com/"
                            target="_blank"
                        ><img src="/img/ico-tistory.svg" alt="티스토리" /></a>
                    </p>
                    <p className="conTxt">
                        Tistory
                    </p>
                    <button
                        className="copyTxt"
                        onClick={() => handleCopyClick('https://controlcva.tistory.com/')}
                    >
                        <img src="img/ico-copy.png" /><span>https://controlcva.tistory.com/</span>
                    </button>
                </div>
                {/* 이메일 버튼 */}
                <div className="conIco">
                    <p className="icoImg">
                        <a 
                            href="mailto:leedo030202@gmail.com"
                            target="_blank"
                        ><img src="/img/ico-email.svg" alt="이메일" /></a>
                    </p>
                    <p className="conTxt">
                        e-mail
                    </p>
                    <button
                        className="copyTxt"
                        onClick={() => handleCopyClick('leedo030202@gmail.com')}
                    >
                        <img src="img/ico-copy.png" /><span>leedo030202@gmail.com</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Contact;