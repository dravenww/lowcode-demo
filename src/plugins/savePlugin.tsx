import React from "react";
import { ILowCodePluginContext } from '@alilc/lowcode-engine';
import { Button } from 'antd';

const saveSchema = (type: string) => {
  console.log(type);
};

const resetSchema = (type: string) => {
  console.log(type);
};

// 注册保存面板
const savePlugin = (ctx: ILowCodePluginContext) => {
  return {
    name: 'savePlugin',
    async init() {
      const { skeleton, hotkey } = ctx;

      skeleton.add({
        name: 'saveSchema',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: (
          <Button onClick={() => saveSchema('basic-antd')}>
            保存
          </Button>
        ),
      });
      skeleton.add({
        name: 'resetSchema',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: (
          <Button onClick={() => resetSchema('basic-antd')}>
            重置
          </Button>
        ),
      });
      hotkey.bind('command+s', (e) => {
        e.preventDefault();
        saveSchema('basic-antd')
      });
    },
  };
}
savePlugin.pluginName = 'savePlugin';
export default savePlugin;
