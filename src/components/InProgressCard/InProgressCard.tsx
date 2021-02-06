import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import KanbanCard from '../KanbanCard/KanbanCard';
import { CardProps } from '../../models/cardProps.model';

const InProgressCard: FC<CardProps> = ({ text, info }: CardProps) => (
  <KanbanCard text={text} info={info}>
    <Button size="sm" variant="success" className="m-2">
      Resolve
    </Button>
  </KanbanCard>
);

export default InProgressCard;
