import React from 'react';
import TextField from '@material-ui/core/TextField';


export interface TextBoxProps {
    label: string;
    defaultValue: string;
    readOnly: boolean;
    styles: any;
    onChange: Function;
}

/*
Textbox that allows users to add inputs into the text field, can be made read-only 
and default values can be set, styles can also be passed in as props 
*/
const TextBox: React.SFC<TextBoxProps> = ({ label, defaultValue, readOnly, styles, onChange }) => {
    return (
        <TextField id="outlined-basic" label={label} variant="outlined" defaultValue={defaultValue}
            InputProps={{
                readOnly: readOnly,
            }} className={styles} onChange = {(eve) => onChange(eve.target.value)}/>
    );
}

export default TextBox;