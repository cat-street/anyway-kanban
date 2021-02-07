import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Plus } from 'react-bootstrap-icons';
import TodoCard from '../TodoCard/TodoCard';
import KanbanColumn from '../KanbanColumn/KanbanColumn';
import KanbanColumnTitle from '../KanbanColumnTitle/KanbanColumnTitle';
import SectionProps from '../../models/sectionProps.model';
import NewTaskCard from '../NewTaskCard/NewTaskCard';
import './Todo.css';

const Todo: FC<SectionProps> = ({ list, onAdd, onStart }: SectionProps) => {
  const [showNewTaskCard, setNewTaskCard] = useState<boolean>(false);

  return (
    <KanbanColumn>
      <KanbanColumnTitle count={list.length} title="To do" />
      {list.map((task) => (
        <TodoCard
          key={`${task.id}${task.task}`}
          id={task.id}
          text={task.task}
          onStart={onStart}
        />
      ))}
      {showNewTaskCard && (
        <NewTaskCard onAdd={onAdd} showCard={setNewTaskCard} />
      )}
      <Button
        variant="outline-dark"
        className="todo__new-task-button my-3 mx-auto pl-2 pr-3 d-flex align-items-center"
        onClick={() => setNewTaskCard(true)}
      >
        <Plus className="todo__plus-symbol" size={24} />
        <span>New task</span>
      </Button>
    </KanbanColumn>
  );
};

export default Todo;
