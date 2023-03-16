export type CommentType = {
  _id: string;
  userId: string;
  foodId: string;
  title: string;
  message: string;
  date: Date;
  rate: number;
  isConfirmed: boolean;
};
