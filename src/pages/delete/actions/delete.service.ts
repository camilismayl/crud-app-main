import axiosInstance from "../../../core/config/axios.config";
import { AxiosResponse } from "axios";
const deleteTodo = async (todoId: number): Promise<AxiosResponse<any, any>> => {
  return await axiosInstance.delete(`/${todoId}`);
};
export default deleteTodo;
