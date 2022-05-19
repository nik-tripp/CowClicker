import React from "react";

function Login(props: { setUsername: (username: string) => void; }) {
    return (
        <div className="Login">
            <label>Username: <input type="text" onChange={(event) => props.setUsername(event.target.value)} placeholder="Enter Username Here"/></label>
        </div>
    );
}

export default Login;
