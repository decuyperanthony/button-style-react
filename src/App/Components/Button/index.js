import React, { useState } from 'react';
import './button.scss';
function Button(props) {
    const [size] = useState(props.size);
    const [variant] = useState(props.variant);
    const [shadow] = useState(props.shadow);

    return (
        <div>
            React button component with props variant="secondary", size="lg" and shadow="disbaledShadow". {' '}
            <button
                type="button"
                // className="default"
                className={(!size && !variant && !shadow) ? `btn default` : `btn ${shadow} ${variant} ${size} `}
            >
                Default
            </button>
        </div>
    );
};

export default Button;