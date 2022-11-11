import { FormControl, InputLabel } from "@mui/material";
import React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import TextField from '@material-ui/core/TextField';




const TextFieldcomp = (props) => {
  return (
    <div className={`InputBox__wrapper ${props.className}`} style={props.style}>
      

      <FormControl variant="standard">
        {/* {props.label && (
          <InputLabel shrink htmlFor={props.label}>
            {props.label}
          </InputLabel>
        )} */}
        <TextField
          required
          variant="outlined"
          // id="standard-password-input"
          // id="outLined"
          label={props.label}
          type={props.type}
          style={{width: '45vh'}}
          // autoComplete="current-password"
          // id="standard-password-input"
          // defaultValue=""
          // placeholder={props.placeholder}   
          // // id={props.label}
           value={props.value}
           onChange={props.onChange}
          // type={props.type}
          // // inputComponent={props.inputComponent}
          // endAdornment={props.endAdornment}
        />
      </FormControl>
    </div>
  );
};

export default TextFieldcomp;