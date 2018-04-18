const React = require('react');
const createReactClass = require('create-react-class');

var Button = createReactClass({
    render: function() {
        return (
            <button style={this.props.styleTo} className={this.props.className}>{this.props.label}</button>
        );
    }
});

module.exports = Button;