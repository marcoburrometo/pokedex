import { useState } from "react";

function Input({ onChange }) {
    const [value, setValue] = useState('');
    return (
        <input value={value} onChange={function (ev) {
            setValue(ev.target.value);
            onChange(ev.target.value);
        }} />
    )
}

export default Input;