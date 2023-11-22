import { ErrorMessage, Field, Form, Formik } from "formik";
import { TodoInput, TodoItem } from "./form";
import colors from "../../assets/styles/abstracts/color";
import fonts from "../../assets/styles/abstracts/fonts";
import sizes from "../../assets/styles/abstracts/sizes";
import { Space } from "antd";
type Props = {
  action: string;
  todoItem: TodoItem | undefined;
  handleSubmit: (values: TodoInput) => void;
};

function FormComponent({ todoItem, handleSubmit, action }: Props) {
  return (
    <Space
      direction="horizontal"
      align="center"
      style={{ width: "100%", justifyContent: "center" }}
    >
      <Formik
        initialValues={{
          title: todoItem ? todoItem.title : "",
          complete: todoItem ? todoItem.complete : false,
        }}
        onSubmit={(values: TodoInput) => handleSubmit(values)}
      >
        <Form>
          <div className="mb-2">
            <label htmlFor="title" className="mr-2">
              Title
            </label>
            <Field
              name="title"
              type="text"
              id="title"
              className="shadow appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="title"
              component="span"
              className="text-red-500"
            />
          </div>
          <div>
            <label htmlFor="complete" className="mr-2">
              Complete
            </label>
            <Field name="complete" type="checkbox" id="complete" />
          </div>{" "}
          <button
            style={{
              backgroundColor: colors.mainGreen,
              fontFamily: fonts.fontMedium,
              borderRadius: sizes.borderRadiusSm,
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-3 ml-2 rounded"
          >
            {action}
          </button>
        </Form>
      </Formik>
    </Space>
  );
}
export default FormComponent;
