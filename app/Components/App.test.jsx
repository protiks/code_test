import { render, screen } from '@testing-library/react'
import Home from "../page"

test('should show title', async () => {
    render(<Home />)
    screen.getByText('Quartr')
    screen.getByRole('button')
})
