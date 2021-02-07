import { FC } from 'react';
import InProgressCard from '../InProgressCard/InProgressCard';
import KanbanColumn from '../KanbanColumn/KanbanColumn';
import KanbanColumnTitle from '../KanbanColumnTitle/KanbanColumnTitle';
import SectionProps from '../../models/sectionProps.model';

const InProgress: FC<SectionProps> = ({ list, onFinish }: SectionProps) => (
  <KanbanColumn>
    <KanbanColumnTitle count={list.length} title="In Progress" />
    {list.map((task) => (
      <InProgressCard
        key={`${task.id}${task.name}`}
        id={task.id}
        text={task.name}
        date={task.date}
        onFinish={onFinish}
      />
    ))}
  </KanbanColumn>
);

export default InProgress;
