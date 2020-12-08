import React from 'react';

const friends = [
  { id: 893, name: 'Mikenzi' },
  { id: 871, name: 'Cash' },
  { id: 982, name: 'Steven' },
  { id: 161, name: 'Kimmy' },
  { id: 117, name: 'Doug' },
];

const List = ({friends}) => {
  // Render a list using the "friends" being passed in.
  // prettier-ignore
  return (
    <ul>
      {friends.map( el => <li key={el.id}>{el.name}</li>)}
    </ul>
  );
};

const Task = () => {
  return (
    <div>
      <List friends={friends} />
    </div>
  );
};

export default Task;
