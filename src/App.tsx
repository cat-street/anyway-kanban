import { FC, useState } from 'react';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Todo from './components/Todo/Todo';
import InProgress from './components/InProgress/InProgress';
import Done from './components/Done/Done';
import { KanbanItem } from './models/kanban.model';
import hourPrice from './constants/hourPrice';
import './App.css';

const App: FC = () => {
  const [todo, setTodo] = useState<KanbanItem[]>([
    { id: '1', name: 'Build a house' },
    { id: '2', name: 'Plant a tree' },
    { id: '3', name: 'Go to grocery' },
  ]);
  const [inProgress, setInProgress] = useState<KanbanItem[]>([]);
  const [done, setDone] = useState<KanbanItem[]>([
    { id: '4', name: 'Take out the trash', price: '$5.15' },
    { id: '5', name: 'Walk the dog', price: '$11.87' },
  ]);

  const handleAddTask = (task: string) => {
    setTodo((prevState) => [
      ...prevState,
      {
        id: `_${Math.random().toString(36).substr(2, 9)}`,
        name: task,
      },
    ]);
  };

  const handleStartTask = (id: string) => {
    const date: Date = new Date();
    const task: KanbanItem = todo.find((el) => el.id === id)!;
    setTodo((prevState) => prevState.filter((el) => el.id !== id));
    setInProgress((prevState) => [...prevState, { ...task, date }]);
  };

  const calculatePrice = (startDate: Date): string => {
    const hours: number = (Date.now() - startDate.getTime()) / 1000 / 60 / 60;
    const price: string = `$${(hourPrice * hours).toFixed(2)}`;
    return price;
  };

  const handleFinishTask = (id: string) => {
    const task: KanbanItem = inProgress.find((el) => el.id === id)!;
    const price: string = calculatePrice(task.date!)!;
    setInProgress((prevState) => prevState.filter((el) => el.id !== id));
    setDone((prevState) => [...prevState, { ...task, price }]);
  };

  return (
    <Container className="app p-4 min-vh-100 d-flex flex-column">
      <h6>Anyway Labs Test Project</h6>
      <p className="text-muted">Just some good deeds</p>
      <CardColumns className="flex-grow-1 d-flex align-items-stretch">
        <Todo list={todo} onAdd={handleAddTask} onStart={handleStartTask} />
        <InProgress list={inProgress} onFinish={handleFinishTask} />
        <Done list={done} />
      </CardColumns>
    </Container>
  );
};

export default App;
