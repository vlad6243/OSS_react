import React from 'react';

export default class Task7 extends React.Component{
    render() {
        return (
            <div>
                <h1>User List</h1>
                { /* =============== TASK 1 ====================
           Loop over array of users and pass them as props into <User />
        */}
            {users.map(el => {
                return <User key={el.key} profile={el}/>
            })}
            </div>
        )
    }
}

const User = ({profile}) => {
    /* =============== TASK 2 ====================
      Display the name of the user in a
      <p> tag. However for each user check the value of
      isAdmin, if true then add this emoji '👑' to the name.
    */
    return(
        <div>
            <p>{profile.name}{profile.isAdmin && <React.Fragment>👑</React.Fragment>}</p>
        </div>
    )

}

const users = [
    {
        key: 1,
        name: 'Joe',
        isAdmin: true
    },
    {
        key: 2,
        name: 'Kolia',
        isAdmin: false
    },
    {
        key: 3,
        name: 'Vlad',
        isAdmin: true
    },
    {
        key: 4,
        name: 'Sergey',
        isAdmin: true
    },
    {
        key: 5,
        name: 'Kolawole',
        isAdmin: false
    },
    {
        key: 6,
        name: 'Bill Gates',
        isAdmin: false
    },
];