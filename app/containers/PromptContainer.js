import React from 'react';
import styles from '../styles/index';
const {transparentBg} = styles;

const PromptContainer = React.createClass({
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
                <form>
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
    }
});

export default PromptContainer;