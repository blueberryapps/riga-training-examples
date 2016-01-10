# Exercise 2:

The application:
It contains 4 components:
  – Homepage
  – Calculator
  – Registration
  – Confirmation

Calculator has a `onChange` prop that accepts a function. This function is invoked each time when the value in the calculator is changed. It receives one argument: an object containing `amount` and `term` properties with their new values.
The component accepts 2 props: `amount` and `term`.

Homepage just renders the calculator and save its values into its own state.

Registration contains a form. The contents of the form are saved into the component's state.

The Confirmation component is empty at the moment.

## Goal 1:
Use React Router to render the pages. Link from Homepage to Registration.
URLs (pathnames):
```
/                         -> Homepage
/registration             -> Registration
/application/confirmation -> Confirmation
```
You will need an `App` component that will render the appropriate child component.

## Goal 2:
After the form is sent to the server, redirect to Confirmation page.

## Goal 3:
Validate the personal ID field after submission of the Registration form.
If it is not valid, display error message next to the field.

## Goal 4:
Use Redux to capture the `amount` and `term` from Calculator.

## Goal 5:
Get the `amount` and `term` prop to the Registration form. Send it to the server.

## Goal 6:
Change the validation to work as the user is typing. For better UX, fire validation only if the user has previously `blur`ed the field.

## Goal 7:
Save the state of the registration form fields using Redux and a new reducer.

## Goal 8:
Give it some nice look and feel. You can bring some front-end CSS framework into the application (e.g. Bootstrap).
