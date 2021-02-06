import { KanbanItem } from './kanban.model';

interface SectionProps extends Record<string, any> {
  list: KanbanItem[];
}

export default SectionProps;
