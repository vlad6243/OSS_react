import React from 'react';
import './style.css';

export default class Task8 extends React.Component{
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <h1>User List</h1>
                { /* =============== TASK 1 ====================
                    Loop over the array of notifications and pass them as props into <Notification />
                */}
                {
                    notifications.map(el => {
                        return <Notification key={el.key} settings={el} />
                    })
                }
            </div>
        )
    }

}

function Notification({settings}) {
    /*=============== TASK 2 ==================
      Depending on the notificationType choose the right component.
      Either <Info />, <Warning />, <Error /> or null.
      Use a switch case for this
    */
    switch (settings.notificationType) {
        case "info":
            return <Info text={settings.text} />
        case "warning":
            return <Warning text={settings.text} />
        case "error":
            return <Error text={settings.text} />
        default: return null
    }
}

const Info = ({ text }) => <p className="info">{text}</p>;
const Warning = ({ text }) => <p className="warning">{text}</p>;
const Error = ({ text }) => <p className="error">{text}</p>;

const notifications = [
    {
        key: 1,
        text: 'Welcome user101',
        notificationType: 'info'
    },
    {
        key: 2,
        text: 'You have been banned',
        notificationType: 'error'
    },
    {
        key: 3,
        text: 'New friend request',
        notificationType: 'info'
    },
    {
        key: 4,
        text: 'You are about to exceed your usage limit',
        notificationType: 'warning'
    },
    {
        key: 5,
        text: 'Free trial will soon expire',
        notificationType: 'warning'
    },
    {
        key: 6,
        text: 'Token expired',
        notificationType: 'error'
    },
];