import { FC, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Todo from './components/Todo/Todo';
import InProgress from './components/InProgress/InProgress';
import Done from './components/Done/Done';
import { KanbanItem } from './models/kanban.model';
import api from './utils/api';
import { apiRoutes } from './utils/config';
import './App.css';

const App: FC = () => {
  const [todo, setTodo] = useState<KanbanItem[]>([]);
  const [inProgress, setInProgress] = useState<KanbanItem[]>([]);
  const [done, setDone] = useState<KanbanItem[]>([]);

  const getInitialData = async () => {
    try {
      const kanbanData = await api.getData(apiRoutes.MAIN);
      setTodo(
        kanbanData.filter((el: Record<string, any>) => el.status === 'todo'),
      );
      setInProgress(
        kanbanData.filter((el: Record<string, any>) => el.status === 'progress'),
      );
      setDone(
        kanbanData.filter((el: Record<string, any>) => el.status === 'done'),
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  const handleAddTask = async (task: string) => {
    const id = `_${Math.random().toString(36).substr(2, 9)}`;
    try {
      const addTaskStatus = await api.postData(apiRoutes.MAIN, { id, task });
      if (addTaskStatus) {
        setTodo((prevState) => [
          ...prevState,
          {
            id,
            task,
          },
        ]);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  const handleStartTask = async (id: string) => {
    const date = new Date().toISOString();
    try {
      const startTaskStatus = await api.patchData(apiRoutes.START, {
        id,
        date,
        status: 'progress',
      });
      if (startTaskStatus) {
        const task: KanbanItem = todo.find((el) => el.id === id)!;
        setTodo((prevState) => prevState.filter((el) => el.id !== id));
        setInProgress((prevState) => [
          ...prevState,
          { ...task, date, status: 'progress' },
        ]);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  const handleFinishTask = async (id: string) => {
    const date = new Date().toISOString();
    try {
      const finishTaskStatus = await api.patchData(apiRoutes.FINISH, {
        id,
        date,
        status: 'done',
      });
      if (finishTaskStatus) {
        const task: KanbanItem = inProgress.find((el) => el.id === id)!;
        setInProgress((prevState) => prevState.filter((el) => el.id !== id));
        setDone((prevState) => [
          ...prevState,
          { ...task, finished: date, status: 'done' },
        ]);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  return (
    <Container fluid="lg" className="app pt-4 pb-1 min-vh-100 d-flex flex-column">
      <h5 className="app__header">Anyway Labs Test Project</h5>
      <p className="app__sub-header text-muted">Just some good deeds</p>
      <Row className="d-flex flex-grow-1 px-1">
        <Todo list={todo} onAdd={handleAddTask} onStart={handleStartTask} />
        <InProgress list={inProgress} onFinish={handleFinishTask} />
        <Done list={done} />
      </Row>
    </Container>
  );
};

export default App;
