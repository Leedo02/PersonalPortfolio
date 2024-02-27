const Charts = () => {
    return(
        <div className="Charts" id="chartsSection">
            <div className="ChartsIn">
                <div className="chartHead">
                    <h2 className="titleName">✏️기술스택</h2>
                    <p className="titleMini">- 제가 사용 가능한 스택과 툴이에요.</p>
                </div>
                <div className="chartAll">
                    <div className="chartList">
                        <h3>front-end</h3>
                        <p>
                            <span><img src="img/react.png" alt="리액트" /></span>React.js
                        </p>                        <p>
                            <span><img src="img/js.png" alt="자바스크립트" /></span>JavaScript
                        </p>
                        <p>
                            <span><img src="img/jquery.png" alt="제이쿼리" /></span>JQuery
                        </p>
                        <p>
                            <span><img src="img/ts.png" alt="ts" /></span>typescript
                        </p>
                        <p>
                            <span><img src="img/html.png" alt="html" /></span>html                     </p>
                        <p>
                            <span><img src="img/css.png" alt="css" /></span>css
                        </p>
                    </div>
                    <div className="chartList">
                        <h3>back-end</h3>
                        <p>
                            <span><img src="img/node.png" alt="Node" /></span>Node.js    
                        </p>
                    </div>
                    <div className="chartList">
                        <h3>tool</h3>
                        <p>
                            <span><img src="img/figma.png" alt="figma" /></span>figma
                        </p>
                        <p>
                            <span><img src="img/ai.png" alt="ai" /></span>Ai
                        </p>
                        <p>
                            <span><img src="img/ps.png" alt="ps" /></span>Ps
                        </p>
                        <p>
                            <span><img src="img/git.png" alt="git" /></span>git
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charts;