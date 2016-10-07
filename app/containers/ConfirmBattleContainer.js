import React from 'react';
import githubHelper from '../utils/githubHelper';
import ConfirmBattle from '../components/ConfirmBattle'
const {PropTypes} = React;

const PromptContainer = React.createClass({
    contextTypes: {
        router: PropTypes.object.isRequired
    },
    getInitialState(){// todo es2015 will be in constructor
        return {
            loading: true,
            playersInfo: []
        }
    },
    render(){
        return (
            <ConfirmBattle
                isLoading={this.state.loading}
                playersInfo={this.state.playersInfo}
            />
        );
    },
    componentDidMount(){
        let query = this.props.location.query;
        githubHelper.getPlayersInfo([query.playerOne, query.playerTwo]).then((players)=> {
            console.log('pl: ', players);
        });
    }
});

export default PromptContainer;