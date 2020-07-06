import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Autocomplete } from "@material-ui/lab";
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  Button
} from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

function EditTab(props) {
  const [unitForms, setUnitForms] = useState(null);
  const [selectedForm, setSelectedForm] = useState();

  const onSelectedUnit = (option, value, reason) => {
    if (reason === "select-option") {
      setUnitForms(value.forms);
    }
    if (reason === "clear") {
      setUnitForms(null);
      setSelectedForm(null);
    }
  };

  const renderOptions = () => {
    if (unitForms === null) return;
    return unitForms.map((form) => {
      return (
        <option key={form.id} value={form.id}>
          {form.name}
        </option>
      );
    });
  };

  const onSelectForm = (event) => {
    setSelectedForm(event.target.value);
  };

  const renderViewButton = () => {
    if (selectedForm == null || selectedForm === "")
      return (
        <Button disabled variant='contained' color='primary'>
          צפה
        </Button>
      );
    return (
      <Link to={`/form/${selectedForm}`}>
        <Button variant='contained' color='primary'>
          צפה
        </Button>
      </Link>
    );
  };

  const renderFormsDD = () => {
    if (unitForms === null) return;
    return (
      <div className='tab-row-container'>
        <FormControl variant='outlined'>
          <InputLabel>בחר דוח</InputLabel>
          <Select
            label='בחר דוח'
            native
            id='combo-box-demo'
            style={{ width: 300 }}
            value={selectedForm}
            onChange={onSelectForm}
          >
            <option />
            {renderOptions()}
          </Select>
        </FormControl>
        <div>{renderViewButton()}</div>
      </div>
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
        {renderFormsDD()}
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default EditTab;
