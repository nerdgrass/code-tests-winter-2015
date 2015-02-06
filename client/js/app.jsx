var React = require('react');
var Router = require('react-router');
var {Route, DefaultRoute, RouteHandler, Link} = require('react-router');
var Home = require('./home');

var App = React.createClass({
  render: function () {
    return (
      <div className="grid-frame vertical">
        <div className="grid-content shrink" style={{padding: 0}}>
          <ul className="primary condense menu-bar">
            <li><a><strong>Accordion Generator</strong></a></li>
            <li><Link to="home">Home</Link></li>
          </ul>
        </div>
        <div className="grid-content">
          <div className="grid-container">
            <RouteHandler />
          </div>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route name='app' path='/' handler={App}>
    <Route name='home' handler={Home}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});