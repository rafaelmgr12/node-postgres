export interface ITaskDTO {
  id?: number;
  title: string;
  description?: string;
  completed?: boolean;
  updated_at?: Date;
}

export interface ICreateTaskDTO {
  title: string;
  description?: string;
}

export interface IUpdateTaskDTO {
  id: number;
  title: string;
  completed: boolean | false;
  description?: string;
}
