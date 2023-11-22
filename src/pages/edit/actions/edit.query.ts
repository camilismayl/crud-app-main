import { TodoItem } from "../edit";
import { QueryObserverResult, useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UseBaseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { TodoInput } from "../edit";
import { useNavigate } from "react-router-dom";
import { fetchTodo, editTodo } from "./edit.service";

export const useFetchTodo = (
  todoId: number
): QueryObserverResult<TodoItem, any> => {
  return useQuery<TodoItem, any>({
    queryFn: async () => {
      const { data } = await fetchTodo(todoId);
      return data;
    },
    queryKey: ["todo", todoId],
  });
};
export const useEditTodo = (
  todoId: number
): UseBaseMutationResult<
  AxiosResponse<TodoInput, any>,
  unknown,
  TodoInput,
  unknown
> => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (todo: TodoInput) => editTodo(todoId, todo),
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      navigate("/", { replace: true });
    },
  });
};
