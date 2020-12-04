import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/ErrorBoundary';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';
import Task7 from './components/Task7';

function App() {
  return (
    <div className="App">
      {/* Render each home task, all I will do is to uncomment them to check them */}
      <Task1 />
      {/*<Task2 />*/}
      {/* <Task3 min={1} max={5}/>*/}
      {/*<Task4 />*/}
      {/*<ErrorBoundary>*/}
      {/*  <Task5 />*/}
      {/*</ErrorBoundary>*/}
      {/*<Task6 />*/}
      {/*<Task7 />*/}
    </div>
  );
}

export default App;
