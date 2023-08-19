import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import About from './Components/about';
import AddTodo from './Components/AddTodo';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom';


function App() {

  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("delete clicked", todo);
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let serial = 0;
    if (todos.length > 0)
      serial = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: serial,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
  }

  let myVar = false;
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="Todos App" searchBar={myVar} />
        <Routes>
          <Route exact path="/" element=
          {<>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>} 
            />
          <Route exact path="/about" element={<About />} />
        
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
