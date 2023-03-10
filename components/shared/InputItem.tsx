import React from "react";
import { Input, Form } from "antd";
import Styles from "@/styles/scss/common/InputItem.module.scss";
export default function InputItem({
  theme,
  value,
  onChange = () => { },
  name,
  disabled,
  type,
  placeholder
}: any) {
  return (
    <Form.Item style={{ marginBottom: 16 }}
    >
      <Input
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        name={name}
        className={theme ? Styles.lightInput : Styles.darkInput}
        value={value}
        onChange={(e) => {
          onChange((prev: any) => {
            return {
              ...prev,
              [e.target.name]: e.target.value,
            };
          });
        }}
      />
    </Form.Item>
  );
}  
