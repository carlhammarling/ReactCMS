import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { it } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from '../Navbar'
import UserContextProvider from "../../../contexts/UserContext";

// We want to test the Navbar, since it is using the context "user" we need to put the navbar inside a "MockProvider"
const MockNavbar = () => {
    return (
        <UserContextProvider>
            <Navbar />
        </UserContextProvider>
    )
}


// Since we are using the new router we get a problem accessing the browser features.
// That means we also have to build up a fake createBrowserRouter
const MockRouter = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MockNavbar />
        }
    ])
    return (
        <RouterProvider router={router} />
    
    )
}

describe('Navbar', () => {
  it('should include a link tag', () => {

    render(<MockRouter />)
    const navlinks = screen.getAllByRole('link')
    expect(navlinks.length).toBeGreaterThan(2)
  })
})

