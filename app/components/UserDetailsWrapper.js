import React from 'react';
const {PropTypes} = React;

const UserDetailsWrapper = (props) => {
    return (
        <div className='col-sm-6'>
            <p className='lead'>{props.header}</p>
            {props.children}
        </div>
    )
}

UserDetailsWrapper.propType = {
    header: PropTypes.string.isRequired,
};

export default UserDetailsWrapper;
