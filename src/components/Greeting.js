// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';

function Greeting() {
  // TODO: Convert `greeting` to a state variable using the useState hook. Give it a initial value of 'Welcome the following students to class!'
  let [greeting, setGreeting] = useState( 'Welcome the following students to class!');

  // TODO: Convert `group` to a state variable using the useState hook. Set to an initial value to an array including three students in your class. (ex. ["John", "Grace", "Jared"])
  let [group, setGroup] = useState(['Student 1', 'Student 2', 'Student 3']);

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">State activity!</div>
      <div className="card-body">
        <p className="card-text">{greeting}</p>
        <ul>
          {group.map((e)=> (
            <li key={e}>
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Greeting;
