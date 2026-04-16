import { Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import Home from './components/Home/Home';
import LinkedButton from './components/LinkedButton';
import ProductsHome from './components/Products/ProductsHome';
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import { AlertProvider } from "./context/alertContext";
import theme from "./theme/theme";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsHome />} />
          </Routes>
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider >
  );
}

export default App;
