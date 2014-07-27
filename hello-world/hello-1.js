/** @jsx React.DOM */

var Hello = React.createClass({displayName: 'Hello',
    render: function() {
        return React.DOM.div(null, "Hello World");
    }
});
 
React.renderComponent(Hello(null), document.body);