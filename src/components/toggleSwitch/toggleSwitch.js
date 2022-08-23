import React, { useState, useEffect } from 'react';
import './toggleSwitch.css';

const ToggleSwitch = ({ischecked, onChange}) => {

    const [checked, setChecked] = useState(ischecked);
    
    const handleOnchange = () => {
        setChecked((prev) => !prev);
    }

    useEffect(() => {
        onChange(checked);
    }, [checked])

    return (
        <div className="toggle-switch">
            <input type="checkbox" checked={checked} onChange={handleOnchange} className="toggle-switch-checkbox" name="tempUnits" id="toggleSwitch" />
            <label className="toggle-switch-label" htmlFor="toggleSwitch">
                Temp in Fahrenheit
            </label>
        </div>
    )
}

export default ToggleSwitch