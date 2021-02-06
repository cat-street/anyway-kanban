import { FC } from 'react';
import './KanbanColumnTitle.css';

type KanbanColumnTitleProps = {
  count: number;
  title: string;
};

const KanbanColumnTitle: FC<KanbanColumnTitleProps> = ({
  count,
  title,
}: KanbanColumnTitleProps) => (
  <h6 className="card-title d-flex align-items-center">
    <span className="kanban-column__counter badge rounded-pill text-muted mr-2">{count}</span>
    {title}
  </h6>
);

export default KanbanColumnTitle;
