import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import { Plus } from 'react-bootstrap-icons';
import TodoCard from '../TodoCard/TodoCard';
import KanbanColumn from '../KanbanColumn/KanbanColumn';
import KanbanColumnTitle from '../KanbanColumnTitle/KanbanColumnTitle';
import SectionProps from '../../models/sectionProps.model';

const Todo: FC<SectionProps> = ({ list, onAdd, onStart }: SectionProps) => (
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
    <Button
      size="sm"
      variant="outline-dark"
      className="my-3 mx-auto d-flex align-items-center"
      onClick={() => onAdd('Code a Kanban board')}
    >
      <Plus size={24} />
      <span>New task</span>
    </Button>
  </KanbanColumn>
);

export default Todo;
