import FormComponent from "../form/form.component";
import { useAddTodo } from "./actions/add.query";
import { Space } from "antd";
export default function AddTodo() {
  const { mutate: addTodo } = useAddTodo();

  return (
    <Space
      direction="horizontal"
      align="center"
      style={{ width: "100%", justifyContent: "center" }}
    >
      <div className="w-  full mt-2 items-center bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-4">New Todo</h1>
        <FormComponent
          todoItem={undefined}
          handleSubmit={addTodo}
          action="Add Todo"
        />
      </div>
    </Space>
  );
}
