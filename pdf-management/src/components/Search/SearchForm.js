import React, { useEffect, useState } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import TabPanel from "./TabPanel";
import { getUnits } from "../../api/ReportActionsAPI";
import { Add, Visibility } from "@material-ui/icons";
import "./SearchForm.css";
import AddTab from "./AddTab";
import EditTab from "./EditTab";

const SearchForm = () => {
  const [units, setUnits] = useState([]);
  const [currTab, setCurrTab] = React.useState(0);

  useEffect(() => {
    setUnits(getUnits());
  }, []);

  const handleChange = (event, newTab) => {
    setCurrTab(newTab);
  };

  function tabProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  }
  return (
    <div className='search-container'>
      <AppBar position='static' color="default">
        <Tabs
          value={currTab}
          onChange={handleChange}
          variant='fullWidth'
          indicatorColor='primary'
          textColor='primary'
        >
          <Tab label='צור' icon={<Add />} {...tabProps(0)}></Tab>
          <Tab label='צפייה' icon={<Visibility />} {...tabProps(1)}></Tab>
        </Tabs>
      </AppBar>
      <TabPanel value={currTab} index={0}>
        <AddTab units={units} />
      </TabPanel>
      <TabPanel value={currTab} index={1}>
        <EditTab units={units} />
      </TabPanel>
    </div>
  );
};

export default SearchForm;
