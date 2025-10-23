import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
    it('renders ServiceMap Admin Portal heading', () => {
        render(<App />)
        expect(screen.getByText('ServiceMap Admin Portal1')).toBeInTheDocument()
    })
})
