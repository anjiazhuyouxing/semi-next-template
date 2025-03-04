'use client'
import { Button,Lottie , Tooltip} from "@douyinfe/semi-ui";
import React from "react";

export default function Home() {
  console.log(React);
  
  const jsonURL =
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/lottie_demo.json';

  return (
    <>
      <Button>Click me</Button>
      <Tooltip content="Tooltip content" autoAdjustOverflow>
        <Button>Hover me</Button>
      </Tooltip>
      <Lottie params={{ path: jsonURL }} width={'300px'} height={'300'} />
    </>
  );
}
