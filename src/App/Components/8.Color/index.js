import React from 'react';
import './styles.scss';
const ButtonColor = () => {
    return (
        <>
        8. {' '} Color default
        <div>
            <button
                type="button"
                className="buttonColor"
                style={{
                    marginRight: '0.5em',
                }}
            >
                Default
            </button>
        </div>
        </>
    );
};

export default ButtonColor;