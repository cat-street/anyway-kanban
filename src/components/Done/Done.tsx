import { FC } from 'react';
import DoneCard from '../DoneCard/DoneCard';
import KanbanColumn from '../KanbanColumn/KanbanColumn';
import KanbanColumnTitle from '../KanbanColumnTitle/KanbanColumnTitle';
import SectionProps from '../../models/sectionProps.model';

const InProgress: FC<SectionProps> = ({ list }: SectionProps) => (
  <KanbanColumn>
    <KanbanColumnTitle count={list.length} title="Done" />
    {list.map((task) => (
      <DoneCard
        key={`${task.id}${task.task}`}
        id={task.id}
        text={task.task}
        date={task.date}
        finished={task.finished}
      />
    ))}
  </KanbanColumn>
);

export default InProgress;
