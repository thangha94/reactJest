import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Control from './Control'

describe('Testing control component', () => {
    it('renders without crashing', () => {
        render(<Control />);
    })
    // Testing without Jest
    it('strike', () => {
        let expected = false;
        const { getByText } = render(<Control strike={() => expected = true} />);
        const strikeButton = getByText(/strike/i)
        fireEvent.click(strikeButton)
        expect(expected).toBe(true);
    })
    // Testing within Jest
    it('strike with jests', () => {
        const click = jest.fn()
        const { getByText } = render(<Control strike={click} />);
        const strikeButton = getByText(/strike/i)
        fireEvent.click(strikeButton)
        expect(click).toBeCalled()
    })
    it('strike with jests balls', () => {
        const click = jest.fn()
        const { getByText } = render(<Control ball={click} />);
        const strikeButton = getByText(/ball/i)
        fireEvent.click(strikeButton)
        expect(click).toBeCalled()
    })
    it('all buttons work', () => {
        const buttonText = ['strike', 'ball', 'foul', 'hit']
        const buttonFns = buttonText.map(() => jest.fn())
        const props = buttonText.reduce((acc, text, index) => ({ ...acc, [text]: buttonFns[index] }), {})
        const { getByText } = render(<Control {...props} />)
        const buttons = buttonText.map(text => getByText(new RegExp(text, 'i')))
        buttons.forEach((button, index) => {
            fireEvent.click(button)
            expect(buttonFns[index]).toBeCalled()
        })
    })
})