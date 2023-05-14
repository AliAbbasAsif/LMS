import { TextField } from '@mui/material';
import React from 'react'

export default function CSTextField(props) {
    const { label, onChange, value, type, disable, required, helpertext,disabled ,variant,size,sx,placeholder,disableUnderline} = props;
  return (
    <TextField style={{marginTop: '9px'}}
    disabled={disable}
    label={label}
    value={value}
    type={type}
    onChange={onChange}
    required={required}
    fullWidth={true}
    helperText={helpertext}
    variant={variant}
    size={size}
    sx={{...sx}}
    placeholder={placeholder}
    InputProps={{ disableUnderline: disableUnderline }}
    // InputLabelProps={{ className: "textFieldlabel" }}
    // inputProps={{ className: "textFieldlabel" }}
  />
  )
}
