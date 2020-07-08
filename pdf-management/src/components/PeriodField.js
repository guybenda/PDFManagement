import React, { useState, useEffect } from "react";

import moment from "moment";

import { DatePicker } from "@material-ui/pickers";

function PeriodField(props) {
  const [date, setDate] = useState(props.date);

  const handleChange = (d) => {
    setDate(d);
    // time = if its start or end time
    props.handleTimeChange(props.time, d);
  };

  //   if (props.print)
  //     return (
  //       <>
  //         {!props.noMargin && (
  //           <div className='field-print-title'>{props.name}:</div>
  //         )}
  //         <div>{moment(props.data).format("MMMM YYYY")}</div>
  //       </>
  //     );

  return (
    <DatePicker
      autoOk
      disabled={props.disabled}
      views={["year", "month"]}
      openTo='month'
      variant='inline'
      minDate={props.minDate}
      maxDate={props.maxDate}
      fullWidth={false}
      label={props.noMargin ? "" : props.name}
      value={date || moment()}
      onChange={handleChange}
      minDateMessage='התאריך לא יכול להיות קטן מתאריך התחלה'
      maxDateMessage='התאריך לא יכול להיות גדול מתאריך סיום'
    />
  );
}

export default PeriodField;
