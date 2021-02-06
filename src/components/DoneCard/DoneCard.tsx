import { FC } from 'react';
import KanbanCard from '../KanbanCard/KanbanCard';
import { CardProps } from '../../models/cardProps.model';

const DoneCard: FC<CardProps> = ({ text, price }: CardProps) => (
  <KanbanCard text={text} info={price} />
);

export default DoneCard;
