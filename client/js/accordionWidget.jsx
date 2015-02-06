var React = require('react');
var Accordion = require('react-foundation-apps/lib/accordion');

// Widget - all components put together
var AccordionWidget = React.createClass({
  getInitialState: function() {
    return {count: 1}
  },
  updateCount: function(count) {
    this.setState({
      count: count
    });
  },
  render: function() {
    return (
      <div className="grid-block align-center">
        <div className="medium-8 grid-block">
          <AccordionControl count={this.state.count} buttonClick={this.updateCount}   />
          <AccordionGrid count={this.state.count} className="small-12 grid-block" />
        </div>
      </div>
    );
  }
});

// Controls - manipulate # of accordions
var AccordionControl = React.createClass({
  handleSubmit: function () {
    console.log(this.props.count);
    this.props.buttonClick(
      this.props.count = this.props.count+1
    );

  },
  render: function() {
    return(
      <div className="small-12 grid-content">
        <div className="success card">
          <div className="card-section accordion-control grid-block">
              <div className="grid-content medium-8">
                <h3>Accordion Control</h3>
                <label>{this.props.count} accordions exist </label>
              </div>
              <div className="grid-content small-4">
                <form onSubmit={this.handleSubmit}>
                  <button className="button secondary">Add Accordion</button>
                </form>
              </div>
          </div>
        </div>
      </div>
    );
  }
});

// Layout - how to display # of accordions
var AccordionGrid = React.createClass({
  render: function () {
    var count = this.props.count;
    var accordions = [];
    for (var i=0; i < count; i++) {
      accordions.push(<AccordionItem />)
    }
    return (
      <div className="small-12 grid-content">
        {accordions}
      </div>
    );
  }
});

// Single Item - what each accordion actually consists of
var AccordionItem = React.createClass({
  render: function() {
    return (
      <div>
        <Accordion>
          <Accordion.Item title='First Verse'>
            <p>Pardon me, boy</p>
            <p>Is that the Chattanooga choo choo?</p>
            <p>Track twenty-nine</p>
            <p>Boy, you can gimme a shine</p>
            <p>I can afford</p>
            <p>To board a Chattanooga choo choo</p>
            <p>I've got my fare</p>
            <p>And just a trifle to spare</p>
          </Accordion.Item>
          <Accordion.Item title='Second Verse (diff than first)'>
            <p>You leave the Pennsylvania Station bout a quarter to four</p>
            <p>Read a magazine and then you're in Baltimore</p>
            <p>Dinner in the diner</p>
            <p>Nothing could be finer</p>
            <p>Than to have your ham and eggs in Carolina</p>
          </Accordion.Item>
          <Accordion.Item title='Third Verse'>
            <p>When you hear the whistle blowin' eight to the bar</p>
            <p>Then you know that Tennessee is not very far</p>
            <p>Shovel all the coal in</p>
            <p>Gotta keep it rollin'</p>
            <p>Woo, woo, Chattanooga there you are</p>
          </Accordion.Item>
          <Accordion.Item title='Final Verse'>
            <p>There's gonna be</p>
            <p>A certain party at the station</p>
            <p>Satin and lace</p>
            <p>I used to call 'funny face'</p>
            <p>She's gonna cry</p>
            <p>Until I tell her that I'll never roam</p>
            <p>So Chattanooga choo choo</p>
            <p>Won't you choo-choo me home?</p>
            <p>Chattanooga choo choo</p>
            <p>Won't you choo-choo me home?</p>
          </Accordion.Item>
        </Accordion>
        <hr />
      </div>
    );
  }
});

module.exports = AccordionWidget;