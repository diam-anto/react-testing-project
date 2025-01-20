import { OrderDetailsProvider } from "./contexts/OrderDetails";
import OrderEntry from "./pages/entry/OrderEntry";
import Container from "react-bootstrap/Container"

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry/>
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
