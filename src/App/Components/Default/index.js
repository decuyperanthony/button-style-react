import React from 'react';
import './styles.scss';
const ButtonDefault = () => {
    console.log('ButtonDefault');
    return (
        <div className="container-button">
            <div style={{marginRight: '4em'}}>
                <button type="submit" className="default">Default</button>
            </div>
        </div>
    );
};

export default ButtonDefault;