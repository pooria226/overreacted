import React from "react";
import { Switch } from "antd";
import ImageProvider from "@/providers/ImageProvider";
export default function ThemeButton({ handleChangeTheme, theme }: any) {
  return (
    <div >
      <Switch
        checkedChildren={
          <ImageProvider src={'/assets/images/png/moon.png'} width={17} height={17} />


        }
        unCheckedChildren={<ImageProvider src={'/assets/images/png/sun.png'} width={17} height={17} />}
        defaultChecked={theme ? false : true}
        onChange={() => handleChangeTheme()}
      />
    </div>
  );
}
