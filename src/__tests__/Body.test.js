import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "./mockData/resListBodyData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

// create a fake api callfor fetch scenario with the mock data
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

describe('Body Component Intergation Test Cases', () => {

    it('should search restaurant list for burgers text input', async () => {

        // use act(()=>{}) if we are using a fetch inn our component
        // make the test function async and wait the act fn
        await act(async () => render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        ));

        // test if search button exists
        const searchButton = screen.getByRole("button", { name: "Search" });
        expect(searchButton).toBeInTheDocument();

        // test no of restaurant cards before search
        const resCardsBeforeSearch = screen.getAllByTestId("restaurantCard");
        expect(resCardsBeforeSearch.length).toBe(9);

        // simulate search event
        const searchInput = screen.getByTestId("searchRestaurants");
        // create an event for search input text change
        fireEvent.change(searchInput, { target: { value: "burger" } });
        // create an event for serach button click
        fireEvent.click(searchButton);

        // test no of restaurant cards after search
        const resCardsAfterSearch = screen.getAllByTestId("restaurantCard");
        expect(resCardsAfterSearch.length).toBe(2);

    });

    it('should filter top rated restaurant', async () => {

        await act(async () => render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        ));

        const resCardsBeforeSearch = screen.getAllByTestId("restaurantCard");
        expect(resCardsBeforeSearch.length).toBe(9);

        const filterButton = screen.getByRole("button", { name: "Top Rated" });
        fireEvent.click(filterButton);

        const resCardAfterSearch = screen.getAllByTestId("restaurantCard");
        expect(resCardAfterSearch.length).toBe(2);

    });

});
