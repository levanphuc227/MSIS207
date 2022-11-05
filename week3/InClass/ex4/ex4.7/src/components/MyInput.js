import * as React from 'react';

function MyInput({ name, type, label }){

    const [value, setValue] = React.useState('');
    return (
        <>
            <label>{label}</label>
            <input name={name} type={type} value={value} onChange={(e) => setValue(e.target.value)} />
        </>
    )

}
export default MyInput;