import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 3},
};

const MarkersForm = ({onSubmit}) => {
    const [form] = Form.useForm();

    const onFinish = values => {
        if (onSubmit) {
            onSubmit(values);
            form.resetFields();
        }
    }

  return (
    <Form
      {...layout}
      form={form}
      onFinish={onFinish}
    >
      <Form.Item
        label="Latitude"
        name="latitude"
        rules={[{
            required: true,
            message: 'Please input latitude'
        }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label="Longitude"
        name="longitude"
        rules={[{
            required: true,
            message: 'Please input longitude'
        }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit Cords
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MarkersForm;