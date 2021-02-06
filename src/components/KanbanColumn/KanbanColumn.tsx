import { FC, ReactNode } from 'react';
import Card from 'react-bootstrap/Card';

type KanbanColumnProps = {
  children: ReactNode;
};

const KanbanColumn: FC<KanbanColumnProps> = ({ children }: KanbanColumnProps) => (
  <Card bg="light" className="m-0">
    <Card.Body className="p-2 d-flex flex-column">{children}</Card.Body>
  </Card>
);

export default KanbanColumn;
