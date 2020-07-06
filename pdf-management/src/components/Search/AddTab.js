import React, { useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField, makeStyles, Button } from "@material-ui/core";
import PeriodField from "../Fields/PeriodField";
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

  const onChangeStart = (date) => {
    setStartDate(date);
  };

  const onChangeEnd = (date) => {
    setEndDate(date);
  };

  const renderDates = () => {
    if (startDate == null || startDate === "") return;
    return (
      <div className='tab-row-container'>
        <div className='add-tab-dates-container'>
          <div className='add-tab-date'>
            <PeriodField
              date={startDate}
              handleTimeChange={onChangeStart}
              name={"תאריך התחלה"}
            />
          </div>
          <div className='add-tab-date'>
            <PeriodField
              className='add-tab-date'
              handleTimeChange={onChangeEnd}
              date={endDate}
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
    console.log(endDate, startDate, moment(endDate).isBefore(startDate));
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
