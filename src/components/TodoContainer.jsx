import { useState } from 'react';
import CreateTodoForm from './CreateTodoForm';
import StatusFilter from './StatusFilter';
import TodoItem from './TodoItem';
import { ItemGroup } from './ui/item';
import { useEffect } from 'react';
import axios from 'axios';

export default function TodoContainer() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get('http://localhost:3000/todos');
        setTodos(res.data);
      } catch (error) {}
    };

    fetchTodos();
  }, []);

  return (
    <div className="">
      <CreateTodoForm />
      <div className="flex justify-between items-center mt-8 mb-4">
        <StatusFilter />
        <span className="text-muted-foreground text-sm">2 task left</span>
      </div>
      <ItemGroup>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ItemGroup>
    </div>
  );
}
