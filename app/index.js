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
    function changeUrl(){
        console.log('changed');
    }
    return (
        <div>
            <div>Link</div>
            <div onClick={changeUrl}>{children}</div>
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

ReactDOM.render(<Hello name="Kyle" link="www.google.com"/>, document.getElementById('app'));