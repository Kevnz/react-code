/** @jsx React.DOM */

var Hello = React.createClass({
    render: function() {
        return <div>Hello World</div>;
    }
});
 
React.renderComponent(<Hello />, document.body);