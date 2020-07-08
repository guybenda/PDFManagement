import React, { useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField, makeStyles, Button } from "@material-ui/core";
import PeriodField from "../PeriodField";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { Link } from "react-router-dom";
import { Add } from "@material-ui/icons";

function AddTab(props) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const onSelectedUnit = (option, value, reason) => {
    if (reason === "select-option") {
      setStartDate(Date.now());
      setEndDate(Date.now());
    }
    if (reason === "clear") {
      setStartDate(null);
      setEndDate(null);
    }
  };

  const onChangeDate = (time, date) => {
    console.log(time, date);
    if (time === "start") setStartDate(date);
    else setEndDate(date);
  };

  const renderDates = () => {
    if (startDate == null || startDate === "") return;
    return (
      <div className='tab-row-container'>
        <div className='add-tab-dates-container'>
          <div className='add-tab-date'>
            <PeriodField
              date={startDate}
              handleTimeChange={onChangeDate}
              name={"תאריך התחלה"}
              time='start'
            />
          </div>
          <div className='add-tab-date'>
            <PeriodField
              className='add-tab-date'
              handleTimeChange={onChangeDate}
              date={endDate}
              time='end'
              minDate={startDate}
              name={"תאריך סיום"}
            />
          </div>
        </div>
        <div>{renderAddButton()}</div>
      </div>
    );
  };

  const renderAddButton = () => {
    if (
      endDate == null ||
      endDate === "" ||
      moment(endDate).isBefore(startDate)
    )
      return (
        <Button disabled variant='contained' startIcon={<Add />}>
          צור
        </Button>
      );
    return (
      <Link to={`/`}>
        <Button variant='contained' color='primary' startIcon={<Add />}>
          צור
        </Button>
      </Link>
    );
  };

  return (
    <div className='tab-container'>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div>
          <Autocomplete
            id='combo-box-demo'
            options={props.units}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label='בחר קבוצה' variant='outlined' />
            )}
            onChange={onSelectedUnit}
          />
        </div>
        {renderDates()}
      </MuiPickersUtilsProvider>
    </div>
  );
}
export default AddTab;
