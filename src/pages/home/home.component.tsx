import Table from "../table/table.component";
import "../../App.scss";
import { Space } from "antd";

function HomeComponent() {
  return (
    <Space
      direction="horizontal"
      align="center"
      style={{ width: "100%", justifyContent: "center" }}
    >
      <Table />
    </Space>
  );
}

export default HomeComponent;
