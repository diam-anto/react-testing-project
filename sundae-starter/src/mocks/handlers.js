import { http, HttpResponse } from 'msw'
 
export const handlers = [
  // Intercept the "GET /resource" request.
  http.get('http://localhost:3030/scoops', () => {
    // And respond with a "text/plain" response
    // with a "Hello world!" text response body.
    return HttpResponse.json([
        {
            name: "Chocolate",
            imagePath: "/images/chocolate.png",            
        },
        {
            name: "Vanilla",
            imagePath: "/images/vanilla.png",            
        },
    ])
  }),

  http.get('http://localhost:3030/toppings', () => {
    // And respond with a "text/plain" response
    // with a "Hello world!" text response body.
    return HttpResponse.json([
        {
            name: "Cherries",
            imagePath: "/images/cherries.png",            
        },
        {
            name: "M&Ms",
            imagePath: "/images/m-and-ms.png",            
        },
        {
          name: "Hot fudge",
          imagePath: "/images/hot-fudge.png",            
        },
    ])
  }),
]