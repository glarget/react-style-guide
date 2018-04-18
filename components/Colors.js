const React = require('react');
const createReactClass = require('create-react-class');


var Colors = createReactClass({
    render: function() {
        return (
            <div>
                <div style={this.props.bgColor} className={this.props.className}>
                    {this.props.hexa}
                </div>
                <span className="color-reference">{this.props.reference}</span>
            </div>
        );
    }
});

module.exports = Colors;