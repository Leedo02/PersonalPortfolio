import Header from "./Header";
import Profile from "./Profile";
import Interview from "./Interview";
import Charts from "./Charts";
import Personal from "./Personal";
import Team from "./Team";
import Contact from "./Contact";
import { useRef } from "react";

const Main = () => {

    const profileRef = useRef();
    const chartsRef = useRef();
    const personalRef = useRef();
    const teamRef = useRef();
    const contactRef = useRef();

    const scrollToSection = (id) => {
        const targetElement = document.getElementById(id);
        if(targetElement){
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="Main">
            <Header
                scrollToSection={(section) => {
                    scrollToSection(`${section}Section`)
                }}
            />
            <Profile ref={profileRef} />
            <Interview />
            <Charts ref={chartsRef} />
            <Personal ref={personalRef} />
            <Team ref={teamRef} />
            <Contact ref={contactRef} />
        </div>
    );
};

export default Main;