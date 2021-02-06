import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Todo from './components/Todo/Todo';
import InProgress from './components/InProgress/InProgress';
import Done from './components/Done/Done';
import './App.css';

const App: FC = () => (
  <Container className="app p-4 min-vh-100 d-flex flex-column">
    <h6>Anyway Labs Test Project</h6>
    <p className="text-muted">Just some good deeds</p>
    <CardColumns className="flex-grow-1 d-flex align-items-stretch">
      <Todo />
      <InProgress />
      <Done />
    </CardColumns>
  </Container>
);

export default App;
