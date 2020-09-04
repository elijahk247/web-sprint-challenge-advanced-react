import React, { useState } from "react";

// importing the custom hook
import { useForm } from '../hooks/useForm'

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  //const [values, setValues] = useState(initialValue);

  const [firstName, setFirstName, handleFirstName] = useForm('firstName', '')
  const [lastName, setLastName, handleLastName] = useForm('lastName', '')
  const [address, setAddress, handleAddress] = useForm('address', '')
  
  const [city, setCity, handleCity] = useForm('city', '')
  const [state, setState, handleState] = useForm('state', '')
  const [zip, setZip, handleZip] = useForm('zip', '')

  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            //value={values.firstName}
            //onChange={handleChanges}
            value={firstName}
            onChange={e => handleFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            //value={values.lastName}
            //onChange={handleChanges}
            value={lastName}
            onChange={e => handleLastName(e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            //value={values.address}
            //onChange={handleChanges}
            value={address}
            onChange={e => handleAddress(e.target.value)}
          />
        </label>
        <label>
          City:
          <input 
            name="city" 
            //value={values.city} 
            //onChange={handleChanges} 
            value={city}
            onChange={e => handleCity(e.target.value)}
          />
        </label>
        <label>
          State:
          <input 
            name="state" 
            //value={values.state} 
            //onChange={handleChanges} 
            value={state}
            onChange={e => handleState(e.target.value)}
          />
        </label>
        <label>
          Zip:
          <input 
            name="zip" 
            //value={values.zip} 
            //onChange={handleChanges} 
            value={zip}
            onChange={e => handleZip(e.target.value)}
          />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {/*values.firstName} {values.lastName*/}
            {firstName} {lastName}
          </p>
          <p>{/*values.address*/} {address}</p>
          <p>
            {/*values.city}, {values.state} {values.zip*/}
            {city}, {state} {zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
