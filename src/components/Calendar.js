import React from 'react';
import moment from 'moment';
import {TransitionGroup} from 'react-transition-group';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMonth: moment(),
      selectedDay: moment().startOf('day'),
      selectedMonthEvents: [],
      showEvents: false,
      timings: this.props.member
    };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.showCalendar = this.showCalendar.bind(this);
    this.goToCurrentMonthView = this.goToCurrentMonthView.bind(this);

    this.initialiseEvents();
  }

  previous() {
    const currentMonthView = this.state.selectedMonth;
    this.setState({
      selectedMonth: currentMonthView.subtract(1, "month")
    });
  }

  next() {
    const currentMonthView = this.state.selectedMonth;
    this.setState({
      selectedMonth: currentMonthView.add(1, "month")
    });
  }

  select(day) {
    this.setState({
      selectedMonth: day.date,
      selectedDay: day.date.clone(),
      showEvents: true
    });
  }

  goToCurrentMonthView() {
    this.setState({
      selectedMonth: moment()
    });
  }
  
  showCalendar() {
    this.setState({
      selectedMonth: this.state.selectedMonth,
      selectedDay: this.state.selectedDay,
      showEvents: false
    });
  }

  renderMonthLabel() {
    const currentMonthView = this.state.selectedMonth;
    return (
      <span className="box month-label">
        {currentMonthView.format("MMMM YYYY")}
      </span>
    );
  }

  renderDayLabel() {
    const currentSelectedDay = this.state.selectedDay;
    return (
      <span className="box month-label">
        {currentSelectedDay.format("DD MMMM YYYY")}
      </span>
    );
  }
  
  renderWeeks() {
    /*
      Rendering weeks
    */
    const currentMonthView = this.state.selectedMonth;
    const currentSelectedDay = this.state.selectedDay;
    const monthEvents = this.state.selectedMonthEvents;

    let weeks = [];
    let done = false;
    let previousCurrentNextView = currentMonthView
      .clone()
      .startOf("month")
      .subtract(1, "d")
      .day("Monday");
    let count = 0;
    let monthIndex = previousCurrentNextView.month();

    while (!done) {
      weeks.push(
        <Week
          previousCurrentNextView={previousCurrentNextView.clone()}
          currentMonthView={currentMonthView}
          monthEvents={monthEvents}
          selected={currentSelectedDay}
          select={day => this.select(day)}
        />
      );
      previousCurrentNextView.add(1, "w");
      done = count++ > 2 && monthIndex !== previousCurrentNextView.month();
      monthIndex = previousCurrentNextView.month();
    }
    return weeks;
  }

  initialiseEvents() {

    /*
      Initialising Events
    */
    let monthEvents = this.state.selectedMonthEvents;
    let timings = this.state.timings.activity_periods;
    let activityPeriods = [];
    let title;
    let date;
    let endTime;
    let allEvents = [];
    for (let i = 0; i < timings.length; i++) {
      title = "Event"+ (i+1);
      date = moment(timings[i].start_time);
      endTime = moment(timings[i].end_time);
      activityPeriods.push({title:title, date:date, endTime:endTime,dynamic:false});
    }

    /*
      activityPeriods: constructing activityPeriods which contains title,starttime,endtime
    */
    allEvents.push(activityPeriods);
    for (var i = 0; i < activityPeriods.length; i++) {
      monthEvents.push(activityPeriods[i]);
    }

    /*
      selectedMonthEvents: It contains the details of users activity i.e., date/timings
    */
    this.setState({
      selectedMonthEvents: monthEvents
    });
  }
  render() {
    const currentMonthView = this.state.selectedMonth;
    const currentSelectedDay = this.state.selectedDay;
    const showEvents = this.state.showEvents;
    if (showEvents) {
      return (
        <section className="main-calendar">
          <header className="calendar-header">
            <div className="row-c title-header">
              {this.renderDayLabel()}
            </div>
            <div className="row-c button-container">
              <i
                className="box arrow fa fa-angle-left"
                onClick={this.showCalendar}
              />
            </div>
          </header>
          <Events
            selectedMonth={this.state.selectedMonth}
            selectedDay={this.state.selectedDay}
            selectedMonthEvents={this.state.selectedMonthEvents}
          />
        </section>
      );
    } else {
      return (
        <section className="main-calendar">
          <header className="calendar-header">
            <div className="row-c title-header">
              <i
                className="box arrow fa fa-angle-left"
                onClick={this.previous}
              />
              <div className="box header-text">
              {this.renderMonthLabel()}
              </div>
              <i className="box arrow fa fa-angle-right" onClick={this.next} />
            </div>
            <DayNames />
          </header>
          <div className="days-container">
            {this.renderWeeks()}
          </div>
        </section>
      );
    }
  }
}

