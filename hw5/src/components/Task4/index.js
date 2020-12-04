import React from 'react';
import './style.css';

export default class Task4 extends React.Component{

    render() {
        return (
            <div>
                <h2>Todo</h2>
                {todos.map(el => {
                    return <Todo todo={el} key={el.key}/>
                })}
            </div>
        )
    }
}

const Todo = ({todo}) => {
    /* =============== TASK 2 ====================
      Check the status of the todo,
      if it is 'done' use className="done",
      if it is 'start' then use className="start" and
      if it is 'inProgress' then use className="inProgess"
    */
    switch (todo.status) {
        case"done":
            return <h2 className="done">{todo.text}</h2>
        case"start":
            return <h2 className="start">{todo.text}</h2>
        case"inProgress":
            return <h2 className="inProgress">{todo.text}</h2>
    }
}

const todos = [
    {
        key: 1,
        status: 'start',
        text: 'Learn english'
    },
    {
        key: 2,
        status: 'done',
        text: 'Watch a new movie'
    },
    {
        key: 3,
        status: 'inProgress',
        text: 'Make a post on Instagram'
    },
    {
        key: 4,
        status: 'done',
        text: 'Learn React'
    },
    {
        key: 5,
        status: 'inProgress',
        text: 'Do home task'
    },
    {
        key: 6,
        status: 'start',
        text: 'Go shopping'
    },
];