import Header from "./Header";
import Profile from "./Profile";
import Interview from "./Interview";
import Charts from "./Charts";
import Personal from "./Personal";
import Team from "./Team";
import Contact from "./Contact";

const Main = () => {

    return (
        <div className="Main">
            <Header />
            <Profile />
            <Interview />
            <Charts />
            <Personal />
            <Team />
            <Contact />
        </div>
    );
};

export default Main;