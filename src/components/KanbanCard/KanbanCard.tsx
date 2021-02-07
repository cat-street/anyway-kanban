import { FC, ReactNode } from 'react';
import Card from 'react-bootstrap/Card';
import { CardText } from 'react-bootstrap-icons';
import './KanbanCard.css';

type KanbanCardProps = {
  text?: string;
  info?: string;
  children?: ReactNode;
};

const KanbanCard: FC<KanbanCardProps> = ({
  text,
  info,
  children,
}: KanbanCardProps) => (
  <Card className="kanban-card d-flex flex-row p-2 justify-content-between align-items-center">
    <div className="align-self-start">
      <p className="kanban-card__text d-flex align-items-center mb-2">
        <CardText className="mr-2" />
        {text}
      </p>
      {info && <p className="kanban-card__info ml-4 my-0 text-muted">{info}</p>}
    </div>
    {children}
  </Card>
);

export default KanbanCard;
