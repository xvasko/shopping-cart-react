import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Shop } from "./pages/Shop"
import { Cart } from "./pages/Cart"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Confirmation } from "./pages/Confirmation"

function App() {
  return <ShoppingCartProvider>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Shop />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/confirmation" element={<Confirmation />}/>
      </Routes>
    </Container>
  </ShoppingCartProvider>
}

export default App
