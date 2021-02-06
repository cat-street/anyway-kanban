import { FC } from 'react';
import KanbanCard from '../KanbanCard/KanbanCard';
import { CardProps } from '../../models/cardProps.model';

const DoneCard: FC<CardProps> = ({ text, info }: CardProps) => (
  <KanbanCard text={text} info={info} />
);

export default DoneCard;
