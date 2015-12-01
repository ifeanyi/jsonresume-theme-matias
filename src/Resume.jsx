"use strict";
const React = require('react');

const ResumeSummary = (props) => {
  return (
    <div className="section">
      <h3 className="section-header">{props.title}</h3>
      {props.children}
    </div>
  );
};

const LeftColumn = (props) => {
  return (
    <div className="col left">
      <h5 className="position">{props.title} </h5>
      <small className="visible-md-inline visible-lg-inline light">{props.timespan}</small>
    </div>
  );
};

const RightColumn = (props) => {
  var divider = props.timespan ? <span className="divider">&nbsp;</span> : '';
  return (
    <div className="col">
      <div className="visible-xs-inline visible-sm-inline">
        <p>
          <span className="light">{props.title} {divider} {props.timespan} </span>
        </p>
      </div>
      <div className="visible-md-inline visible-lg-inline">
        <h5>{props.title} </h5>
      </div>
      {props.children}
    </div>
  );
};

module.exports = React.createClass({
  render: function() {
    var basics = this.props.data.basics;
    var items = Object.keys(this.props.data).map(function(k) {
      return <h3 key={k} className="section-header">{k}</h3>;
    }, this);

    return (
        <div className="container">
        <div id="header">
          <h1 className="title-header"> {basics.name} </h1>
          <ul className="basics-contact-list">
            <li> {basics.email} </li>
            <li> {basics.phone} </li>
            <li> {basics.location.city}, {basics.location.region} </li>
            <li> <a href={basics.website}> {basics.website} </a> </li>
          </ul>
          <br />
        </div>

        <ResumeSummary title="Profile">
          <RightColumn>
            <p>{basics.summary}</p>
          </RightColumn>
        </ResumeSummary>

        <ResumeSummary title="Experience">
          {this.props.data.work.map(function(w){
            var timespan = '2011 - Present';
            return (
              <div className="row" key={w.company}>
                <LeftColumn title={w.position} timespan={timespan} />
                <RightColumn title={w.company} timespan={timespan}>
                  <p>{w.summary} </p>
                  <ul>
                  {w.highlights.map(function(h,i) {
                    return (<li key={i}>{h}</li>);
                  })}
                </ul>
                </RightColumn>
              </div>
            );
          })}
        </ResumeSummary>

        <ResumeSummary title="Education">
          {this.props.data.education.map(function(ed){
            var timespan = 2011;
            return (
              <div className="row" key={ed.institution}>
                <LeftColumn title={ed.studyType} timespan={timespan} />
                <RightColumn title={ed.area} timespan={timespan}>
                  <p>{ed.institution}</p>
                </RightColumn>
              </div>
            );
          })}
        </ResumeSummary>
        </div>
    );
  }
});
