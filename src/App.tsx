import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import { CardText, Plus } from 'react-bootstrap-icons';
import './App.css';

const App: FC = () => (
  <Container className="p-4 min-vh-100 d-flex flex-column">
    <h6>Anyway Labs Test Project</h6>
    <p>Just some good deeds</p>
    <CardColumns className="flex-grow-1 d-flex align-items-stretch">
      <Card bg="light" className="m-0">
        <Card.Body className="p-2 d-flex flex-column">
          <h6 className="card-title d-flex align-items-center">
            <span className="badge rounded-pill bg-secondary mr-2">2</span>
            To do
          </h6>
          <Card className="d-flex flex-row p-2 justify-content-between align-items-center">
            <div className="align-self-start d-flex align-items-center">
              <CardText className="mr-2" />
              Build a house
            </div>
            <Button size="sm" variant="primary" className="m-2">
              Start
            </Button>
          </Card>
          <Card className="d-flex flex-row p-2 justify-content-between align-items-center">
            <span className="align-self-start">Build a house</span>
            <Button size="sm" variant="primary" className="m-2">
              Start
            </Button>
          </Card>
          <Button
            size="sm"
            variant="outline-dark"
            className="my-3 mx-auto d-flex align-items-center"
          >
            <Plus size={24} />
            <span>New task</span>
          </Button>
        </Card.Body>
      </Card>
      <Card bg="light" className="m-0">
        <Card.Body className="p-2">
          <Card.Title>To Do</Card.Title>
          <Card className="d-flex flex-row p-2 justify-content-between align-items-center">
            <div>
              <div className="align-self-start d-flex align-items-center">
                <CardText className="mr-2 mt-1 align-self-start" />
                <div>
                  <p>Build a house</p>
                  <p className="m-0">00:08:43</p>
                </div>
              </div>
            </div>
            <Button size="sm" variant="success" className="m-2">
              Resolve
            </Button>
          </Card>
        </Card.Body>
      </Card>
      <Card bg="light" className="m-0">
        <Card.Body className="p-2">
          <Card.Title>To Do</Card.Title>
          <Card className="d-flex flex-row p-2 justify-content-between align-items-center">
            <div>
              <p>Build a house</p>
              <p className="m-0">$5.15</p>
            </div>
          </Card>
        </Card.Body>
      </Card>
    </CardColumns>
  </Container>
);

export default App;
