import React from "react";
import axios from "axios";
import { Form, Input, Radio, Button } from "antd";
import "./infoForm.styles.css";

function InfoForm({ userList, setUserList }) {
  async function onFinish(values) {
    const token = process.env.REACT_APP_OPENAI_API_KEY;
    const generate = `How many calories per day should I take to lose weight in 12 weeks based on this information?

     Gender: ${values.gender}
     Age: ${values.age}
     Height: ${values.height.feet} feet ${values.height.inches} inches
     Weight: ${values.weight} pounds
     Goal Weight: ${values.goalWeight} pounds`;

    const url =
      "https://api.openai.com/v1/engines/text-davinci-002/completions";
    const para = {
      prompt: generate,
      temperature: 0.8,
      max_tokens: 1020,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };

    axios
      .post(url, para, {
        auth: {
          password: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUserList([
          ...userList,
          {
            id: response.data.id,
            nickname: values.nickname,
            info: generate,
            result: response.data.choices[0].text,
          },
        ]);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }

  return (
    <div>
      <h1>Want to lose weight in 12 weeks?</h1>
      <div className="form">
        <div className="title">Let's calculate calorie intake</div>
        <div className="subtitle">
          You can save the result for everyone in you family
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

          <Form.Item label="Nickname">
            <Form.Item
              name="nickname"
              noStyle
              rules={[{ required: true, message: "Nickname is required" }]}
            >
              <Input style={{ width: 160 }} placeholder="Nickname" />
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
    </div>
  );
}

export default InfoForm;
