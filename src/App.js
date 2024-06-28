//main component for rendering the todoList component
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import TodoList from './TodoList';
import { AuthProvider } from './AutoContext';
import ProtectedRoute from './ProtectedRoute';

const App = () => { 
  return (
      <Router>
        <AuthProvider>
          <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todolist" element={<ProtectedRoute><TodoList /></ProtectedRoute>} />
          </Routes>
        </AuthProvider>
      </Router>
  );
}

export default App;
