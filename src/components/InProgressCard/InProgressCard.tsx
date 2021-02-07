import { FC, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import KanbanCard from '../KanbanCard/KanbanCard';
import { CardProps } from '../../models/cardProps.model';
import formatTime from '../../utils/formatTime';

const InProgressCard: FC<CardProps> = ({
  id,
  text,
  date,
  onFinish,
}: CardProps) => {
  const [timer, setTimer] = useState<number>(0);

  const setTime = (currentDate: string) => {
    const seconds = new Date(currentDate).getTime();
    const elapsed = (Date.now() - seconds) / 1000;
    setTimer(elapsed);
  };

  useEffect(() => {
    setTime(date!);
    const timerId = window.setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      window.clearInterval(timerId);
    };
  }, [date]);

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
