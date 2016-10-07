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
                onInitiateBattle={this.handleInitiateBattle}
            />
        );
    },
    componentDidMount(){
        let query = this.props.location.query,
            that = this;
        githubHelper.getPlayersInfo([query.playerOne, query.playerTwo]).then((players)=> {
            that.setState({
                loading: false,
                playersInfo: [players[0], players[1]]
            });
        });
    },
    handleInitiateBattle: function () {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        })
    },
});

export default PromptContainer;