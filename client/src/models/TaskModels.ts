export interface TaskModel {
    taskId: number;
    name: string;
    content: string;
    startDate?: string | null;
    endDate?: string | null;
    createdAt: string;
    updatedAt: string;
  }
  