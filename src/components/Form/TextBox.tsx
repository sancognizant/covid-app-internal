import React from 'react';
import TextField from '@material-ui/core/TextField';


export interface TextBoxProps {
    label: string;
    defaultValue: string;
    readOnly: boolean;
}
 
/*
Textbox that allows users to add inputs into the text field, can be made read-only 
and default values can be set
*/ 
const TextBox: React.SFC<TextBoxProps> = ({label, defaultValue, readOnly}) => {
    return ( 
        <TextField id="outlined-basic" label={label} variant="outlined" defaultValue= {defaultValue}
            InputProps={{
                readOnly: readOnly,
            }}/>
     );
}
 
export default TextBox;