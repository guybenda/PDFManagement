import React from "react";

import PeriodField from "./PeriodField";

import "./ReportForm.css";
import moment from "moment";
import { REPORT_MODE } from "../constants";

class ReportTitle extends React.Component {
  handleTimeChange = (time, date) => {
    const period = this.props.period;
    period[time] = moment(date).format("YYYY-MM");
    this.props.editPeriod(period);
  };

  render() {
    return (
      <div className='report-title'>
        <h2>דו"ח חודשי </h2>
        <div className='report-title-period'>
          <PeriodField
            disabled={this.props.mode === REPORT_MODE.view ? true : false}
            value={this.props.period.start}
            handleTimeChange={this.handleTimeChange}
            time='start'
            maxDate={this.props.period.end}
          />
        </div>
        <h2> - </h2>
        <div className='report-title-period'>
          <PeriodField
            disabled={this.props.mode === REPORT_MODE.view ? true : false}
            time='end'
            value={this.props.period.end}
            handleTimeChange={this.handleTimeChange}
            minDate={this.props.period.start} // sometimes tricky
          />
        </div>
      </div>
    );
  }
}

export default ReportTitle;
