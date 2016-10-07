import React from 'react';
import styles from '../styles/index';
const {transparentBg} = styles;

const PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState(){// todo es2015 will be in constructor
        return {
            username: ''
        }
    },
    render(){
        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
                <h1>{this.props.route.header}</h1>
                <div className="col-sm-12"></div>
                state: {this.state.username}<br/>
                <form onSubmit={this.onSubmitUser}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Github username"
                            value={this.state.username}
                            onChange={this.onUpdateUser}
                            type="text"
                        />
                    </div>
                    <div className="form-group col-sm-4 col-sm-offset-4 ">
                        <button className="btn btn-block btn-success" type="submit">Continue</button>
                    </div>
                </form>
            </div>
        );
    },
    onUpdateUser(e){
        this.setState({
            username: e.target.value
        });
    },
    onSubmitUser(e){
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