import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
function Forgot() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");
    function addUsers(event) {
        event.preventDefault();
        setSuccess("");

        if (email === "") {
            setMessage("please Enter the Email");
        }
        else {
            setMessage("");
            let newUser = { email: email };
            axios.post("http://localhost:4000/update", newUser)
                .then((res) => {
                    setSuccess('link sented successfully');
                })
                .catch((error) => {
                    setMessage("Error to sent the link");
                });
            setEmail("");
        }
    }
    return (
        <div className="signin">
            <div className="content">
                <p className="cont">Don’t worry, Enter your email below and we will
                    send you a link to change password.</p>
                <input type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setMessage("")
                    }}
                    className="e-mail"
                />
                {success && <div className="text-success" style={{ color: "green", textAlign: "center", marginTop: "10px" }}>{success}</div>}
                {message && <div className="text-danger" style={{ color: "red", textAlign: "center" }}>{message}</div>}
                <button type="submit" onClick={addUsers} className="btn1" id="btn1" style={{ marginTop: "20px" }}>Sign Up </button>
                <br />
                <Link to="/signin">
                    <button type="submit"
                        className="btn2"
                    >Sign In</button>
                </Link>
            </div>
        </div>
    )
}
export default Forgot;