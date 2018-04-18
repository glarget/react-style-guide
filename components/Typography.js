const React = require('react');
const createReactClass = require('create-react-class');


var Typography = createReactClass({
    render: function() {
        return (
            <div>
                <h1 style={this.props.family} className={this.props.className}>
                    {this.props.familyName}
                </h1>
            </div>
        );
    }
});

module.exports = Typography;