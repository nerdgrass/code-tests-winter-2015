var React = require('react');

var AccordionWidget = require('./accordionWidget.jsx');

var Home = React.createClass({
  render: function () {
    return (
      <div className="grid-container">
        <AccordionWidget />
      </div>
    );
  }
});

module.exports = Home;