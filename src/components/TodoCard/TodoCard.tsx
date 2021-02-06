import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import KanbanCard from '../KanbanCard/KanbanCard';
import { CardProps } from '../../models/cardProps.model';

const TodoCard: FC<CardProps> = ({ id, text, onStart }: CardProps) => (
  <KanbanCard text={text}>
    <Button
      size="sm"
      variant="primary"
      className="m-2"
      onClick={() => onStart(id)}
    >
      Start
    </Button>
  </KanbanCard>
);

export default TodoCard;
