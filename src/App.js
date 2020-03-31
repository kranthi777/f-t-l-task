import React from 'react';
import './App.css';
import {Members} from './components/MembersData';
import CalendarModal from './components/CalendarModal';

function App() {
  let displayUsers = Members.members.map((item)=>{
  return (<React.Fragment><li className="list-group-item" data-toggle="modal" data-target={'#modal'+item.id} key={item.id}>{item.real_name}</li>
         <CalendarModal member={item}/></React.Fragment>)
  })
  return (
    <div className="App">
      <div className="container">
        <h2>Users</h2>
        <ul className="list-group">
          {displayUsers}
        </ul>
      </div>
    </div>
  );
}

export default App;
