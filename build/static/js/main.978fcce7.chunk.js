(this["webpackJsonpf-t-l-assignment"]=this["webpackJsonpf-t-l-assignment"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),i=a.n(r),m=(a(14),a(15),{ok:!0,members:[{id:"W012A3CDE",real_name:"Egon Spengler",tz:"America/Los_Angeles",activity_periods:[{start_time:"02/01/2020 11:21:37 AM",end_time:"02/01/2020 10:21:37 PM"},{start_time:"03/02/2020 11:11:37 AM",end_time:"03/02/2020 11:21:37 PM"},{start_time:"03/05/2020 11:21:37 AM",end_time:"03/05/2020 11:21:37 PM"}]},{id:"W0748A3CDM",real_name:"uckEREre",tz:"America/Los_Angeles",activity_periods:[{start_time:"03/01/2020 11:21:37 AM",end_time:"03/01/2020 10:21:37 PM"},{start_time:"03/02/2020 11:11:37 AM",end_time:"03/02/2020 11:21:37 PM"},{start_time:"03/05/2020 11:21:37 AM",end_time:"03/05/2020 11:21:37 PM"}]},{id:"W3762A3CDM",real_name:"Hamosehesck",tz:"America/Los_Angeles",activity_periods:[{start_time:"03/04/2020 11:21:37 AM",end_time:"03/04/2020 10:21:37 PM"},{start_time:"03/05/2020 11:11:37 AM",end_time:"03/05/2020 11:21:37 PM"},{start_time:"03/06/2020 11:21:37 AM",end_time:"03/06/2020 11:21:37 PM"}]},{id:"W0897A3CDM",real_name:"Videtur",tz:"America/Los_Angeles",activity_periods:[{start_time:"03/01/2020 10:21:37 AM",end_time:"03/01/2020 10:21:37 PM"},{start_time:"03/02/2020 11:11:37 AM",end_time:"03/02/2020 11:21:37 PM"},{start_time:"03/05/2020 11:21:37 AM",end_time:"03/05/2020 11:21:37 PM"}]},{id:"W772A3CDM",real_name:"Hooplatkat4",tz:"America/Los_Angeles",activity_periods:[{start_time:"03/01/2020 11:21:37 AM",end_time:"03/01/2020 10:21:37 PM"},{start_time:"03/02/2020 11:11:37 AM",end_time:"03/02/2020 11:21:37 PM"},{start_time:"03/05/2020 11:21:37 AM",end_time:"03/05/2020 11:21:37 PM"}]},{id:"W0872A3CDM",real_name:"Usurpkwet",tz:"America/Los_Angeles",activity_periods:[{start_time:"03/01/2020 11:21:37 AM",end_time:"03/01/2020 10:21:37 PM"},{start_time:"03/02/2020 11:11:37 AM",end_time:"03/02/2020 11:21:37 PM"},{start_time:"03/05/2020 11:21:37 AM",end_time:"03/05/2020 11:21:37 PM"}]},{id:"H012A3CDM",real_name:"Hijinks",tz:"America/Los_Angeles",activity_periods:[{start_time:"03/01/2020 11:21:37 AM",end_time:"03/01/2020 10:21:37 PM"},{start_time:"03/02/2020 11:11:37 AM",end_time:"03/02/2020 11:21:37 PM"},{start_time:"03/05/2020 11:21:37 AM",end_time:"03/05/2020 11:21:37 PM"}]},{id:"L012A3CDM",real_name:"Bupkiszraxx",tz:"America/Los_Angeles",activity_periods:[{start_time:"03/01/2020 11:21:37 AM",end_time:"03/01/2020 10:21:37 PM"},{start_time:"03/02/2020 11:11:37 AM",end_time:"03/02/2020 11:21:37 PM"},{start_time:"03/05/2020 11:21:37 AM",end_time:"03/05/2020 11:21:37 PM"}]},{id:"P012A3CDM",real_name:"Sporkboo24e",tz:"America/Los_Angeles",activity_periods:[{start_time:"03/01/2020 11:21:37 AM",end_time:"03/01/2020 10:21:37 PM"},{start_time:"03/02/2020 11:11:37 AM",end_time:"03/02/2020 11:21:37 PM"},{start_time:"03/05/2020 11:21:37 AM",end_time:"03/05/2020 11:21:37 PM"}]},{id:"W07QCRPA4",real_name:"Glinda Southgood",tz:"Asia/Kolkata",activity_periods:[{start_time:"02/01/2020 11:21:37 AM",end_time:"02/01/2020 10:21:37 PM"},{start_time:"03/02/2020 11:11:37 AM",end_time:"03/02/2020 11:21:37 PM"},{start_time:"03/05/2020 11:21:37 AM",end_time:"03/05/2020 11:21:37 PM"}]}]}),c=a(3),l=a(4),o=a(2),d=a(5),h=a(6),u=a(1),M=a.n(u),v=a(22),p=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={selectedMonth:M()(),selectedDay:M()().startOf("day"),selectedMonthEvents:[],showEvents:!1,timings:n.props.member},n.previous=n.previous.bind(Object(o.a)(n)),n.next=n.next.bind(Object(o.a)(n)),n.showCalendar=n.showCalendar.bind(Object(o.a)(n)),n.goToCurrentMonthView=n.goToCurrentMonthView.bind(Object(o.a)(n)),n.initialiseEvents(),n}return Object(l.a)(a,[{key:"previous",value:function(){var e=this.state.selectedMonth;this.setState({selectedMonth:e.subtract(1,"month")})}},{key:"next",value:function(){var e=this.state.selectedMonth;this.setState({selectedMonth:e.add(1,"month")})}},{key:"select",value:function(e){this.setState({selectedMonth:e.date,selectedDay:e.date.clone(),showEvents:!0})}},{key:"goToCurrentMonthView",value:function(){this.setState({selectedMonth:M()()})}},{key:"showCalendar",value:function(){this.setState({selectedMonth:this.state.selectedMonth,selectedDay:this.state.selectedDay,showEvents:!1})}},{key:"renderMonthLabel",value:function(){var e=this.state.selectedMonth;return s.a.createElement("span",{className:"box month-label"},e.format("MMMM YYYY"))}},{key:"renderDayLabel",value:function(){var e=this.state.selectedDay;return s.a.createElement("span",{className:"box month-label"},e.format("DD MMMM YYYY"))}},{key:"renderWeeks",value:function(){for(var e=this,t=this.state.selectedMonth,a=this.state.selectedDay,n=this.state.selectedMonthEvents,r=[],i=!1,m=t.clone().startOf("month").subtract(1,"d").day("Monday"),c=0,l=m.month();!i;)r.push(s.a.createElement(b,{previousCurrentNextView:m.clone(),currentMonthView:t,monthEvents:n,selected:a,select:function(t){return e.select(t)}})),m.add(1,"w"),i=c++>2&&l!==m.month(),l=m.month();return r}},{key:"initialiseEvents",value:function(){for(var e,t,a,n=this.state.selectedMonthEvents,s=this.state.timings.activity_periods,r=[],i=0;i<s.length;i++)e="Event"+(i+1),t=M()(s[i].start_time),a=M()(s[i].end_time),r.push({title:e,date:t,endTime:a,dynamic:!1});[].push(r);for(var m=0;m<r.length;m++)n.push(r[m]);this.setState({selectedMonthEvents:n})}},{key:"render",value:function(){this.state.selectedMonth,this.state.selectedDay;return this.state.showEvents?s.a.createElement("section",{className:"main-calendar"},s.a.createElement("header",{className:"calendar-header"},s.a.createElement("div",{className:"row-c title-header"},this.renderDayLabel()),s.a.createElement("div",{className:"row-c button-container"},s.a.createElement("i",{className:"box arrow fa fa-angle-left",onClick:this.showCalendar}))),s.a.createElement(_,{selectedMonth:this.state.selectedMonth,selectedDay:this.state.selectedDay,selectedMonthEvents:this.state.selectedMonthEvents})):s.a.createElement("section",{className:"main-calendar"},s.a.createElement("header",{className:"calendar-header"},s.a.createElement("div",{className:"row-c title-header"},s.a.createElement("i",{className:"box arrow fa fa-angle-left",onClick:this.previous}),s.a.createElement("div",{className:"box header-text"},this.renderMonthLabel()),s.a.createElement("i",{className:"box arrow fa fa-angle-right",onClick:this.next})),s.a.createElement(E,null)),s.a.createElement("div",{className:"days-container"},this.renderWeeks()))}}]),a}(s.a.Component),_=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){this.props.selectedMonth;for(var e=this.props.selectedDay,t=this.props.selectedMonthEvents,a=t.map((function(e,t){return s.a.createElement("div",{key:e.title,className:"event-container"},s.a.createElement(v.a,{component:"div",className:"animated-time",transitionName:"time",transitionappear:!0,transitionappeartimeout:500,transitionentertimeout:500,transitionleavetimeout:500},s.a.createElement("div",{className:"event-time event-attribute"},e.date.format("HH:mm")," -",e.endTime.format("HH:mm"))),s.a.createElement(v.a,{component:"div",className:"animated-title",transitionName:"title",transitionappear:!0,transitionappeartimeout:500,transitionentertimeout:500,transitionleavetimeout:500},s.a.createElement("div",{className:"event-title event-attribute"},e.title)))})),n=[],r=0;r<a.length;r++)e.format("DD MMMM YYYY")==M()(t[r].date).format("DD MMMM YYYY")&&n.push(a[r]);return s.a.createElement("div",{className:"day-events"},n)}}]),a}(s.a.Component),E=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"row-c days-header"},s.a.createElement("span",{className:"box day-name"},"Mon"),s.a.createElement("span",{className:"box day-name"},"Tue"),s.a.createElement("span",{className:"box day-name"},"Wed"),s.a.createElement("span",{className:"box day-name"},"Thu"),s.a.createElement("span",{className:"box day-name"},"Fri"),s.a.createElement("span",{className:"box day-name"},"Sat"),s.a.createElement("span",{className:"box day-name"},"Sun"))}}]),a}(s.a.Component),b=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){for(var e=[],t=this.props.previousCurrentNextView,a=this.props.currentMonthView,n=this.props.selected,r=this.props.select,i=this.props.monthEvents,m=0;m<7;m++){for(var c=!1,l=0;l<i.length;l++)t.format("DD MMMM YYYY")==M()(i[l].date).format("DD MMMM YYYY")&&(c=!0);var o={name:t.format("dd").substring(0,1),number:t.date(),isCurrentMonth:t.month()===a.month(),isToday:t.isSame(new Date,"day"),date:t,hasEvents:c};e.push(s.a.createElement(y,{day:o,selected:n,select:r})),(t=t.clone()).add(1,"d")}return s.a.createElement("div",{className:"row-c week"},e)}}]),a}(s.a.Component),y=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.day,t=this.props.selected,a=this.props.select;return s.a.createElement("div",{className:"day"+(e.isToday?" today":"")+(e.isCurrentMonth?"":" different-month")+(e.date.isSame(t)?" selected":"")+(e.hasEvents?" has-events":""),onClick:function(){return a(e)}},s.a.createElement("div",{className:"day-number"},e.number))}}]),a}(s.a.Component),f=p,A=function(e){var t=e.member.activity_periods.map((function(e){return s.a.createElement("div",{className:"alert alert-success"},e.start_time," - ",e.end_time)}));return s.a.createElement("div",{className:"modal",id:"modal"+e.member.id},s.a.createElement("div",{className:"modal-dialog"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),s.a.createElement("div",{className:"modal-body"},t,s.a.createElement("div",{className:"calendar-rectangle"},s.a.createElement("div",{id:"calendar-content",className:"calendar-content"},s.a.createElement(f,{member:e.member})))))))};var N=function(){var e=m.members.map((function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{className:"list-group-item","data-toggle":"modal","data-target":"#modal"+e.id,key:e.id},e.real_name),s.a.createElement(A,{member:e}))}));return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"Users"),s.a.createElement("ul",{className:"list-group"},e)))};i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(N,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.978fcce7.chunk.js.map