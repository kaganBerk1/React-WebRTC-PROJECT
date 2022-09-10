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


test('Login Page renders correctly',async () => {
    const { getAllByTestId,getByTestId, debug } = render(<LoginPage />, {wrapper: BrowserRouter})

    const mainDiv = getByTestId('main-div')
    expect(mainDiv).toBeInTheDocument()
})