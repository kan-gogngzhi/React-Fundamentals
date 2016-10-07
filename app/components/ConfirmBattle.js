import React from 'react';
import styles from '../styles/index';
const {transparentBg} = styles;
const {PropTypes} = React;

const Prompt = (props)=> {
    return props.isLoading ? (<p>loading</p>) :
        (<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
            confirmBattld
        </div>);
};

//Prompt.propTypes = {
//    header: PropTypes.string.isRequired,
//    onSubmitUser: PropTypes.func.isRequired,
//    onUpdateUser: PropTypes.func.isRequired,
//    username: PropTypes.string.isRequired
//};

export default Prompt;