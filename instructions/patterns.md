# Classic patterns with React

## Component styling

There are several way to style a component. It's quite a challenge to encapsulate style for a component but also allow customization.

### Classic styling

You can style your components using the classic `class` attribute. In React, it's translated to the `className` property.

```jsx
<div className="a-class">...</div>
```

You can use multiple classes

```jsx
<div className="a-class another-class">...</div>
```

You can use some tricks to add classes conditionally

```jsx
<div className={[condition1 ? 'a-class' : '', !condition1 ? 'another-class' : ''].join(' ')}>...</div>
```

But there is a lib to add classes conditionally

```jsx
import classNames from "classnames";
<div className={classNames('a-class', { ['another-class']: !condition1 })}>...</div>
```

### Style a component with a css file living next to the component (recommended)

Using webpack, it's pretty easy to inject CSS parts inside a javascript file

```css
.MyComponent-root-style {
  color: red;
  background-color: blue;
}
```

```jsx
import React, { Component } from 'react';
import './MyComponent.css';  // inject css (using webpack)

export class MyComponent extends Component {
  
  render() {
    return (
      <div className="MyComponent-root-style">...</div>
    );
  }
}
```

### Style a component with inline styling

React let you write inline style pretty easily

```jsx
import React, { Component } from 'react';

const Styles = {
  myComponent: {
    color: 'red',
    backgroundColor: 'blue',
    height: 42 // implicit conversion to '42px',
    width: '100%'
  },
  ...
};

export const MyComponent = () => {
  return (
    <div style={Styles.myComponent}>...</div>
  );
}
```

## Conditional display of components

if you want to display component conditionally, you can use truthy/falsy trick

```jsx
export const MyComponent = () => {
  return (
    <div>
      {loading && (
        <h2>Loading ...</h2>
      )}
      {!loading && (
        <h2>Loaded</h2>
      )}
    </div>
    );
}
```

## Add props on `props.children`

sometimes you want to write a component that will render its children, but you'd like to add some props to the children.
It's quite useful with `react-router` for instance. To do that your can use `React.cloneElement`

```jsx
export const MyComponent = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.children && React.cloneElement(props.children, {
        newProps: 'new prop value'
      })}
    </div>
  );
}
```

## Loading data from an HTTP services

If you want to fetch some data when a component is mounted to the dom

```jsx
export const MyComponent = () => {
  const [location, setLocation] = useState(null);
  
  useEffect(() => {
    // here we load the data only when the component is mounted into the DOM
    fetch('https://freegeoip.net/json/')
      .then(r => r.json())
      .then(location => setLocation(location));
  }, []);

  return (
    <div>
      {!location && (
        <h2>Loading ...</h2>
      )}
      {location && (
        <pre>{JSON.stringify(location, null, 2)}</pre>
      )}
    </div>
  );
};
```

## Binding a text input

```jsx
export const MyComponent = () => {
  const [content, setContent] = useState('');

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const sendContent = () => {
    // do whatever you want with content
    // ...
    // then clear it
    setContent('');
  };

  return (
    <div>
      <input type="text" value={content} onChange={onChange} />
      <button type="button" onClick={sendContent}>Send content</button>
    </div>
  );
}
```
