import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    card: {
        borderRadius: '20px',
        boxShadow: 'rgb(0 0 0 / 5%) 0px 0px 0px 1px, rgb(209 213 219) 0px 0px 0px 1px inset',
        backgroundColor: '#fff',
    }
});


const Card = props => {
    const classes = useStyles();
  return (
    <div className={`${classes.card} ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
