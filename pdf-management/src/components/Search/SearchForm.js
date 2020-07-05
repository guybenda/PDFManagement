import React, { useEffect, useState } from 'react';
import {  Paper, Tabs, Tab, AppBar } from '@material-ui/core';
import TabPanel from './TabPanel';
import { getUnits } from '../../api/ReportActions';
import { Add, Visibility } from '@material-ui/icons'
import "./SearchForm.css";
import AddTab from './AddTab';
import EditTab from './EditTab';


const SearchForm = () => {
    const [units, setUnits] = useState([]);
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        setUnits(getUnits());
        // code to run on component mount
    }, []);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    return (
        <Paper className="search-container">
            <AppBar position="static">

                <Tabs value={value} onChange={handleChange}>
                    <Tab label="צור" icon={<Add />} {...a11yProps(0)}></Tab>
                    <Tab label="צפייה" icon={<Visibility />} {...a11yProps(1)}></Tab>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <AddTab units={units} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <EditTab units={units}/>
            </TabPanel>


        </Paper>
    )
}

export default SearchForm;

