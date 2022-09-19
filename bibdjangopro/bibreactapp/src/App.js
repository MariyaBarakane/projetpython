import { Container } from 'react-bootstrap'
import { Routes, Route, HashRouter as Router } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'



function App() {
  return (
    <Router>
       <Header/>
         <main className="py-3">
          <Container>
            <Routes>
                <Route path="/" element={<HomeScreen />} exact />
                  <Route path="/product/:id" element={<ProductScreen/>}/>
           </Routes>
           </Container>
         </main>
         <Footer />
         </Router>
  );
}

export default App;
