import { FC } from 'react';
import DoneCard from '../DoneCard/DoneCard';
import KanbanColumn from '../KanbanColumn/KanbanColumn';
import KanbanColumnTitle from '../KanbanColumnTitle/KanbanColumnTitle';
import SectionProps from '../../models/sectionProps.model';

const InProgress: FC<SectionProps> = ({ list }: SectionProps) => (
  <KanbanColumn>
    <KanbanColumnTitle count={2} title="Done" />
    {list.map((task) => (
      <DoneCard
        key={`${task.id}${task.name}`}
        id={task.id}
        text={task.name}
        price={task.price}
      />
    ))}
  </KanbanColumn>
);

export default InProgress;
