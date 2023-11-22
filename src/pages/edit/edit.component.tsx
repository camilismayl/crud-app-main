import { useParams } from "react-router-dom";
import { Space } from "antd";
import { useEditTodo, useFetchTodo } from "./actions/edit.query";
import FormComponent from "../form/form.component";

export default function EditTodo() {
  const { id } = useParams();
  const { data: todoItem, isLoading } = useFetchTodo(id ? parseInt(id) : 0);

  const { mutate: editTodo } = useEditTodo(id ? parseInt(id) : 0);
  return (
    <Space
      direction="horizontal"
      align="center"
      style={{ width: "100%", justifyContent: "center" }}
    >
      <div className="w-full mt-2 items-center bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Edit Todo</h1>
        {isLoading ? (
          <h1>Fetching todo...</h1>
        ) : (
          <FormComponent
            todoItem={todoItem}
            handleSubmit={editTodo}
            action="Edit Todo"
          />
        )}
      </div>
    </Space>
  );
}
