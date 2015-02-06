# code-tests-winter-2015
Various code & design challenges for the job hunt in early 2015. Individual tests will be on appropriately named branches.

## Code Tests
- Bellhops
- aboutLife

## Bellhops Code Test
Create a small functioning application that has 2 accordion views on a single page. The accordion should be implemented as a generic reusable component. Add a button to the page that allows the user to add more accordions to the page. For extra points, include tests of your choice.

#### Methods & Dev Log
First thought: Find an existing accordion.
Second thought: Find existing component-based solution
Third thought: React can't be *that* hard, right?

I should mention, since its been a while since I played w/ React, I'll just be treating it as I haven't really looked at it before.

So, Foundation by ZURB has accordions. Huzzah! And [react-foundation-apps](https://github.com/akiran/react-foundation-apps) has an accordion example in the docs. Double huzzah! So first things first, install the framework via npm.

Look at docs. Wow, there's even a yeoman generator. Run it. This is entirely too good to be true - everything worked, and it appears I'm running Foundation for Apps powered by React instead of Angular. Triple Huzzah!

Okay, so boilerplate up and running. Time to see if I can get the accordion component working. Required it, added markup... lgtm! Quick sanity check to make sure I can have multiple accordions on the same page and they work independently, that works beautifully.

So here's where I started to actually put in effort (thanks, yeoman!). I have a reusable component in the sense I can import the accordion component and add markup myself, but I need to be able to generate multiple accordions programmatically. Where does the logic for the generation of the multiple accordions go? No controllers, but that's not component-based thinking. The logic would go in a custom button element, then.

As far as a whole functioning accordion, I would guess I would use the custom accordion markup I imported from the framework in a separate component - IE, a component wrapper that has the entire functioning accordion in it so I can manipulate that component via JS.

Quick sanity check: does react have any easy method for generating new elements in the DOM? ```react.render()``` looks good, but the docs say it can only overwrite, not add on. IE, its the render function used for whole elements to update the UI. 

Thought: Maybe a better way to go about this is to have a custom element that will render x accordions and starts with a baseline value of 2. Have the 'add accordion' button just increment x up and re-render the custom element. How to have components talk to each other, though? Maybe sub-components can do that, and the 'add accordion' button becomes Accordion.addButton or something? Reading more.

'Read thinking in React', things become clearer. Think what I need is a prop to share data across components. Really should have read article sooner. rtfm, Alex, rtfm.

So thinking about components, my widget should look like:

- AccordionWidget
    - AccordionControl
      - Add New Accordion Button
    - AccordionGrid
      - AccordionItem
          - Accordion

Accordion grid would be a wrapper for the accordions that (if I have time) should wrap accordions in such a way that they're laid out in a grid. Okay, so lets try and build this!

Initial creation of above components went off without a hitch, applied foundation styles so it doesn't look fugly.




