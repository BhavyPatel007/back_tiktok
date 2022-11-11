import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({

})

const Avatar = props => {

  const classes = useStyles();
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
