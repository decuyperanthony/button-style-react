import React from 'react';
import './styles.scss';
const ButtonSize = () => {
    return (
        <>
        7. {' '} Size
        <div>
            <button
                type="button"
                className="buttonSize"
                style={{ marginRight: '0.5em', padding: '6px 12px' }}
            >
                Default
            </button>
            <button
                type="button"
                className="buttonSize"
                style={{ marginRight: '0.5em', padding: '8px 16px' }}
            >
              Default
            </button>
            <button
                type="button"
                className="buttonSize"
                style={{ marginRight: '0.5em', padding: '11px 22px' }}
            >
                Default
            </button>
        </div>
        </>
    );
};

export default ButtonSize;