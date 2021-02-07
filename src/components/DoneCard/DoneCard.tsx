import {
  FC, useCallback, useEffect, useState,
} from 'react';
import KanbanCard from '../KanbanCard/KanbanCard';
import { CardProps } from '../../models/cardProps.model';
import hourPrice from '../../constants/hourPrice';

const DoneCard: FC<CardProps> = ({ text, date, finished }: CardProps) => {
  const [price, setPrice] = useState<string>('');

  const calculatePrice = useCallback(() => {
    const startSeconds = new Date(date!).getTime();
    const finishSeconds = new Date(finished!).getTime();
    const hours: number = (finishSeconds - startSeconds) / 1000 / 60 / 60;
    const total: string = `$${(hourPrice * hours).toFixed(2)}`;
    setPrice(total);
  }, [date, finished]);

  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  return (
    <KanbanCard text={text} info={price} />
  );
};

export default DoneCard;