class Events extends React.Component {
  render() {
    const currentMonthView = this.props.selectedMonth;
    const currentSelectedDay = this.props.selectedDay;
    const monthEvents = this.props.selectedMonthEvents;

    const monthEventsRendered = monthEvents.map((event, i) => {
      return (
        <div
          key={event.title}
          className="event-container"
        >
          <TransitionGroup
            component="div"
            className="animated-time"
            transitionName="time"
            transitionappear={true}
            transitionappeartimeout={500}
            transitionentertimeout={500}
            transitionleavetimeout={500}
          >
            <div className="event-time event-attribute">
              {event.date.format("HH:mm")} -
              {event.endTime.format("HH:mm")}
            </div>
          </TransitionGroup>
          <TransitionGroup
            component="div"
            className="animated-title"
            transitionName="title"
            transitionappear={true}
            transitionappeartimeout={500}
            transitionentertimeout={500}
            transitionleavetimeout={500}
          >
            <div className="event-title event-attribute">{event.title}</div>
          </TransitionGroup>
        </div>
      );
    });

    const dayEventsRendered = [];

    for (let i = 0; i < monthEventsRendered.length; i++) {
        if (currentSelectedDay.format("DD MMMM YYYY") == moment(monthEvents[i].date).format("DD MMMM YYYY")){
        dayEventsRendered.push(monthEventsRendered[i]);
      }
    }

    return (
      <div className="day-events">
        {dayEventsRendered}
      </div>
    );
  }
}

/*
  Days Header
*/
class DayNames extends React.Component {
  render() {
    return (
      <div className="row-c days-header">
        <span className="box day-name">Mon</span>
        <span className="box day-name">Tue</span>
        <span className="box day-name">Wed</span>
        <span className="box day-name">Thu</span>
        <span className="box day-name">Fri</span>
        <span className="box day-name">Sat</span>
        <span className="box day-name">Sun</span>
      </div>
    );
  }
}

/*
  Rendering Weeks
*/
class Week extends React.Component {
  render() {
    let days = [];
    let date = this.props.previousCurrentNextView;
    let currentMonthView = this.props.currentMonthView;
    let selected = this.props.selected;
    let select = this.props.select;
    let monthEvents = this.props.monthEvents;
    for (let i = 0; i < 7; i++) {
      var dayHasEvents = false;

      for (let j = 0; j < monthEvents.length; j++) {
        if (date.format("DD MMMM YYYY") == moment(monthEvents[j].date).format("DD MMMM YYYY")) {
          dayHasEvents = true;
        }
      }

      let day = {
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === currentMonthView.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date,
        hasEvents: dayHasEvents
      };

      days.push(<Day day={day} selected={selected} select={select} />);
      date = date.clone();
      date.add(1, "d");
    }
    return (
      <div className="row-c week">
        {days}
      </div>
    );
  }
}

/*
  Rendering Days
*/
class Day extends React.Component {
  render() {
    let day = this.props.day;
    let selected = this.props.selected;
    let select = this.props.select;

    return (
      <div
        className={
          "day" +
          (day.isToday ? " today" : "") +
          (day.isCurrentMonth ? "" : " different-month") +
          (day.date.isSame(selected) ? " selected" : "") +
          (day.hasEvents ? " has-events" : "")
        }
        onClick={() => select(day)}
      >
        <div className="day-number">{day.number}</div>
      </div>
    );
  }
}


export default Calendar;