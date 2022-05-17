import { Form, Input, Radio, Button } from "antd";
import "./App.css";

function App() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      name="complex-form"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item label="Gender">
        <Form.Item
          name="gender"
          noStyle
          rules={[{ required: true, message: "Gender is required" }]}
        >
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </Form.Item>
      </Form.Item>

      <Form.Item label="Age">
        <Form.Item
          name="age"
          noStyle
          rules={[{ required: true, message: "Age is required" }]}
        >
          <Input style={{ width: 160 }} placeholder="Age" />
        </Form.Item>
      </Form.Item>

      <Form.Item label="Height">
        <Input.Group compact>
          <Form.Item
            name={["height", "feet"]}
            noStyle
            rules={[{ required: true, message: "Height is required" }]}
          >
            <Input style={{ width: "50%" }} placeholder="feet" />
          </Form.Item>
          <Form.Item
            name={["height", "inches"]}
            noStyle
            rules={[{ required: true, message: "Height is required" }]}
          >
            <Input style={{ width: "50%" }} placeholder="inches" />
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item label="Weight">
        <Form.Item
          name="weight"
          noStyle
          rules={[{ required: true, message: "Weight is required" }]}
        >
          <Input style={{ width: 160 }} placeholder="Weight" />
        </Form.Item>
      </Form.Item>

      <Form.Item label="Goal Weight">
        <Form.Item
          name="goalWeight"
          noStyle
          rules={[{ required: true, message: "Goal Weight is required" }]}
        >
          <Input style={{ width: 160 }} placeholder="Goal Weight" />
        </Form.Item>
      </Form.Item>

      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Calculate
        </Button>
      </Form.Item>
    </Form>
  );
}

export default App;
