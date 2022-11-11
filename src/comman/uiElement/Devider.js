import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  Devider: {
        borderBottom: '1px solid #80808045',
    }
});


const Devider = props => {
    const classes = useStyles();
  return (
    <div className={`${classes.Devider} ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Devider;
