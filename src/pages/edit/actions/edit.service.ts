import { AxiosResponse } from "axios";
import axiosInstance from "../../../core/config/axios.config";
import { TodoItem, TodoInput } from "../edit";
export const fetchTodo = async (
  todoId: number
): Promise<AxiosResponse<TodoItem, any>> => {
  return await axiosInstance.get<TodoItem>(`/${todoId}`);
};
export const editTodo = async (
  todoId: number,
  todo: TodoInput
): Promise<AxiosResponse<TodoInput, any>> => {
  return await axiosInstance.put<TodoInput>(`/${todoId}`, todo);
};
