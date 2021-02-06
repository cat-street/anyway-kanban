import { FC } from 'react';
import DoneCard from '../DoneCard/DoneCard';
import KanbanColumn from '../KanbanColumn/KanbanColumn';
import KanbanColumnTitle from '../KanbanColumnTitle/KanbanColumnTitle';

const InProgress: FC = () => (
  <KanbanColumn>
    <KanbanColumnTitle count={2} title="Done" />
    <DoneCard text="Take out the trash" info="$5.15" />
    <DoneCard text="Walk the dog" info="$11.87" />
  </KanbanColumn>
);

export default InProgress;
