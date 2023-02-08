/* eslint-disable no-unused-vars */
interface CommentProps {
  author: string;
  authorAvatar: string;
  body: string;
  parentId?: string;
  rootId: string;
  createdAt: Date;
  _id: string;
  ups: number;
  liked: boolean | null;
}
