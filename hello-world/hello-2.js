/** @jsx React.DOM */

var Hello = React.createClass({displayName: 'Hello',
    render: function() {
        return React.DOM.div(null, "Hello ", this.props.name);
    }
});
 
React.renderComponent(Hello({name: "World"}), document.body);