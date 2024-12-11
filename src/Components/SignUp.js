import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/members")
            .then((res) => {
                setUsers(res.data)
            });
    });
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");
    function navi(event) {
        const value = event.target.className;
        switch (value) {
            case 'frg':
                navigate('/forgot');
                break;
            case 'signp':
                navigate('/signin');
        }
    }
    function addUsers(event) {
        event.preventDefault();
        setSuccess("");

        if (name === "" || password === "" || email === "") {
            setMessage("please Enter all the field");
        }
        else {
            setMessage("");
            let newUser = { name: name, password: password, email: email };
            axios.post("http://localhost:4000/members", newUser)
                .then((res) => {
                    setUsers([...users, res.data]);
                    setSuccess('User added successfully');
                })
                .catch((error) => {
                    setMessage("Error adding user");
                });
            setName("");
            setPassword("");
        }
    }
    return (
        <div className="signin">
            <form>
                <div className="joinMember">
                    <div className="helpdesk">
                        Helpdesk System
                    </div>
                    <div className="sgn1">
                        Sign Up Here
                    </div>
                    <input type="text"
                        placeholder="Enter Username"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setMessage("")
                        }}
                        className="user-name"
                    />
                    <input type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setMessage("")
                        }}
                        className="pass-word"
                    />
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
                    <button type="submit" onClick={addUsers} className="btn1" id="btn1" style={{ cursor: "pointer" }}>Sign Up </button>
                </div>
            </form>
            <div className="forg">
                <button
                    className="frg"
                    value="frg"
                    onClick={navi} >
                    Forgot Password
                </button>
                <button
                    className="signp"
                    value="signp"
                    onClick={navi}
                >
                    SignIn
                </button>
            </div>
        </div>

    )
}
export default SignUp;