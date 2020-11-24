import React from 'react';
import './styles.scss';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const ButtonIcon = () => {
    return (
        <>
        6. {' '} With Icon
        <div style={{display: 'flex'}}>
            <button
                type="button"
                className="buttonIcon"
                style={{ marginRight: '0.5em' }}
            >
                <AddShoppingCartIcon style={{ fontSize: 15, marginRight: '0.5em' }}/>
                <div>Default</div>
            </button>
            <button
                type="button"
                className="buttonIcon"

            >
                <div style={{ marginRight: '0.5em' }}>Default</div>
                <AddShoppingCartIcon style={{ fontSize: 15, marginRight: '0.5em' }}/>
            </button>
        </div>
        </>
    );
};

export default ButtonIcon;