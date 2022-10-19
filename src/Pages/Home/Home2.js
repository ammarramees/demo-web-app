import "./Home.css";
import Navbar from "../../Components/Navigation/Navbar";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

function Home2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const addStudent = async () => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "Students"), {
      Name: name,
      EmailAddress: email,
      ContactNumber: phone,
      Age: age,
      Address: address,
    })
      .then(() => {
        console.log("Data Added Successfully");
        alert("Data Added Successfully");
        clearTexts();
      })
      .catch(() => {
        alert("Data Adding Failed");
      });
  };

  const deleteStudents = async () => {
    await deleteDoc(doc(db, "Students", "")) // doc id should go in the blank space 
      .then(() => {
        alert("student deleted");
      })  
      .catch(() => {
        alert("delete failed");
      });
  };

  const getStudents = async () => {
    const querySnapshot = await getDocs(collection(db, "Students"));
    setStudents(
      querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }))
    );
  };

  function clearTexts() {
    setName("");
    setEmail("");
    setPhone("");
    setAge("");
    setAddress("");
  }

  return (
    <div>
      {/* <Navbar text="About" /> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Contact Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Contact Number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Age"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <button
              className="btn btn-danger"
              onClick={deleteStudents}
              style={{ marginRight: 10 }}
            >
              Delete Student
            </button>
            <button className="btn btn-primary" onClick={addStudent}>
              Save Details
            </button>
          </div>
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">Contact Number</th>
                  <th scope="col">Age</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => {
                  return (
                    <tr>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.phone}</td>
                      <td>{student.age}</td>
                      <td>{student.address}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
