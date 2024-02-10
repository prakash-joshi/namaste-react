import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedCard } from "../components/RestaurantCard";
import MOCK_DATA from "./mockData/resCardData.json"
import "@testing-library/jest-dom"

describe('RestaurantCard Test Cases', () => {

    it('should render RestaurantCard component with props data ', () => {
        render(<RestaurantCard resData={MOCK_DATA} />);
        const name = screen.getByText('Wow! Momo');
        // assertion
        expect(name).toBeInTheDocument();

    });

    it('should render Higher Order Component that returns RestaurantCard component with promoted Label', () => {
        // load the higher order component (HOC)
        const Component = withPromotedCard(RestaurantCard);
        // render the HOC 
        render(<Component resData={MOCK_DATA} />);
        const name = screen.getByText('Wow! Momo');
        // assertion
        expect(name).toBeInTheDocument();
    })

});