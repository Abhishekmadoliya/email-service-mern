import React from 'react'
import Login from './components/Login'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import './app.css'
import Signup from './components/Signup'
import Homepage from './components/Homepage'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
