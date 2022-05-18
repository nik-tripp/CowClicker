import React from "react";

function Login(props) {
    return (
        <div className="Login">
            <label>Username: <input type="text" onChange={(event) => props.setUser(event.target.value)} placeholder="Enter Username Here"/></label>
        </div>
    );
}

export default Login;
