import './App.css';
import { CartProvider } from "./context/CartContext.jsx";
import AppContainer from './AppContainer.jsx';

function App() {
    return (
        <CartProvider>
            <AppContainer />
        </CartProvider>
    );
}

export default App;
