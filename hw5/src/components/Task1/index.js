import React from 'react';

const styleForTask = {
    textAlign:"center",
}

export default class Task1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            login: false
        }
    }

    changeLogin(){
        this.setState({
            login:!this.state.login
        })
    }

    render(){
        return(
            <div className={styleForTask}>
                <h1>Topic: Lifecycle Methods - Mostly Used Methods Demo</h1>
                {this.state.login
                ? <p>You are logged in</p>
                : <p>You are not logged in</p>
                }
                <button onClick={() => this.changeLogin()}>
                    {!this.state.login
                        ? <h4>Login</h4>
                        : <h4>Logout</h4>
                    }
                </button>
            </div>
        )
    }
}
