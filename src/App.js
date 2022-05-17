import { Form, Input, Radio, Button } from "antd";
import "./App.css";

function App() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="form">
      <div class="title">Want to lose weight in 12 weeks?</div>
      <div class="subtitle">
        Let's calculate how many calories you should take
      </div>
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

        <Form.Item label="Height" style={{ marginBottom: 0 }}>
          <Input.Group compact>
            <Form.Item
              name={["height", "feet"]}
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
              rules={[{ required: true, message: "Height is required" }]}
            >
              <Input placeholder="feet" />
            </Form.Item>
            <Form.Item
              name={["height", "inches"]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
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
    </div>
  );
}

export default App;
