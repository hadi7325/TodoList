import { useState, useEffect } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Layout from "./Components/Layout";
import List from "./Components/List";


function App() {

  const [error, setError] = useState(null)
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  
  useEffect(()=>{
    const getTodos  = JSON.parse(localStorage.getItem('todos'))

    if(getTodos){
      setTodos(getTodos)
    }
  }, [])

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const addTodo = (e) => {
    e.preventDefault()

    if (todo.length <= 2) {
      setError("این فیلد نمیتواند خالی باشد (حداقل 3 کاراکتر)")
      return false;
    }


    setTodos([...todos, { id: Date.now(), title: todo, done: false }])
    setError(null)
    setTodo("")
  }



  const deletTodo = (id) => {
    if (window.confirm("ایا میخواهید حذف کنید ؟")) {
      const newTodos = todos.filter((item) => item.id !== id)
      setTodos(newTodos)
    }
  }
  const doneTodo = (id) => {
    const index = todos.findIndex((item) => item.id === id)
    const backupTodo = [...todos]
    backupTodo[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done
    }
    setTodos(backupTodo)

  }


  return (
    <div className="App">
      <Layout>
        <Header />
        <Form todo={todo} change={(e) => setTodo(e.target.value)} error={error} addTodo={addTodo} />
        <List doneTodo={doneTodo} deletTodo={deletTodo} todos={todos} />
      </Layout>
    </div>

  );
}

export default App;
