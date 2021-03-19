# Project: Flashcard-o-matic
Hi friends! I appreciate your time in reading this! This Flashcard website is a big project filled with big work. You are pretty much going to build up this entire app by yourself, but I've created this guide to help make this capstone less overwhelming. This project is really rewarding at the end - so don't let the bumps and frustrations you run into along the way deter you. You are capable. You can do it.

<br>

1. **Starter Code**
	* Steps to fix `npm start` failing to run
1. **Getting Started**
	* Roughly skeleton out your components
1. **Bootstrap Components**
	* Breadcrumbs
	* Buttons
	* Cards
	* List Groups
1. **Icons** *(optional)*
	* Putting cute icons into your JSX
1. **Utility Functions**
	* Reference of all utility functions
	* Using a utility function: example
1. **Important Notes**
	* `deck.cards` array
	* `window.confirm()`
	* `useParams()` return type
	* `parseInt()`
	* Checking if Object is empty
	* Reminder about `useState`
	* Reusing Components
1. **How to Pass Qualified Tests**
	* What you should aim for with each test
1. **How I Organized My App** *(optional)*
	* Look at this if you feel stuck...try to organize it yourself first!

<br>

---

<br>

## **1. Starter Code**

For some reason, the starter code that came from my Qualified did not work right out of the gate. (You'll know if your code won't work if `npm start` will not run.) If yours is like this too, here are the steps I took to fix the issue:

Note that I downloaded my code about a week before you did, so this problem very well might not exist anymore.

### `index.js` *(`src/Layout`)*
* Add the following import to the top of the file: 
`import React, { Fragment } from "react";`
* Change the `<></>` tags to `<Fragment></Fragment>` in the `return` statement.

### `package.json`
* Change the `start` script to the following: 
`"concurrently \"npm run start:server\" \"npm run start:react\"",`

Now, `npm start` should work.

<br>

---

<br>

## **2. Getting Started**
If you're someone who likes Bootstrap and designing the user interface of apps, you'll love the start of this project. You will be recreating the web pages shown in the instructions by implementing React components and putting them together. It doesn't have to look the same, as long as the page you created has all functionality. You can decide how creative you would like to go for this project!

**My suggestion is to start off with a rough plan of the components you plan to create.** By looking at each screenshot and jotting down some ideas of single-responsibility components, you cut down time later.

Here is a screenshot Thinkful gives us in the instructions:
![Example Screenshot](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/f63b8bedaaf37cd8c3245febe6f0275f-deck.png)

As an example, I could decide to break up this screenshot into four different components:
1. Header, which is already made for you. *(`Header.js`)*
1. Breadcrumb
1. Deck Info
1. Card Info

After going through each screenshot, you already will have a rough skeleton of how to design and structure your app. You may end up changing or breaking down the components later, but hopefully you'll have a list of components we can work with and start developing!

Keep the **KISS** principle in your mind...not only for this project, but for every codibng project in the future. **Keep it Simple & Stupid**. Don't try to overcomplicate your App. *(well, I'm sure nobody TRIES to overcomplicate their app...)*

<br>

---

<br>

## **3. Bootstrap Components**
Here are some Bootstrap components you may encounter when building your app. All code is written in JSX.

*Note: if you are to reuse code from Bootstrap's docs, you will have to change every `class` property to `className` to be compatible with React.*

### [Breadcrumbs](https://getbootstrap.com/docs/5.0/components/breadcrumb/)
```javascript
<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Link</a></li>
    <li className="breadcrumb-item active" aria-current="page">Current Page</li>
  </ol>
</nav>
```

### [Buttons](https://getbootstrap.com/docs/5.0/components/buttons/)
```javascript
<>
	<button type="button" className="btn btn-primary">Blue Button</button>
	<button type="button" className="btn btn-secondary">Grey Button</button>
	<button type="button" className="btn btn-warning">Red Button</button>
</>
```

### [Cards](https://getbootstrap.com/docs/5.0/components/card/)
```javascript
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Card text</p>
  </div>
</div>
```

### [List Groups](https://getbootstrap.com/docs/5.0/components/list-group/)
```javascript
<ul className="list-group">
  <li className="list-group-item">An item</li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
</ul>
```

