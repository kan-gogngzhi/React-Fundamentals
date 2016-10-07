import React from 'react';
import styles from '../styles/index';
const {transparentBg} = styles;
const {PropTypes} = React;

const Prompt = (props)=> {
    return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
            <h1>{props.header}</h1>
            <div className="col-sm-12"></div>
            <form onSubmit={props.onSubmitUser}>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Github username"
                        value={props.username}
                        onChange={props.onUpdateUser}
                        type="text"
                    />
                </div>
                <div className="form-group col-sm-4 col-sm-offset-4 ">
                    <button className="btn btn-block btn-success" type="submit">Continue</button>
                </div>
            </form>
        </div>
    );
};

Prompt.propTypes = {
    header: PropTypes.string.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
};

export default Prompt;