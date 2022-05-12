import React from "react";

class Login extends React.Component {
    handleChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="Login">
                <label>Username: <input type="text" onChange={(event) => this.props.setUser(event.target.value)} placeholder="Enter Username Here"/></label>
            </div>
        );
    }
}

export { Login };
