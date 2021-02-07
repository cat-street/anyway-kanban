import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Plus } from 'react-bootstrap-icons';
import TodoCard from '../TodoCard/TodoCard';
import KanbanColumn from '../KanbanColumn/KanbanColumn';
import KanbanColumnTitle from '../KanbanColumnTitle/KanbanColumnTitle';
import SectionProps from '../../models/sectionProps.model';
import NewTaskCard from '../NewTaskCard/NewTaskCard';

const Todo: FC<SectionProps> = ({ list, onAdd, onStart }: SectionProps) => {
  const [showNewTaskCard, setNewTaskCard] = useState<boolean>(false);

  return (
    <KanbanColumn>
      <KanbanColumnTitle count={list.length} title="To do" />
      {list.map((task) => (
        <TodoCard
          key={`${task.id}${task.name}`}
          id={task.id}
          text={task.name}
          onStart={onStart}
        />
      ))}
      {showNewTaskCard && (
        <NewTaskCard onAdd={onAdd} showCard={setNewTaskCard} />
      )}
      <Button
        size="sm"
        variant="outline-dark"
        className="my-3 mx-auto d-flex align-items-center"
        onClick={() => setNewTaskCard(true)}
      >
        <Plus size={24} />
        <span>New task</span>
      </Button>
    </KanbanColumn>
  );
};

export default Todo;
