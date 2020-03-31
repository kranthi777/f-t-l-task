import React from 'react';
import Calendar from './Calendar';

const CalendarModal = (props) => {
  let member = props.member.activity_periods;
  let times = member.map((item)=> {
  return (<div className="alert alert-success">{item.start_time} - {item.end_time}</div>)
  })
  return (
    <div className="modal" id={'modal'+props.member.id}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">
            {times}
            <div className="calendar-rectangle">
              <div id="calendar-content" className="calendar-content"><Calendar member={props.member}/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarModal;