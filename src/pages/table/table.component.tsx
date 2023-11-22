import { useNavigate } from "react-router-dom";
import { useFetchTodos } from "../table/actions/table.query";
import useDeleteTodo from "../delete/actions/delete.query";
import { az } from "../../assets/lang/az";
import { Space } from "antd";
import colors from "../../assets/styles/abstracts/color";
import sizes from "../../assets/styles/abstracts/sizes";
import fonts from "../../assets/styles/abstracts/fonts";
function Table() {
  const { mutate: deleteTodo } = useDeleteTodo();

  const { data: todos, isLoading, isError } = useFetchTodos();
  const navigate = useNavigate();
  return (
    <Space
      direction="horizontal"
      align="center"
      style={{ width: "100%", justifyContent: "center" }}
    >
      <div className="w-full mt-2 items-center bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Todo List</h1>
        <button
          style={{
            backgroundColor: colors.mainGreen,
            fontFamily: fonts.fontMedium,
            borderRadius: sizes.borderRadiusSm,
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-3 ml-2 rounded"
          onClick={() => navigate("/add-todo")}
        >
          New Todo
        </button>
        <hr className="mb-2" />
        {isLoading ? (
          <h1>Loading...</h1>
        ) : isError ? (
          <h1>Error fetching todos</h1>
        ) : (
          <ul>
            {todos?.map((todo) => {
              return (
                <li
                  className={`mb-2 text-xl ${
                    todo.complete ? "line-through" : ""
                  }`}
                  key={todo.id}
                >
                  {todo.title} {""}
                  <button
                    style={{
                      borderRadius: sizes.borderRadiusSm,
                      backgroundColor: colors.mainGreen,
                      fontFamily: fonts.fontMedium,
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-3 ml-2 rounded"
                    onClick={() => navigate(`/edit-todo/${todo.id}`)}
                  >
                    {az.update_btn}
                    {""}
                  </button>{" "}
                  <button
                    style={{
                      borderRadius: sizes.borderRadiusSm,

                      backgroundColor: colors.mainGreen,
                      fontFamily: fonts.fontMedium,
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-3 ml-2 rounded"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    {az.delete_btn}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Space>
  );
}

export default Table;
