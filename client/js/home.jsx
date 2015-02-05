var React = require('react');
var Accordion = require('react-foundation-apps/lib/accordion');

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <div>
          <h2>Welcome to react foundation apps</h2>
        </div>
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
      </div>
    );
  }
});

module.exports = Home;