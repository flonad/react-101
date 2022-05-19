# Connect the app with the Wine API

## The Wine API

For this step you'll need to fetch some data to feed your app. You will use the API exposed at `https://wines-api.herokuapp.com`.

The URL you need are the following

* `GET https://wines-api.herokuapp.com/api/regions` => returns an array of regions (string)
* `GET https://wines-api.herokuapp.com/api/wines?region=:region` => returns an array of wines
* `GET https://wines-api.herokuapp.com/api/wines/:id` => returns a wine

The HTTP client you will use is `fetch`. It's the standard way to fetch data over http in the browser without an additional library. There is also the `axios` library which is commonly used. 

You can find some doc about `fetch` here

* https://www.npmjs.com/package/whatwg-fetch
* https://fetch.spec.whatwg.org/
* https://github.github.io/fetch/
* https://github.com/github/fetch
* https://fr.reactjs.org/docs/faq-ajax.html

**WARNING**: `fetch` makes heavy usage of Javascript `Promise`. You can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## How to start

First, write a new module to expose all the methods to fetch data from the Open Wine Database API. The module will look something like that. Usually, all the api calls are gathered in a folder named `services`. Then we can put calls for different api in separate files but for our case, we only need one file. 

```javascript
export const fetchRegions = () => {
  return fetch(`https://wines-api.herokuapp.com/api/regions`).then(r => r.json());
}

export const fetchWinesFrom = (region) => {
  // ...
}

export const fetchWine = (id) => {
  // ...
}
```

then, add new functions on the `<WineApp />` component to call that module and mutate the `<WineApp />` state.

```jsx
import { useEffect } from 'react';
import { fetchRegions, fetchWinesFrom, fetchWine } from '../services/wines';

const WineApp = () => {
  // ...

  useEffect(() => {
    // load regions and maybe wines from the initial region
  }, []);

  const onSelectRegion = (region) => {
    // load wines from the selected region
  };

  const onSelectWine = (id) => {
    // load wine details from wine id
  };

  return (
    // ...
  )
}
```

Now, just pass the data from the state and useful functions to the child components, add the right event listeners on elements, and it should be good.

Your app should work just like that

<img src='https://github.com/react-bootcamp/react-101/raw/master/instructions/img/appworking.gif' width='800' alt='First run'>

# What's next

Now you're ready to add support of likes to the Wine application. Go to the [next step](./4-handle-likes.md) to start writing it.
