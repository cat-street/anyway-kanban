import { FC, SyntheticEvent, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import KanbanCard from '../KanbanCard/KanbanCard';

interface NewTaskCardProps extends Record<string, any> {}

const NewTaskCard: FC<NewTaskCardProps> = ({
  onAdd,
  showCard,
}: NewTaskCardProps) => {
  const task = useRef<HTMLInputElement>(null);

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    if (task.current) {
      onAdd(task.current.value);
    }
    showCard(false);
  };

  return (
    <KanbanCard>
      <Form
        className="flex-grow-1 d-flex align-items-center"
        onSubmit={handleSubmit}
      >
        <Form.Control
          type="text"
          name="task"
          placeholder="Add a new task"
          ref={task}
        />
        <Button
          type="submit"
          variant="outline-primary"
          className="m-2 mr-3"
          onClick={() => onAdd}
        >
          Add
        </Button>
      </Form>
    </KanbanCard>
  );
};

export default NewTaskCard;
