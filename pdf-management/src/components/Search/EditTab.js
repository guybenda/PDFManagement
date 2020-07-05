import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Autocomplete } from '@material-ui/lab';
import { TextField, makeStyles,Select, FormControl, InputLabel } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { Add } from '@material-ui/icons';
function EditTab(props) {

    const [unitForms, setUnitForms] = useState([]);
    const [selectedForm, setSelectedForm] = useState("");


    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));
    const onSelectedUnit = (option, value, reason) => {
        if (reason === "select-option") {
            setUnitForms(value.forms);
        } if(reason === "clear"){
            setUnitForms("");
            setSelectedForm("");
        }
    }

    const renderOption = () => {
        if (unitForms.length === 0) return;
        return unitForms.map((form) => {
            return <option key={form.id} value={form.id}>{form.name}</option>
        })

    }

    const onSelectForm = (event) => {
        setSelectedForm(event.target.value);
    }

    const renderViewButton = () => {
        if (selectedForm === "") return;
        return (<Link className="tab-view-link" to={`/form/${selectedForm}`}>צפה</Link>)
    }

    const classes = useStyles();

    return (
        <div className={classes.root} className="add-tab-container">
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <div>
                    <Autocomplete
                        id="combo-box-demo"
                        options={props.units}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="בחר קבוצה" variant="outlined" />}
                        onChange={onSelectedUnit}
                    />
                </div>

                <div className="add-tab-row-container">
                    <div className="add-tab-dates-container">
                        <FormControl
                            variant="outlined"
                        >
                            <InputLabel>בחר דוח</InputLabel>
                            <Select
                                native
                                id="combo-box-demo"
                                style={{ width: 300 }}
                                value={selectedForm}
                                onChange={onSelectForm}
                            >}
                                >
                                <option aria-label="" value="" ></option>

                                {renderOption()}
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        {renderViewButton()}
                    </div>
                </div>

            </MuiPickersUtilsProvider>
        </div>
    )
}

export default EditTab;