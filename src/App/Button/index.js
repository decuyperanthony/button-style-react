import React, { useState } from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import './button.scss';

function Button(props) {
    const [size] = useState(props.size);
    const [variant] = useState(props.variant);
    const [shadow] = useState(props.shadow);
    const [disabled] = useState(props.isDisabled);
    const [startIcon] = useState(props.startIcon);
    const [endIcon] = useState(props.endIcon);
    let disabledClass;
    if (disabled) disabledClass = 'disabled';
    let iconStartJSX;
    let ButtonIconClass;
    if (startIcon) {
        iconStartJSX = (<AddShoppingCartIcon style={{ fontSize: 15, marginRight: '0.5em' }}/>);
        ButtonIconClass = "button-with-icon"
    }
    let iconEndJSX;
    // let ButtonIconClass;
    if (endIcon) {
        iconEndJSX = (<AddShoppingCartIcon style={{ fontSize: 15, marginLeft: '0.5em' }}/>);
        ButtonIconClass = "button-with-icon"
    }

    return (
        <div>
            <button
                type="button"
                disabled={false || disabled}
                className={disabled ? (`btn ${disabledClass}`) : ((!size && !variant && !shadow && !ButtonIconClass ) ? (`btn default`) : (`btn ${shadow} ${variant} ${size} ${ButtonIconClass}`))}
            >
                {iconStartJSX}
                Default
                {iconEndJSX}
            </button>
        </div>
    );
};

export default Button;