import { FC, ReactNode } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './KanbanColumn.css';

type KanbanColumnProps = {
  children: ReactNode;
};

const KanbanColumn: FC<KanbanColumnProps> = ({ children }: KanbanColumnProps) => (
  <Col className="px-0 mb-3" md={12} lg={4}>
    <Card bg="light" className="column-content h-100">
      <Card.Body className="p-2 d-flex flex-column">{children}</Card.Body>
    </Card>
  </Col>
);

export default KanbanColumn;
