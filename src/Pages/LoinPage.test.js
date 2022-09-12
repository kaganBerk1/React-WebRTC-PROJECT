import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import LoginPage from './LoginPage'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";


test('Login Page is renders correctly',async () => {
    const { getAllByTestId,getByTestId, debug } = render(<LoginPage />, {wrapper: BrowserRouter})
    const mainDiv = getByTestId('main-div')
    expect(mainDiv).toBeInTheDocument()
})

test('Try login Page',async () => {
    const { getAllByTestId,getByTestId, debug } = render(<LoginPage />, {wrapper: BrowserRouter})
    const email = getByTestId('email')
    const password = getByTestId('password')
    const button = getByTestId('button')

    userEvent.type(email, "admin3@admin.com")
    userEvent.type(password, "123456")
    userEvent.click(button)
    expect(global.window.location.pathname).toEqual('/home');


})