import { render, screen } from "../../../test-utils/testing-library-utils";
import Options from "../Options";

test("displays image for each scoop option from server", async () => {
    render(<Options optionType="scoops"/>);

    // find images
    // every time we use find we need to use await
    const scoopImages = await screen.findAllByRole('img', {name: /scoop$/i}); // $ means that scoop is at the end of the string
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
})

test("displays image for each topping option from server", async () => {
    render(<Options optionType="toppings"/>);

    const toppingImages = await screen.findAllByRole('img', { name: /topping$/i });
    expect(toppingImages).toHaveLength(3);

    const altText = toppingImages.map((element) => element.alt);
    expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']); 
})