import { useState, useEffect } from 'react';

const BASE_URL = 'https://my-server-an5n.onrender.com';

type Task = {
  id: number;
  title: string;
};

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}