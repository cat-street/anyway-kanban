import { FC } from 'react';
import InProgressCard from '../InProgressCard/InProgressCard';
import KanbanColumn from '../KanbanColumn/KanbanColumn';
import KanbanColumnTitle from '../KanbanColumnTitle/KanbanColumnTitle';

const InProgress: FC = () => (
  <KanbanColumn>
    <KanbanColumnTitle count={1} title="In Progress" />
    <InProgressCard text="Go to grocery" info="00:08:43" />
  </KanbanColumn>
);

export default InProgress;
