import { CreateTask, RemoveTask, Task, UpdateTask } from './interfaces/tasks';
import { apiUrl, getToken, successObject } from './utils';

export const createTask = async (
  title: string,
  description: string,
  boardId: string,
  columnId: string,
  userId: string
): Promise<CreateTask> => {
  const response = await fetch(`${apiUrl}/boards/${boardId}/columns/${columnId}/tasks`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description, userId }),
  });

  return await response.json();
};

export const deleteTask = async (
  boardId: string,
  columnId: string,
  taskId: string
): Promise<RemoveTask> => {
  const response = await fetch(`${apiUrl}/boards/${boardId}/columns/${columnId}/tasks/${taskId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  if (response.status === 204) return successObject;
  return await response.json();
};

export const updateTask = async (
  boardId: string,
  columnId: string,
  task: Task
): Promise<UpdateTask> => {
  const { title, order, description, userId } = task;
  const response = await fetch(`${apiUrl}/boards/${boardId}/columns/${columnId}/tasks/${task.id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      order: Number(order),
      description,
      userId,
      boardId,
      columnId,
    }),
  });

  return await response.json();
};

export const updateColumnTask = async (
  boardId: string,
  fromColumnId: string,
  toColumnId: string,
  task: Task
): Promise<UpdateTask> => {
  const { title, order, description, userId } = task;
  const response = await fetch(
    `${apiUrl}/boards/${boardId}/columns/${fromColumnId}/tasks/${task.id}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        order: Number(order),
        description,
        userId,
        boardId,
        columnId: toColumnId,
      }),
    }
  );

  return await response.json();
};
