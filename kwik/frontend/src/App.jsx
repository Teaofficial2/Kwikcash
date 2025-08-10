import React from "react";
import Dashboard from "./pages/Dashboard";
import Withdraw from "./pages/Withdraw";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-green-600">kwikcashñ</Link>
          <nav>
            <Link to="/" className="mx-2 text-gray-700 font-semibold">Dashboard</Link>
            <Link to="/withdraw" className="mx-2 text-gray-700 font-semibold">Withdraw</Link>
          </nav>
        </header>
        <main className="max-w-xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/withdraw" element={<Withdraw />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;