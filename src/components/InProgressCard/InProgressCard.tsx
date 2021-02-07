import { FC, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import KanbanCard from '../KanbanCard/KanbanCard';
import { CardProps } from '../../models/cardProps.model';
import formatTime from '../../utils/formatTime';

const InProgressCard: FC<CardProps> = ({
  id,
  text,
  onFinish,
}: CardProps) => {
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <KanbanCard text={text} info={formatTime(timer)}>
        <Button
          variant="success"
          className="m-2 mr-3"
          onClick={() => onFinish(id)}
        >
          Resolve
        </Button>
      </KanbanCard>
    </>
  );
};

export default InProgressCard;
