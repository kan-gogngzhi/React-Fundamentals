import React from 'react';
import {Link} from 'react-router';
import UserDetails from '../components/UserDetails';
import UserDetailsWrapper from '../components/UserDetailsWrapper';
import MainContainer from '../components/MainContainer';
import styles from '../styles';

const StartOver = ()=> {
    return (
        <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
                <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
            </Link>
        </div>
    );
};

const Tie = (props) => {
    return (
        <MainContainer>
            <h1>It's a Tie!</h1>
            <StartOver />
        </MainContainer>
    )
};

const Results = (props) => {
    if (props.isLoading) {
        return <p> Loading </p>
    }

    if (props.scores[0] === props.scores[1]) {
        return (
            <Tie scores={props.scores} playersInfo={props.playersInfo}/>
        )
    }

    const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    const losingIndex = winningIndex === 0 ? 1 : 0;

    return (
        <MainContainer>
            <h1>Results</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header='Winner'>
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Loser'>
                    <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainContainer>
    )
};

export default Results;