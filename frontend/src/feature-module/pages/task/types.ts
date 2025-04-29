export enum TaskStatus {
  TODO = 'TO DO',
  IN_PROGRESS = 'IN PROGRESS',
  REVIEW = 'REVIEW',
  DONE = 'DONE',
}

export interface User {
  user_id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar_url: string;
  is_verified: boolean
}

export interface Task {
  task_id: string;
  task_name: string;
  task_description: string;
  room_id: string;
  status: TaskStatus;
  assigner_id: string;
  assignee_id: string;
  created_at: string;
  updated_at: string;
}
  