import { render, screen } from "../../../test-utils/testing-library-utils";
import OrderEntry from "../OrderEntry";
import { http, HttpResponse } from 'msw';
import { server } from "../../../mocks/server";

// put test.only(''..) in order to run only this one test
// and skip the others
// or test.skip to skip this test
test('handle errors for scoops and toppings', async () => {
    server.resetHandlers(
        http.get(
            'http://localhost:3030/scoops', () => {
                return new HttpResponse(null, {status: 500})
            }
        ),
        http.get(
            'http://localhost:3030/toppings', () => {
                return new HttpResponse(null, {status: 500})
            }
        )
    )
    const { container } = render(<OrderEntry />);

    // const alerts = await screen.findAllByRole('alert', { name: /An unexpected error occur. Please try again later./i});
    // const alerts = await screen.findAllByRole('alert'); this passes

    const alerts = await screen.findAllByText("An unexpected error occurred. Please try again later.");

    logRoles(container);

    expect(alerts).toHaveLength(2);
})