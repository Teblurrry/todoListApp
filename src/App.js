//main component for rendering the todoList component
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import TodoList from './TodoList';
import { AuthProvider } from './AutoContext';
import ProtectedRoute from './ProtectedRoute';
import { Component } from 'react';

const App = () => { 
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Switch>
            <Route path="/register" Component={Register} />
            <Route path="/login" Component={Login} />
            <ProtectedRoute path="/todolist" component={TodoList} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
