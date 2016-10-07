import React from 'react';
import Prompt from '../components/Prompt'
const {PropTypes} = React;

const PromptContainer = React.createClass({
    contextTypes: {
        router: PropTypes.object.isRequired
    },
    getInitialState(){// todo es2015 will be in constructor
        return {
            username: ''
        }
    },
    render(){
        return (
            <Prompt
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header={this.props.route.header}
                username={this.state.username}
            />
        );
    },
    handleUpdateUser(e){
        this.setState({
            username: e.target.value
        });
    },
    handleSubmitUser(e){
        e.preventDefault();
        let username = this.state.username;
        this.setState({
            username: ''
        });
        console.log('props: ', this.props);
        console.log('route params: ', this.props.routeParams);
        console.log('context: ', this.context);

        if (this.props.routeParams.playerOne) {
            // go to battle
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            })
        }
        else {
            // go to player two
            // go to player two
            this.context.router.push(`/playerTwo/${this.state.username}`);
        }
    }
});

export default PromptContainer;