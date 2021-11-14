import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Input, Space, Button } from "antd";

import "./styles.scss";

interface IFormInput {
  firstName: string;
  password: string;
}

export const Auth = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <div>
      <div className="formWrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Space direction="vertical">
            <Controller
              rules={{ required: true }}
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="large size"
                  prefix={<UserOutlined />}
                />
              )}
            />
            <Controller
              rules={{ required: true }}
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input.Password
                  {...field}
                  placeholder="input password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              )}
            />
            <Button htmlType="submit">submit</Button>
          </Space>
        </form>
      </div>
    </div>
  );
};
