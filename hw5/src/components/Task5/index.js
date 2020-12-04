import React from 'react';

export default class Task5 extends React.Component{
    render() {
        return (
            <div>
                {this.props.display && <p>You are in</p>}
            </div>
        )
    }
}