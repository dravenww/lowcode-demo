import React from "react";
import { ILowCodePluginContext } from "@alilc/lowcode-engine";
import { Button } from 'antd';

const preview = (type: string) => {
  console.log(type);
};
const PreviewPlugin = (ctx: ILowCodePluginContext) => {
  return {
    name: 'previewPlugin',
    async init() {
      const { skeleton } = ctx;
      skeleton.add({
        name: 'previewBtn',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: (
          <Button type="primary" onClick={() => preview('basic-antd')}>
            预览
          </Button>
        ),
      });
    },
  };
};
PreviewPlugin.pluginName = 'previewPlugin';

export default PreviewPlugin;
