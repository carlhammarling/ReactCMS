import { it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";


describe('Footer', () => {
  it('should include a heading tag', () => {

    render(<Footer />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  it('should be a footer-element included', () => {
    render(<Footer />)
    const element = screen.getByTestId('footerTest')
    expect(element).toBeInTheDocument()
  })
})


