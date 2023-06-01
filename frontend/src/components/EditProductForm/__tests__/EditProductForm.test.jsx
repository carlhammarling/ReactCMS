import { getAllByRole, render, screen } from '@testing-library/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { describe, it, vi } from 'vitest'
import EditProductForm from '../EditProductForm'
import UserContextProvider from '../../../contexts/UserContext'


const product = {
 name: 'product1'
}


//Empty function
const setShowInputs = vi.fn()

const MockForm = () => {
    return (
    <UserContextProvider>
        <EditProductForm product={product} setShowInputs={setShowInputs} />
    </UserContextProvider>
    )
}

const MockRouter = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <MockForm />
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}

describe('EditProductForm', () => {
    it('Should change the value when updated', () => {
        render(<MockRouter />)
        const buttons = screen.getAllByRole('button')
        expect(buttons.length).toBeGreaterThan(1)
    })

    it('Should change the value in the input', () => {
        render(<MockRouter />)
        const input = screen.getByTestId('input')
        expect(input.value).toBe('product1')
    })
})