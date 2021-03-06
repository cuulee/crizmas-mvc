import React from 'react';
import {Link} from 'crizmas-router';

import Logo from 'js/components/logo';
import Api from 'js/components/api';
import Ticks from 'js/components/ticks';

export default () => <div>
  <h2><Logo text="crizmas-form" /> - API</h2>

  <p>Make sure you check the <Link to="/form">getting started</Link> and <Link
  to="/form/theory">theory</Link> sections before jumping into API details.</p>

  <Api id="Form" text={`
    import Form from 'crizmas-form';
    // in ES5, Form is window.crizmas.Form

    const form = new Form({
      preventInputPendingBlocking: true,
      preventPendingBlocking: true,

      children: [
        {
          name: 'x',
          initialValue: 3
        },
        {
          name: 'y',
          clearValue: '',

          getValue() {
            return model.y;
          },

          setValue(value) {
            model.setY(value);
          },

          validate({event}) {
            if (event === 'submit') {
              return model.validateY();
            }
          }
        }
      ],

      init() {
        console.log('input created');
      },

      onFormChange() {
        console.log('an input changed');
      },

      actions: {
        submit() {
          console.log('result', form.getResult());
        },

        clear() {
          console.log('clearing');
        },

        reset() {
          console.log('resetting');
        },

        anotherAction() {
          console.log('another action');
        }
      }
    });
  `} />

  <ul className="simple-list">
    <li>An input configuration can contain a name, initialValue, getValue, setValue,
    validate, clearValue, init, onFormChange, preventInputPendingBlocking, preventPendingBlocking,
    an actions object and a children array of configuration objects.</li>
    <li>None of the options is required.</li>
    <li>Whenever a function from the form config is called, it's called as a method
    of an input (event if it's not necessarily an input method).</li>
    <li>init is called when the input is created.</li>
    <li>If clearValue is provided it's used when clearing the input.</li>
    <li>If preventInputPendingBlocking is true, the isPendingBlocked property doesn't
    depend on the isInputPending property.</li>
    <li>If preventPendingBlocking is true, the isPendingBlocked property doesn't
    depend on the isPending property.</li>
    <li>Triggers the validation with the init event and root as target.</li>
  </ul>

  <Api id="input.name" text="input.name" />

  <ul className="simple-list">
    <li>The name of the input.</li>
  </ul>

  <Api id="input.value" text="input.value" />

  <ul className="simple-list">
    <li>The value of the input.</li>
    <li>It exists only if <Ticks text="getValue" /> and <Ticks text="setValue" /> aren't
    passed in the configuration.</li>
  </ul>

  <Api id="input.initialValue" text="input.initialValue" />

  <ul className="simple-list">
    <li>The initial value of the input.</li>
    <li>If it's not passed in the configuration, it's set by calling <Ticks text="getValue" />.
    If getValue is not passed in the configuration, it's undefined.</li>
  </ul>

  <Api id="input.children" text="input.children" />

  <ul className="simple-list">
    <li>The input's array of children.</li>
  </ul>

  <Api id="input.parent" text="input.parent" />

  <ul className="simple-list">
    <li>The input's parent input.</li>
  </ul>

  <Api id="input.root" text="input.root" />

  <ul className="simple-list">
    <li>The root input of the tree that the input is part of.</li>
  </ul>

  <Api id="input.isDirty" text="input.isDirty" />

  <ul className="simple-list">
    <li>This is true if the current value is different from the initial value or
    if any of the input's children is dirty.</li>
  </ul>

  <Api id="input.isTouched" text="input.isTouched" />

  <ul className="simple-list">
    <li>This is true if the input was interacted with (by calling the onChange method
    or the onBlur method) or if a child has been touched.</li>
  </ul>

  <Api id="input.isSubmitted" text="input.isSubmitted" />

  <ul className="simple-list">
    <li>This is true if the input has been submitted.</li>
  </ul>

  <Api id="input.isInputPending" text="input.isInputPending" />

  <ul className="simple-list">
    <li>This is true after onStartPending was called and before onChange was called.</li>
    <li>It's also true as long as any child is input pending.</li>
    <li>It's useful if you want to prevent submitting a form with debounced input changes.</li>
  </ul>

  <Api id="input.hasErrors" text="input.hasErrors" />

  <ul className="simple-list">
    <li>This is true while the input or any of its children has errors.</li>
  </ul>

  <Api id="input.errors" text="input.errors" />

  <ul className="simple-list">
    <li>This is an array that contains the input's errors and the children's errors.</li>
    <li>If there are no errors, it's null.</li>
  </ul>

  <Api id="input.actions" text="input.actions" />

  <ul className="simple-list">
    <li>The actions object that is passed in the configuration.</li>
    <li>It is observed.</li>
    <li>It can contain a submit method, that is called when <Ticks
    text="input.submit" /> is called.</li>
    <li>It can contain a clear method, that is called when <Ticks
    text="input.clear" /> is called.</li>
    <li>It can contain a reset method, that is called when <Ticks
    text="input.reset" /> is called.</li>
    <li>It can contain other methods as well that can be used as handlers
    for certain buttons in the view.</li>
  </ul>

  <Api id="input.pending" text="input.pending" />

  <ul className="simple-list">
    <li>The input is an observed object.</li>
    <li>If needed this can be used to disable an input with async validation.</li>
  </ul>

  <Api id="input.isPending" text="input.isPending" />

  <ul className="simple-list">
    <li>The input is an observed object.</li>
    <li>If needed this can be used to disable an input with async validation.</li>
  </ul>

  <Api id="input.isPendingBlocked" text="input.isPendingBlocked" />

  <ul className="simple-list">
    <li>This is true if the input is pending or it's input pending.</li>
    <li>If the preventInputPendingBlocking option is true in the configuration then
    isPendingBlocked doesn't depend on isInputPending.</li>
    <li>If the preventPendingBlocking option is true in the configuration then
    isPendingBlocked doesn't depend on isPending.</li>
    <li>If it's true it prevents resetting and clearing the input.</li>
  </ul>

  <Api id="input.isBlocked" text="input.isBlocked" />

  <ul className="simple-list">
    <li>This is true if the input has errors or it's pending blocked.</li>
    <li>If it's true it prevents submission.</li>
  </ul>

  <Api id="input.getValue" text="input.getValue()" />

  <ul className="simple-list">
    <li>This is an ignored version of the getValue option passed in the configuration,
    if it is passed. Otherwise, it's an ignored method that returns the input value.</li>
  </ul>

  <Api id="input.setValue" text="input.setValue(value)" />

  <ul className="simple-list">
    <li>The setValue option passed in the configuration if it exists or a method that
    sets the value property.</li>
  </ul>

  <Api id="input.onChange" text="input.onChange(value)" />

  <ul className="simple-list">
    <li>This should normally be called from the view.</li>
    <li>Calls setValue.</li>
    <li>Updates the input pending state.</li>
    <li>Updates the dirty state.</li>
    <li>Updates the touched state.</li>
    <li>Triggers the root validation with the change event and the input as target.</li>
    <li>Calls onFormChange of all ancestors (if it was passed in the configuration)
    in bottom-up order passing it an object with the target and the input (the ancestor).</li>
  </ul>

  <Api id="input.validate" text="input.validate({event, target})" />

  <ul className="simple-list">
    <li>The event is optional.</li>
    <li>The target defaults to the input.</li>
    <li>Calls the validate method of the children inputs. Performs the validation on the
    input by calling the validate method option from the configuration, passing it
    an object with the event, target and input. If any of the
    validation functions involved in this process returns a promise, the validate method
    returns a promise. The validation process updates the hasError and errors properties,
    either synchronously or asynchronously, when all the validation promises are settled.</li>
    <li>The input's errors array includes the children's errors.</li>
  </ul>

  <Api id="input.submit" text="input.submit(...args)" />

  <ul className="simple-list">
    <li>If the input is blocked, it does nothing.</li>
    <li>It validates the input with the submit event and itself as target.</li>
    <li>If the input is not blocked after validating and if there is a passed
    submit action, it calls the submit action passing it whatever arguments were passed
    to the submit method.</li>
  </ul>

  <Api id="input.getResult" text="input.getResult()" />

  <ul className="simple-list">
    <li>If there are no children, it returns the result of getValue.</li>
    <li>If the array children is empty, it returns an empty array.</li>
    <li>If all the children have a name, it return an object where for each
    child the name is the key and the value is <Ticks text="child.getResult()" />.</li>
    <li>If there is at least one child with no name, the result is an array
    of <Ticks text="child.getResult()" /> values.</li>
    <li>This method is ignored.</li>
  </ul>

  <Api id="input.onBlur" text="input.onBlur()" />

  <ul className="simple-list">
    <li>This should normally be called from the view.</li>
    <li>Updates the touched state.</li>
    <li>Triggers the root validation with the blur event and the input as target.</li>
  </ul>

  <Api id="input.onFormChange" text="input.onFormChange({target, input})" />

  <ul className="simple-list">
    <li>This is the onFormChange function from the configuration.</li>
    <li>Called when the input's onChange method is called or when a descendant's
    onChange method is called.</li>
    <li>Receives an object as argument with the target of the change event and itself as input.</li>
  </ul>

  <Api id="input.onStartPending" text="input.onStartPending()" />

  <ul className="simple-list">
    <li>This should normally be called from the view to indicate that a debounced onChange
    method will be called.</li>
    <li>Sets isInputPending of itself and of the ascendant inputs to true.</li>
  </ul>

  <Api id="input.get" text="input.get(name)" />

  <ul className="simple-list">
    <li>Returns the direct child of input whose name is name.</li>
    <li>This method is ignored.</li>
  </ul>

  <Api id="input.add" text="input.add(inputConfig)" />

  <ul className="simple-list">
    <li>Adds a new child input based on inputConfig.</li>
    <li>The resulted child input also becomes an observed child.</li>
    <li>Updates the input pending and dirty states based on the child's state.</li>
    <li>Triggers the root validation with the add event and the current input (not the child)
    as target.</li>
  </ul>

  <Api id="input.addChild" text="input.addChild(childInput)" />

  <ul className="simple-list">
    <li>Adds childInput as child.</li>
    <li>The child input also becomes an observed child.</li>
    <li>Updates the input pending and dirty states based on the child's state.</li>
    <li>Triggers the root validation with the add event and the current input (not the child)
    as target.</li>
  </ul>

  <Api id="input.remove" text="input.remove()" />

  <ul className="simple-list">
    <li>Removes the input from its parent.</li>
    <li>The input stops being an observed child of the parent.</li>
    <li>The input's parent becomes null and its root becomes the input itself.</li>
    <li>Updates the input pending and dirty states of the old ascendants.</li>
    <li>Triggers the old root validation with the remove event and the old parent input
    (not the current input) as target.</li>
  </ul>

  <Api id="input.removeChild" text="input.removeChild(childInput)" />

  <ul className="simple-list">
    <li>The same as <Ticks text="childInput.remove()" />.</li>
  </ul>

  <Api id="input.reset" text="input.reset()" />

  <ul className="simple-list">
    <li>If the input is pending blocked, it does nothing.</li>
    <li>Calls the reset method for each child.</li>
    <li>Calls setValue with its initial value.</li>
    <li>Sets isSubmitted and isTouched to false.</li>
    <li>Updates the dirty state.</li>
    <li>Triggers the root validation with the reset event and itself as target.</li>
    <li>If the input is not pending blocked after validating and if there is a passed
    reset action, it calls the reset action.</li>
  </ul>

  <Api id="input.clear" text="input.clear()" />

  <ul className="simple-list">
    <li>If the input is pending blocked, it does nothing.</li>
    <li>Calls the clear method for each child.</li>
    <li>If the clear value was passed, sets the initial value to the clear value.
    Otherwise, if its initial value is truthy, it sets it to null.</li>
    <li>Calls setValue with its initial value.</li>
    <li>Sets isSubmitted and isTouched to false.</li>
    <li>Updates the dirty state.</li>
    <li>Triggers the root validation with the clear event and itself as target.</li>
    <li>If the input is not pending blocked after validating and if there is a passed
    clear action, it calls the clear action.</li>
  </ul>

  <Api id="Form.asyncValidationError" text="Form.asyncValidationError" />

  <ul className="simple-list">
    <li>Asynchronous validations can return unhandled rejected promises. In that case
    the value of Form.asyncValidationError is used as an error message.
    We need to consider rejected promises as cases of validation errors because we can't
    know for sure if the field is indeed valid.
    The default value is 'Validation failed'. This can be set to a different value. It can also
    be set to a function, in which case its call result will be used. The function
    receives the rejection reason as an argument.</li>
  </ul>

  <Api id="Input" text={`
    const input = new Form.Input(config);
  `} />

  <ul className="simple-list">
    <li>The same as new Form(config) except that it doesn't do the initial validation.</li>
  </ul>

  <Api id="validation" text={`
    import Form, {validation} from 'crizmas-form';
    // in ES5, validation is window.crizmas.validation

    const form = new Form({
      validate: validation(...funcs)
    });
  `} />

  <ul className="simple-list">
    <li>Creates a validation function from more validation functions.</li>
    <li>It calls the functions one by one until there's a synchronous error result.</li>
    <li>If there are also asynchronous validation functions, their results will be awaited
    only if there's no synchronous error returned by the other functions.</li>
    <li>All the asynchronous functions are awaited (we cannot use <Ticks
    text="Promise.race" /> because it's possible that the first promise that is settled
    is not fulfilled with an error).</li>
  </ul>

  <Api id="validation.required" text="validation.required({messageFunc})" />

  <ul className="simple-list">
    <li>The configuration argument is optional.</li>
    <li>If the input has a value different from null, undefined and empty string,
    it returns null.</li>
    <li>If the event is submit or ((event is change or blur) and the target is the
    input itself) returns an error message.</li>
    <li>Otherwise it returns the current error message if there is one.</li>
    <li>The default error message is 'Required'. This can be overwritten by
    setting a validation.required.messageFunc default function, which can be
    overwritten by passing the messageFunc.</li>
  </ul>

  <Api id="validation.min" text="validation.min(minValue, {messageFunc})" />

  <ul className="simple-list">
    <li>The second object argument is optional.</li>
    <li>If the input value is less than minValue returns an error message.</li>
    <li>The default error message is `Minimum allowed is {'${minValue}'}`.
    This can be overwritten by
    setting a validation.min.messageFunc default function, which can be
    overwritten by passing the messageFunc.</li>
  </ul>

  <Api id="validation.max" text="validation.max(maxValue, {messageFunc})" />

  <ul className="simple-list">
    <li>The second object argument is optional.</li>
    <li>If the input value is greater than maxValue returns an error message.</li>
    <li>The default error message is `Maximum allowed is {'${minValue}'}`.
    This can be overwritten by
    setting a validation.max.messageFunc default function, which can be
    overwritten by passing the messageFunc.</li>
  </ul>

  <Api id="validation.minLength" text="validation.minLength(minLength, {messageFunc})" />

  <ul className="simple-list">
    <li>The second object argument is optional.</li>
    <li>If the input value is a string whose length is less than
    minLength returns an error message.</li>
    <li>The default error message is `Minimum allowed length is {'${minLength}'}`.
    This can be overwritten by
    setting a validation.minLength.messageFunc default function, which can be
    overwritten by passing the messageFunc.</li>
  </ul>

  <Api id="validation.maxLength" text="validation.maxLength(maxLength, {messageFunc})" />

  <ul className="simple-list">
    <li>The second object argument is optional.</li>
    <li>If the input value is a string whose length is greater than
    maxLength returns an error message.</li>
    <li>The default error message is `Maximum allowed length is {'${maxLength}'}`.
    This can be overwritten by
    setting a validation.maxLength.messageFunc default function, which can be
    overwritten by passing the messageFunc.</li>
  </ul>

  <Api id="validation.async" text="validation.async(promiseFunc, {events: [...events]})" />

  <ul className="simple-list">
    <li>promiseFunc must return a promise.</li>
    <li>The second object argument is optional.</li>
    <li>promiseFunc is called only if the target is the input itself and if the
    event is in the events list.</li>
    <li>The default events list consists only of 'change'.</li>
    <li>If promiseFunc is called, in progress validations triggered by promiseFunc
    are discarded.</li>
    <li>If promiseFunc is not called, if the value is the same as the old value,
    the old error is returned, if it exists. Otherwise null is returned.</li>
  </ul>
</div>;
