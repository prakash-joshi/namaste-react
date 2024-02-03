import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"

test('should load contact us component', () => {
    render(<Contact />);
    const heading = screen.getByRole('heading');
    // assertion
    expect(heading).toBeInTheDocument();
});

test('should load submit button inside contact component', () => {
    render(<Contact />);
    const submitButton = screen.getByText('Submit');
    // assertion
    expect(submitButton).toBeInTheDocument();
});

test('should load input field with placeholder Name', () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText('Name');
    // assertion
    expect(inputName).toBeInTheDocument();
});

test('should load 2 input boxes inside contact component', () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole('textbox');
    // assertion 
    // expect(inputBoxes.length).not.toBe(3);  // not keyword can be used before toBe() to test for negation 
    expect(inputBoxes.length).toBe(2);

});

