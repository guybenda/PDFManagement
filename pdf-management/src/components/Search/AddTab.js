import React, { useState } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField, makeStyles, Button } from '@material-ui/core';
import PeriodField from '../Fields/PeriodField';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { Add } from '@material-ui/icons';
function AddTab(props) {

    const [startDate, setStartDate] = useState(Date.now());

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

    const onChangeData = (e,d) => {
        console.log(e,d);
        console.log(props.history)
        setStartDate(e);
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
                    />
                </div>

                <div className="add-tab-row-container">
                    <div className="add-tab-dates-container">
                        <div>
                        <PeriodField
                            date={startDate}
                            onChangeData={onChangeData}
                            name={"תאריך התחלה"}
                        />
                    </div>
                    <div className="add-tab-date">
                        <PeriodField
                            className="add-tab-date"
                            onChangeData={onChangeData}
                            minDate={startDate}
                            name={"תאריך סיום"}
                        />
                    </div> 
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<Add />}>צור</Button>
                    </div>
                </div>

            </MuiPickersUtilsProvider>
        </div>
    )
}

export default AddTab;