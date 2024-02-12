import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "./mockData/resMenuData.json";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});


describe("Integration Test: Add item to the Cart", () => {

    // Setup and Teardown
    beforeAll(() => {
        // executes before all testcases are executed in the describe block
    });
    afterAll(() => {
        // executes after all testcases are executed in the describe block
    });

    beforeEach(() => {
        // executes before each testcase is executed in the describe block
    });
    afterEach(() => {
        // executes after each testcase is executed in the describe block
    });
    
    test('should add item to the cart and clear cart', async () => {
        await act(async () => render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <RestaurantMenu />
                    <Header />
                    <Cart />
                </Provider>
            </BrowserRouter>
        ));

        ///Component RestaurantMenu
        // testCase: test if the recommended accordian exists in RestaurantMenu Component
        const resMenuAccordian = screen.getByText("Recommended (12)");
        expect(resMenuAccordian).toBeInTheDocument();

        //testCase: test expand the accordian and tset the no of fooditems in it
        fireEvent.click(resMenuAccordian);
        const menuItems = screen.getAllByTestId('foodItem');
        expect(menuItems.length).toBe(12);

        //testCase: test if each fofod items hava an add button to it
        const addToCartButtons = screen.getAllByRole("button", { name: "Add +" });
        expect(addToCartButtons.length).toBe(12);

        ///Component Header
        //testCase: test if the Cart on the Header component has 0 items
        const cartItemsBefore = screen.getByText("Cart 🛒 (0 items)");
        expect(cartItemsBefore).toBeInTheDocument();

        //testCase: test add item to the cart by clicking the fist addbutton on the accordian foodItems list
        fireEvent.click(addToCartButtons[0]);
        const cartItemsAfter = screen.getByText("Cart 🛒 (1 items)");
        expect(cartItemsAfter).toBeInTheDocument();

        ///Component Cart & RestaurantMenu
        //testCase: test if the added item is visible in Cart Page
        const selectedItemsInCart = screen.getAllByTestId('foodItem');
        expect(selectedItemsInCart.length).toBe(13);

        //testCase: test if the ClearCart functionality works
        const clearCartButton = screen.getByRole("button", { name: "Clear Cart" });
        fireEvent.click(clearCartButton);
        expect(screen.getAllByTestId('foodItem').length).toBe(12);

    });

});