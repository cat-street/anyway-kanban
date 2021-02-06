import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import { Plus } from 'react-bootstrap-icons';
import TodoCard from '../TodoCard/TodoCard';
import KanbanColumn from '../KanbanColumn/KanbanColumn';
import KanbanColumnTitle from '../KanbanColumnTitle/KanbanColumnTitle';

const Todo: FC = () => (
  <KanbanColumn>
    <KanbanColumnTitle count={2} title="To do" />
    <TodoCard text="Build a house" />
    <TodoCard text="Plant a tree" />
    <Button
      size="sm"
      variant="outline-dark"
      className="my-3 mx-auto d-flex align-items-center"
    >
      <Plus size={24} />
      <span>New task</span>
    </Button>
  </KanbanColumn>
);

export default Todo;
