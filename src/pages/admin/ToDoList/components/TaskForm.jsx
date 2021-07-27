import {Form, Input, Button} from "antd";

import "../../../../assets/css/taskForm.css"

import {useDispatch} from "react-redux";

import {addTaskAction, editTaskAction} from "../../../../redux/actions";


function TaskForm({
                      type,
                      task,
                      index,
                      setIsShowEditForm
                  }) {

    const dispatch = useDispatch();

    const [addNewTaskForm] = Form.useForm();

    const handleInitialValues = () => {
        if (type === 'edit') {
            return {
                taskName: task.taskName,
                description: task.description
            }
        }
    }

    const handleSubmit = (value) => {
        if (type === 'add') {
            addNewTaskForm.resetFields();
            dispatch(addTaskAction(value));
        } else {
            dispatch(editTaskAction(value, index));
            setIsShowEditForm(false)
        }
    }
    return (
        <Form
            form={addNewTaskForm}
            labelCol={{span: 4}}
            wrapperCol={{span: 16}}
            onFinish={handleSubmit}
            initialValues={handleInitialValues()}
        >
            <Form.Item
                label="Tên công việc:"
                name="taskName"
                rules={[{required: true, message: 'Nhập tên công việc!'}]}
            >
                <Input placeholder="Nhập tên công việc"/>
            </Form.Item>

            <Form.Item
                label="Mô tả:"
                name="description"
                rules={[{required: true, message: 'Nhập mô tả công việc!'}]}
            >
                <Input placeholder="Nhập mô tả công việc"/>
            </Form.Item>

            <Button
                className="btn-submit"
                type="primary"
                htmlType="submit"
                style={{
                    backgroundColor: type === 'edit' && "#238e41",
                    borderColor: type === 'edit' && "#238e41",
                }}
            >
                {type === "add" ? "Thêm" : "Sửa"}
            </Button>
        </Form>
    )
}

export default TaskForm;