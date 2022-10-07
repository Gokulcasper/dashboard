import './App.css';
import Dashboard from './pages/Dashboard';
import Manage from './pages/Manage';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Manage />} />
          <Route path='/report' element={< Dashboard />} />

        </Routes>
      </BrowserRouter>

      {/* <Dashboard />
      <Manage /> */}
    </div>
  );
}

export default App;
