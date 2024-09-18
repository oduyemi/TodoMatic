import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Navigation } from "./navigation";

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Navigation />
    </div>
    </ChakraProvider>
  );
}

export default App;
