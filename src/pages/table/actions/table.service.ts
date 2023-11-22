import { TodoItem } from "../table";
import { AxiosResponse } from "axios";
import axiosInstance from "../../../core/config/axios.config";
const fetchTodos = async (): Promise<AxiosResponse<TodoItem[], any>> => {
  return await axiosInstance.get<TodoItem[]>("/");
};

export default fetchTodos;
