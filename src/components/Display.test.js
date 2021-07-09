import React from 'react'
import { render } from '@testing-library/react';
import Display from './Display';

describe('Testing Display Component:', () => {
    it('renders without crashing', () => {
        render(<Display />)
    })
    it('props work', () => {
        const display = render(<Display strikes={2} balls={3} />)
        display.getByText(/Strikes: 2/)
        display.getByText(/Balls: 3/)
    })
    it('Component is dumb', () => {
        const display = render(<Display strikes={-2} balls={400} />)
        display.getByText(/Strikes: -2/)
        display.getByText(/Balls: 400/)
    })
})