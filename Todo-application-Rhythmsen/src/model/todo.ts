// todo.model.ts
export interface Todo {
    id: number;
    userId: number;
    title: string;
    description?: string; 
    status: 'pending' | 'in_progress' | 'completed'; 
    priority: 'low' | 'medium' | 'high'; 
    createdAt: Date;
    updatedAt: Date;
  }
  
  export class TodoEntity implements Todo {
    id: number;
    userId: number;
    title: string;
    description?: string; 
    status: 'pending' | 'in_progress' | 'completed'; 
    priority: 'low' | 'medium' | 'high'; 
    createdAt: Date;
    updatedAt: Date;
  
    constructor(data: Todo) {
      this.id = data.id;
      this.userId = data.userId;
      this.title = data.title;
      this.description = data.description;
      this.status = data.status;
      this.priority = data.priority;
      this.createdAt = data.createdAt;
      this.updatedAt = data.updatedAt;
    }
  }