import { plugins } from '@alilc/lowcode-engine';
import ManualPlugin from "@alilc/lowcode-plugin-manual"; // 使用手册面板
import UndoRedoPlugin from '@alilc/lowcode-plugin-undo-redo'; // 撤销等操作插件
import ComponentsPane from '@alilc/lowcode-plugin-components-pane'; // 组件库面板
import ZhEnPlugin from '@alilc/lowcode-plugin-zh-en'; // 中英文插件
import CodeGenPlugin from '@alilc/lowcode-plugin-code-generator'; // 代码生成插件
import DataSourcePanePlugin from '@alilc/lowcode-plugin-datasource-pane'; // 数据源面板
import SchemaPlugin from '@alilc/lowcode-plugin-schema'; // 查看schema的插件
import CodeEditor from "@alilc/lowcode-plugin-code-editor"; // 编辑代码面板

import EditorInit from './editorInit'; // 初始化
import SetterPlugin from './setterPlugin'; // 设置器
import savePlugin from './savePlugin'; // 保存、重置
import PreviewPlugin from './previewPlugin'; // 保存、重置

export const initPlugin = async () => {
  await plugins.register(ManualPlugin);
  await plugins.register(UndoRedoPlugin);
  await plugins.register(ComponentsPane);
  await plugins.register(ZhEnPlugin);
  await plugins.register(CodeGenPlugin);
  await plugins.register(DataSourcePanePlugin);
  await plugins.register(SchemaPlugin);
  await plugins.register(CodeEditor);
  await plugins.register(EditorInit);
  await plugins.register(SetterPlugin);
  await plugins.register(savePlugin);
  await plugins.register(PreviewPlugin);
};
