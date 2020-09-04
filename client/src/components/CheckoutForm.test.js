import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import CheckoutForm from "./CheckoutForm";
import { useForm } from '../hooks/useForm';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  // arrange
  const container = render(<CheckoutForm />);
  console.log(container)

  // act
  const header = screen.getByText(/checkout form/i)
  console.log(header)

  //assert
  expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
  // arrange
  const container = render(<CheckoutForm />)

  // should fail since the checkout button has not been clicked yet 

  // act
  //const success = screen.getByText(/your new green friends will be shipped to:/i)
  // assert 
  //expect(header).toBeInTheDocument()

  // act: fill out the information and submit the information; check if the information submitted is in the success field 
  const firstNameInput = screen.getByLabelText(/first name:/i)
  const lastNameInput = screen.getByLabelText(/last name:/i)
  const addressInput = screen.getByLabelText(/address:/i)

  const cityInput = screen.getByLabelText(/city:/i)
  const stateInput = screen.getByLabelText(/state:/i)
  const zipInput = screen.getByLabelText(/zip:/i)

  // firing event to fill out the form
  fireEvent.change(firstNameInput, { target: { value: 'Eli'}})
  fireEvent.change(lastNameInput, { target: { value: 'Kim'}})
  fireEvent.change(addressInput, { target: { value: '123 Example Address'}})

  fireEvent.change(cityInput, { target: { value: 'Atl'}})
  fireEvent.change(stateInput, { target: { value: 'GA'}})
  fireEvent.change(zipInput, { target: { value: '00000'}})

  // creating button and clicking submit 
  const checkOut = screen.getByText("Checkout")
  fireEvent.click(checkOut)

  // assertion: checking if the success message pops up 
  const success = screen.getByText(/your new green friends will be shipped to: /i)
  expect(success).toBeInTheDocument()
});
