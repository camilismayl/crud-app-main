import { AxiosResponse } from "axios";
import { TodoInput } from "../add";
import axiosInstance from "../../../core/config/axios.config";

const addTodo = async (
  todo: TodoInput
): Promise<AxiosResponse<TodoInput, any>> => {
  return await axiosInstance.post<TodoInput>("/", todo);
};
export default addTodo;
