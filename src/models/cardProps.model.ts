export interface CardProps extends Record<string, any> {
  id: string;
  text: string;
  info?: string;
  date?: string;
  finished?: string;
}
