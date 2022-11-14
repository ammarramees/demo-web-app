import RoundedButton from "../../Components/Rounded Button/RoundedButton";
import Navbar from "../../Components/Navigation/Navbar";
import { Link } from "react-router-dom";

function About () {
    return (
        <div>
            {/* <Navbar text="Home"/> */}
            <h1> This is About Page</h1>
            <Link to={"/"}>
            <RoundedButton text="click to go Home"/>
            </Link>
        </div>
    );
}

export default About;