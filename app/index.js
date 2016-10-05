var React = require('react');
var ReactDOM = require('react-dom');

//var Link = React.createClass({
//    render: function () {
//        const {children} = this.props;
//        return (
//            <div>
//                <div>Link</div>
//                <div>{children}</div>
//            </div>
//        );
//    }
//});

const Link = (children) => {
    const changeUrl = ()=> {
        window.location.replace(children)
    };
    return (
        <div>
            <div style={{color: 'blue'}} onClick={changeUrl}>link</div>
        </div>
    );
};

const Hello = React.createClass({
    render(){
        const {name, link} = this.props;

        return (
            <div>
                <div>Hello {name}!</div>
                {Link(link)}
            </div>
        );
    }
});

ReactDOM.render(<Hello name="Kyle" link="https://www.google.com"/>, document.getElementById('app'));