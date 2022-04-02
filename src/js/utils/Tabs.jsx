import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {props.tabs.map((tab, index) => (
            <Tab label={tab.name} {...a11yProps(0)} />
          ))}
        </Tabs>
      </AppBar>
      {props.tabs.map((tab, index) => (
        <TabPanel value={value} index={index}>
          <div>
            {tab.component}
            <div className={`controls d-flex justify-content-between ${value==0?"flex-row-reverse":''}`}>
              <button className={`btn btn-warning text-white btn-sm d-${value==0?"none":''}`} onClick={e=>handleChange(e, value-1)}>back</button>
              <button className={`btn btn-success btn-sm d-${value== (props.tabs.length-1)?"none":''}`} onClick={e=>handleChange(e, value+1)}>next</button>
            </div>
          </div>
        </TabPanel>
      ))}
    </div>
  );
}
