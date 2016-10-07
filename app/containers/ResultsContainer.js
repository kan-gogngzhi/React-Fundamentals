import React from 'react';
import githubHelper from '../utils/githubHelper';
import Results from '../components/Results'

var ResultsContainer = React.createClass({
    getInitialState () {
        return {
            isLoading: true,
            scores: []
        };
    },
    componentDidMount () {
        githubHelper.battle(this.props.location.state.playersInfo)
            .then(function (scores) {
                this.setState({
                    scores: scores,
                    isLoading: false
                })
            }.bind(this));
    },
    render () {
        return (
            <Results
                isLoading={this.state.isLoading}
                playersInfo={this.props.location.state.playersInfo}
                scores={this.state.scores} />
        );
    }
});

export default ResultsContainer;