import { useState } from "react";
import loginData from '../login.json';
import { useNavigate } from "react-router-dom";
function SignIn() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [data, setData] = useState({
        username: "",
        password: ""
    });
    function handleSubmit(event) {
        event.preventDefault();


        const user = loginData.members.find((member) => member.name === data.username && member.password === data.password);

        if (user) {
            setStatus(true);
            setLoading(true);
            setTimeout(() => {
                console.log('Navigating to home page');
                navigate('/home');
            }, 3000);
        } else {

            setStatus(false);
        }
    }
    function handleChange(event) {
        let { name, value } = event.target
        setData({ ...data, [name]: value })
    }
    function navi(event) {
        const value = event.target.value;
        switch (value) {
            case 'frg':
                navigate('/forgot');
                break;
            case 'signp':
                navigate('/signup');
        }
    }
    return (
        <div className="signin">
            <div className="sgn">
                <div className="helpdesk">
                    Helpdesk System
                </div>
                <div className="forms">
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            placeholder="Username"
                            className="user-name"
                            id="userId"
                            value={data.username}
                            onChange={handleChange}
                            name="username" />

                        <input type="password"
                            placeholder="Enter Your Password"
                            className="pass-word"
                            id="pswd"
                            value={data.password}
                            onChange={handleChange}
                            name="password" />

                        <button type="submit"
                            className="btn1"
                        >Sign In</button>
                        {status === false && data.username !== "" && <div className="text-error" style={{ color: "red", marginTop: "20px", textAlign: "center" }}>Details does not match with Database </div>}
                        {status === true && data.username !== "" && <div className="text-success" style={{ color: "green", marginTop: "20px", textAlign: "center" }}>Login Successful! please Wait Home is Loading... </div>}
                    </form>
                </div>
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
                        SignUp
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SignIn;





