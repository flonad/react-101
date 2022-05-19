# Integrate a third-party library

Here we are going to use the modal component from [Material UI](https://mui.com/material-ui/react-dialog/) to add comments on a wine

When you need to choose a library, you can use [npm trends](https://www.npmtrends.com/) to see which is the most used. It can help you choose and see if some libraries are not used anymore.
For example, you can compare different UI libraries : https://www.npmtrends.com/antd-vs-react-bootstrap-vs-@mui/material

## The Wine API

For this step you'll need to add `comments` to the API exposed at `https://wines-api.herokuapp.com`.

The URL you need are the following

* `POST https://wines-api.herokuapp.com/api/wines/:id/comments` => add a comment on the wine

Obviously, you'll need to add the following functions to the module responsible for calling the API

```javascript
export const commentWine = (id, content) => {
  return fetch(`${host}/api/wines/${id}/comments`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: 'The title', content })
  });
}
```

## The `<CommentButton />` component

The comment button is a very simple component, its only job is to trigger the `<CommentModal />` component opening through a function call

The contract of `<CommentButton />` is the following

```javascript
const CommentButton = ({ openCommentModal }) => {
  // ...
}
```

the view of `<CommentButton />` component will look something like

```html
<a class="waves-effect waves-teal btn-flat">
  Comment <i class="material-icons left">comment</i>
</a>
```

## The `<CommentModal />` component

To use Material UI, we need to add the library (https://mui.com/material-ui/getting-started/installation/)

```shell
yarn add @mui/material @emotion/react @emotion/styled
```

The `<CommentModal />` component is a modal from Material UI. This component will have an input text for the comment content and some buttons to validate or cancel the comment.

There is a FormDialog as an example in the [documentation](https://mui.com/material-ui/react-dialog/#form-dialogs). We can use it as a starting point of our CommentModal.

```jsx
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ isOpen, handleClose }) {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}
```

The view of our `<CommentModal />` component will look something like

```html
<div class="modal">
  <div class="modal-content">
    <h4>Tell us something about this wine</h4>
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input id="inputComment" type="text" class="validate"/>
          <label htmlFor="inputComment">Your comment</label>
        </div>
      </div>
    </form>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-action waves-effect waves-green btn-flat">Submit</a>
    <a href="#!" class="modal-action waves-effect waves-green btn-flat">Cancel</a>
  </div>
</div>
```

## What it should look like

And now your wine details component should look something like that

<img src='https://github.com/react-bootcamp/react-101/raw/master/instructions/img/addcomment.gif' width='800' alt='Add comment'>

# What's next

`react-101` is now over. See you soon for `react-102` ;-)
