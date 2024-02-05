import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


describe("Header Test Cases", () => {

    it('should render Header component with a login button', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        // here the getByRole takes additional parameter which checks the name of button ie.Login
        const loginButton = screen.getByRole("button", { name: "Login" });

        // assertion 
        expect(loginButton).toBeInTheDocument();
    });

    it('should render Header component with a Cart Items 0', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        // in this case the exact text is matched to test if the count changes test  case fails
        const cartItems = screen.getByText("Cart 🛒 (0 items)");

        // assertion
        expect(cartItems).toBeInTheDocument();
    });

    it('should render Header component with a Cart Items', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        // in this case the text is matched against a regex to test only certain part of the text 
        // cart is passed as a regex
        const cartItems = screen.getByText(/Cart/);

        // assertion
        expect(cartItems).toBeInTheDocument();
    });

    it('should change Login to Logout on Click', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole('button', { name: "Login" });

        // simulate the onClick event for button click
        // we can create other events just like click as well
        fireEvent.click(loginButton);

        // test for the scenario after the click event here button name will change to  Logout
        const logoutButton = screen.getByRole('button', { name: "Logout" });

        // assertion
        expect(logoutButton).toBeInTheDocument();
    });

});