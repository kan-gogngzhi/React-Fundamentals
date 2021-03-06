import React from 'react';
import {Link} from 'react-router';
import styles from '../styles/index';
import UserDetailsWrapper from '../components/UserDetailsWrapper';
import UserDetails from '../components/UserDetails';
import Loading from '../components/Loading';
const {space, transparentBg} = styles;
const {PropTypes} = React;

const ConfirmBattle = (props)=> {
    return props.isLoading === true
        ? <Loading/>
        : <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
            <UserDetailsWrapper header='Player 1'>
                <UserDetails info={props.playersInfo[0]}/>
            </UserDetailsWrapper>
            <UserDetailsWrapper header='Player 2'>
                <UserDetails info={props.playersInfo[1]}/>
            </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
            <div className='col-sm-12' style={space}>
                <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate
                    Battle!
                </button>
            </div>
            <div className='col-sm-12' style={space}>
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                </Link>
            </div>
        </div>
    </div>;
};

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
    playersInfo: PropTypes.array.isRequired
}

export default ConfirmBattle;