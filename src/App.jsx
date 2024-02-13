import React from 'react'
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Counter from './Counter';
import Bgcolor from './Bgcolor';
import PWgenerator from './PWgenerator';
import CurrencyConvertor from './CurrencyConvertor'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = "counter" element={<Counter/>}></Route>
          <Route path = "bgcolor" element={<Bgcolor/>}></Route>
          <Route path = "pwgenerate" element={<PWgenerator/>}></Route>
          <Route path = "currencyconvertor" element={<CurrencyConvertor/>}></Route>
        </Routes>
     </Router>  
    </div>
  )
}

export default App