<br>

---

<br>

## **4. Icons** *(optional)*
"What are those cute icons on the buttons?? I want to do that!" Fret no more. I will show you how to integrate icons into your JSX!

[Bootstrap Icons](https://icons.getbootstrap.com/) has free icons to integrate into your code. You will have to run `npm i bootstrap-icons` in your root project folder to use them.

### Example button with [Trash Can](https://icons.getbootstrap.com/icons/trash-fill/) icon:
```javascript
// the <svg> and <path> elements are copy-pasted from Bootstrap Icons
<button type="button" className="btn btn-danger">
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 20 20">
		<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
	</svg>
</button>
```
No - you don't have to know how to write that. Yeah - it's pretty awful to look at, but it makes your front end pretty at least. Search for icons you want to put into your app, and press "Copy HTML" and paste right into your code.

<br>

---

<br>

## **5. Utility Functions**
Import statement for reference: `import { ... } from "../utils/api/index.js"`, replacing the `...` with the function you wish to export.

These utility functions are mega fun! Sarcasm. Every utility function is an asynchronous function that returns JSON files wrapped in a Promise. It deals with all of the data found in `db.json`. You do not edit this file manually, instead, you use these functions to get/set data within the database.

*Please keep in mind:*
* *Every one of these functions need to be used at least once in your app.*
* *Every one of these function's returns are wrapped in a Promise.*
* *A `signal` parameter is an *optional* `AbortController.signal`.*

You can browse `index.js` in `utils/api` for all of the function ducoumentation, but for ease of reference, I've put the functions below. 

| Function | Parameters | Returns |
| -------- | ---------- | ------- |
| `listDecks` | `signal`: optional | An array of `decks`
| `createDeck` | `deck`: must not have an `id` <br> `signal`: optional | The new `deck` object (now with an `id`)
| `readDeck` | `deckId` <br> `signal`: optional | The `deck` with the maching `deckId`
| `updateDeck` | `updatedDeck`: must have an `id` <br> `signal`: optional | The updated `deck`
| `deleteDeck` | `deckId` <br> `signal`: optional | An empty Object
| `listCards` | `deckId` <br> `signal`: optional | An array of `cards`
| `createCard` | `deckId` <br> `card`: must not have an `id` <br> `signal`: optional | The new `card` object (now with an `id`)
| `readCard` | `cardId` <br> `signal`: optional | The `card` with the matching `cardId`
| `updateCard` | `updatedCard`: must have an `id` <br> `signal`: optional | The updated `card`
| `deleteCard` | `cardId` <br> `signal`: optional | An empty Object

<br>

```javascript
// example implementation of the 'listDecks()' utility function
import { listDecks } from "../utils/api/index.js";

const [decks, setDecks] = useState([]);
const abortController = new AbortController();
const signal = abortController.signal;

// get decks when first rendered.
useEffect(() => {
	getDecks();

	return () => {
		abortController.abort();
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

/**
 * Fetches all of the current decks from the database.
 */
async function getDecks() {
	try {
		const response = await listDecks(signal);
		setDecks(response);
	}
	catch(error) {
		if(error.name !== "AbortError") {
			throw error;
		}
	}
}
```

<br>

---

<br>

## **6. Important Notes**
### `deck.cards` array
The Qualified instructions do not mention this, but every `deck` has a `cards` array attached to it. You can choose whether you want to use the utility function `readCard()` or this method.
```javascript
deck.cards[0]; // access the first card of the deck
```

### `window.confirm()`
This will be used as a confirmation before deleting either a deck or a card. If the user presses "OK", the function will return `true`. If the user presses "Cancel", the function will return `false`.
```javascript
window.confirm(`Delete this deck?\n\nYou will not be able to recover it.`);
```

### `getParams()` return type
No matter what, `getParams` always returns a string.
```javascript
// example path: decks/:deckId
// example url: https://localhost:3000/decks/1
const { deckId } = useParams(); // deckId = "1", a string
```

### `parseInt()`
So, if we want to use a string as a number, we can use `parseInt`.
```javascript
const deckIdNumber = parseInt(deckId); // deckIdNumber = 1, a number
```

### Checking if Object is empty
```javascript
// we cannot do the following to check if an Object is empty:
if(deck === {}) // will compile but will always be false

// instead, we can check to see if the object has no keys:
if(Object(deck).keys.length === 0)
```

### Reminder about `useState`
Whenever you call a setState function, that call is asynchronous. That means that you're going to get some wacky results sometimes when your states aren't matching up with the website. Sometimes debugging these can be a nightmare, so I hope this reminder helps out. (Check Asynchronous State)
```javascript
const [count, setCount] = useState(0);
setCount(count + 1); // ran asynchronously.
console.log(count); // count still equals 0, so 0 will be printed to the console.
```

### Reusing Components
There are four total forms on your website: Add/Edit Deck and Add/Edit Card. **It is a requirement that your Add/Edit Card is the same component reused.** I extended this even further, and only had one Form component for all four forms on the site. You do not have to do that, but it is good practice to **not reuse** code. Code that looks very similar can be reimplemented into its own function or React Component.
```javascript
// this is an example of reusing the same Component based off of the action
// paths have been left out for brevity
<>
	<Switch>
		<Route path="...">
			<Form edit={false} isDeck={true} />
		</Route>
		<Route path="...">
			<Form edit={true} isDeck={true} />
		</Route>
		<Route path="...">
			<Form edit={false} isDeck={false} />
		</Route>
		<Route path="...">
			<Form edit={true} isDeck={false} />
		</Route>
	</Switch>
</>
```
You'll also probably finding yourself looping over arrays to create an array of JSX elements. This is also reusing components, and whenever you have an array of JSX elements, you need to make sure each Component has their own unique key.
```javascript
// here is an example implementation of an array of JSX elements 
const decksJSX = decks.map((deck) => <DeckPreview key={deck.id} deck={deck} />);
```

<br>

---

<br>

## **7. Passing the Qualified Tests**
*sigh.* This app is a big example of Qualified tests wanting you to implement things a very specific way. I created the app and got it fully functional, but then met with a TA and realized that all my tests were failing because of what the tests are looking for. If you are failing tests that you think should be passing, refer to the list below. If your tests are still failing for a test that needs a utility function, make sure you are calling that function in the actual component, and you are not passing it down as a prop.

That way, each of your components are making their own API calls to get the most relevent data from the server.

| Test | Required Utility Functions | Required Text | Other |
| ---- | ---------------------------- | ------------- | ----- |
|  landing on a bad page shows "Not Found" page | `listDecks` | "Not Found" |
| route for / | `listDecks` |
| route for /decks/:deckId | `readDeck` |
| route for /decks/new | | "Create Deck" | `<input>` and `<textarea>` are both used only once
| route for /decks/:deckId/edit | `readDeck` | | `<input>` and `<textarea>` are auto-filled with their original content
| route for /decks/:deckId/cards/new | `readDeck` | "Add Card"
| route for /decks/:deckId/cards/:cardId/edit | `readDeck` <br> `readCard` | | Both `<textarea>` elements should be auto-filled with their original content
| route for /decks/:deckId/study | `readDeck` | "Card # of #" | Button named "Flip" exists and "Next" does not (see below test) 
| route for /decks/:deckId/study clicking flip shows next button | `readDeck` | | "Next" button does not exist while on the front, and does exist while on the back
| route for /decks/:deckId/study not enough cards | `readDeck` | "Not enough cards"

---

## **8. How I Organized My App** *(optional)*
If you find yourself feeling lost, I will show you what my App structure looks like, so hopefully you don't feel as lost. I have a total of 15 React Components.

![Flowchart](https://i.ibb.co/dp80wgF/Untitled-Document-1.png)

<br>

---

<br>

## **That's it! Closing Thoughts & GitHub Repo**
Thank you so much for taking your time in reading this. I am always open to help when I'm available - I mean it. You ALL are super smart and super capable. I hope you find this at least a little helpful when diving into this capstone.

I am going to post my Project Repo here, but I hope you will put in serious work before peeking at how I wrote this program. You learn the best when you work through the pain! (unfortunate but true.) [Take a look here.](https://github.com/itsdotnickscott/thinkful-project-flashcards)

ok bye