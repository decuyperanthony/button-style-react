import React from 'react';
import './styles.scss';
const ButtonDefault = () => {
    return (
        <div>
            5. {' '}
            <button type="button" className="disabled" disabled>Default</button>
        </div>
    );
};

export default ButtonDefault;