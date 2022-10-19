import RoundedButton from "../../Components/Rounded Button/RoundedButton";
import "./Home.css";
import Navbar from "../../Components/Navigation/Navbar";
import { useEffect, useState } from "react";

function Home() {
    
  // state creation
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    console.log("useeffect called");
  }, [name, address]);

  return (
    <div>
      <Navbar text="About" />
      <h1 style={{ fontFamily: "revert", color: "green", fontStyle: "italic" }}>
        {" "}
        This is Home Page
      </h1>
      <input
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <input
        placeholder="Enter Your Address"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <input
        placeholder="Enter Your Salary"
        value={salary}
        onChange={(e) => {
          setSalary(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <input
        placeholder="Enter Your Age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <input type={"file"} /> <br /> <br />
      <button
        type="button"
        className="btn btn-success"
        onClick={() => {
          console.log(name, address, salary, age);
        }}
      >
        {" "}
        Submit{" "}
      </button>
    </div>
  );
}

export default Home;
