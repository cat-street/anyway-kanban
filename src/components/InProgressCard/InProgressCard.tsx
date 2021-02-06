import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import KanbanCard from '../KanbanCard/KanbanCard';
import { CardProps } from '../../models/cardProps.model';

const InProgressCard: FC<CardProps> = ({
  id,
  text,
  date,
  onFinish,
}: CardProps) => (
  <KanbanCard text={text} info={date}>
    <Button
      size="sm"
      variant="success"
      className="m-2"
      onClick={() => onFinish(id)}
    >
      Resolve
    </Button>
  </KanbanCard>
);

export default InProgressCard;
