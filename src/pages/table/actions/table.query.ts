import { QueryObserverResult, useQuery } from "@tanstack/react-query";
import { TodoItem } from "../table";
import fetchTodos from "./table.service";
export const useFetchTodos = (): QueryObserverResult<TodoItem[], any> => {
  return useQuery<TodoItem[], any>({
    queryFn: async () => {
      const { data } = await fetchTodos();
      return data;
    },
    queryKey: ["todos"],
  });
};
