# Your first React component

Now that your server is running with a blank React app, we can start to work

## Define a React component

**WARNING**: the first letter of the name of a React component should always be **Uppercase**.

```jsx
// Before React 17 you needed this line in all your jsx files but you don't need it anymore
import React from 'react';

export const MyComponent = () => (
  <div className="my-component">
    <h2>I am a very useful component</h2>
  </div>
);
```

## Mounting a component into the DOM

Now we want to display the component in the browser. To do that we will use `react-dom` which is a specialized library to render a generic react component inside a DOM environment.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyComponent } from './MyComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent />);
```

## Pass data to the component

Now that we have a nice component, we want to pass some data inside it. To do that we will use component properties. Properties is an immutable object passed at component instanciation.
To add properties to a component, you just have to declare it like an XML attribute.

Let say we want our component to display a custom message

```jsx
export const MyComponent = (props) => {
  const message = props.message || 'I am a very useful component';
  return (
    <div className="my-component">
      <h2>{message}</h2>
    </div>
  );
}
```

In javascript we need some good practices to make things easy, clear and errorless.
So here, instead of using props and forcing the other devs to search/guess the different properties.
We use destructuring to list every props directly (Of course, sometimes we can't avoid using props).
```jsx
export const MyComponent = ({ message }) => {
  return (
    <div className="my-component">
      <h2>{message || 'I am a very useful component'}</h2>
    </div>
  );
}
```

Now to use the property `message` we have to do something like

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyComponent } from './MyComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
//                      the props is passed here
//                                |||
//                       vvvvvvvvvvvvvvvvvvvvvv  
root.render(<MyComponent message="Hello World!" />);
```

In that case, the displayed message will be `Hello World!`

You can provide default values for `props` using `defaultProps`

```jsx
const MyComponent = ({ message }) => {
  return (
    <div className="my-component">
      <h2>{message}</h2>
    </div>
  );
}

MyComponent.defaultValue = {
  message: 'I am a very useful component'
}

export default MyComponent;
```

You can provide some validation for the `props` of a component using `PropTypes` to have error message in developement. it's quite useful when you provide components to other dev teams.

```jsx
import { string } from 'prop-types';

const MyComponent = ({ message }) => {
  return (
    <div className="my-component">
      <h2>{message}</h2>
    </div>
  );
}

MyComponent.propTypes = {
  message: string
}

MyComponent.defaultValue = {
  message: 'I am a very useful component'
}

export default MyComponent;
```

In React, there is a special property used to create nested components. It's the `children` property

```jsx
export const MyComponent = ({ children, message }) => {
  return (
    <div className="my-component">
      <h2>{message || 'I am a very useful component'}</h2>
      {children}
    </div>
  );
}
```

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyComponent } from './MyComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyComponent message="Hello World!">
    <p>Still a very useful component</p>
  </MyComponent>
);
```

in that case, the displayed message will be `Hello World!` and `children` will be equal to `<p>Still a very useful component</p>`

## Store data inside the component using the component state

If components `props` are not enough for your need, you can use the component `state`. The state is specific value for each component instance. Each time the value of the state is changed using `setState(...)`, this will trigger a full redraw of the component. Let's write a counter component

```jsx
import { useState } from 'react';

export const Counter = () => {
  // if you don't define an initial state, your state will be null
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1); // trigger a component redraw
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button type="button" onClick={incrementCounter}>increment</button>
    </div>
  );
}
```

# It's time to write a Wine component

Let's write a nice component that will display details of a wine. This wine will be provided as a property.

First let's just display its name

```jsx
import { shape, string } from 'prop-types';

const Wine = ({ wine }) => {
  return (
    <div className="card horizontal">   
      <div className="card-stacked">
        <div className="card-content">
          <h3>{wine.name}</h3>
        </div>
      </div>
    </div>
  )
}

Wine.propTypes = {
  wine: shape({
    name: string
  })
}

Wine.defaultProps = {
  wine: {
    name: "Some Wine"
  }
}

export default Wine;
```

To mount it just write something like

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import Wine from './Wine';

const wine = { name: 'Château Chevrol Bel Air' };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Wine wine={wine}/>);
```

Now it's up to you !!! let say a wine is an object like that

```json
{
  "id": "chevrol-bel-air",
  "name": "Château Chevrol Bel Air",
  "type": "Red",
  "appellation": {
    "name": "Lalande-de-Pomerol",
    "region": "Bordeaux"
  },
  "grapes": [
    "Cabernet Sauvignon",
    "Merlot",
    "Cabernet Franc"
  ]
}
```

and we want the component to look like the following HTML snippet

```html
<div class="card horizontal">
  <div class="card-stacked">
    <div class="card-content">
      <h3>Wine name</h3>
      <br/>
      <p><b>Appellation:</b> Wine appellation name</p>
      <p><b>Region:</b> Wine appellation region</p>
      <p><b>Color:</b> Wine type</p>
      <p><b>Grapes:</b> Wine grape 1, Wine grape 2</p>
    </div>
  </div>
</div>
```

# Adding likes

Now we are going to make the `<Wine />` component stateful. We are going to add a `like` button to count how many likes the wine gets

Let say the `<Wine />` component should now look like

```html
<div class="card horizontal">
  <div class="card-stacked">
    <div class="card-content">
      <h3>Wine name</h3>
      <br/>
      <p><b>Appellation:</b> Wine appellation name</p>
      <p><b>Region:</b> Wine appellation region</p>
      <p><b>Color:</b> Wine type</p>
      <p><b>Grapes:</b> Wine grape 1, Wine grape 2</p>
    </div>
    <div class="card-action">
      <a class="waves-effect waves-teal btn-flat">
        <span>Like <i className="material-icons left">thumb_up</i> (42)</span>
      </a>
   </div>
  </div>
</div>
```

To achieve that, you will create a new component called `<LikeButton />` with the following contract

```jsx
import { number } from 'prop-types';

const LikeButton = ({ startCounterAt }) => {
  //...
}

LikeButton.propTypes = {
  startCounterAt: number.isRequired
};

export default LikeButton;
```

the `<LikeButton />` component will have a state to hold the number of likes for the button and a click listener to increment the like counter.

# What's next

Now you're ready to write the Wine application. Go to the [next step](./2-the-wine-app.md) to start writing it.
