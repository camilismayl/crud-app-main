import { UseBaseMutationResult } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { TodoInput } from "../add";
import addTodo from "./add.service";
export const useAddTodo = (): UseBaseMutationResult<
  AxiosResponse<TodoInput, any>,
  unknown,
  TodoInput,
  unknown
> => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (todo: TodoInput) => addTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      navigate("/", { replace: true });
    },
  });
};
