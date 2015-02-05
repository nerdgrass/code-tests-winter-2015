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

So, Foundation by ZURB has accordions. Huzzah! And [react-foundation-apps](https://github.com/akiran/react-foundation-apps) has an accordion in the docs. Double huzzah! So first things first, install the framework via npm.

Look at docs. Wow, there's even a yeoman generator. Run it. This is entirely too good to be true - everything worked, and it appears I'm running Foundation for Apps powered by react instead of Angular.

Okay, so boilerplate up and running. Time to see if I can get the accordion component working. Required it, added markup... lgtm!

