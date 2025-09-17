export type Note = {
  id: string;
  title: string;
  content: string;
  folderId?: string | null;
  createdAt: number;
  updatedAt: number;
  pinned?: boolean;
  color?: string | null;
};

export type Folder = {
  id: string;
  name: string;
  color?: string | null;
  createdAt: number;
  updatedAt: number;
};
