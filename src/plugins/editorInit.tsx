import { ILowCodePluginContext } from "@alilc/lowcode-engine";
import { AssetsJson } from "@alilc/lowcode-utils";
import { RootSchema } from "@alilc/lowcode-types";

// todo 根据antd生成asset by lowcode-material
const assets = {} as AssetsJson;
// todo mock schema
const schema = {} as RootSchema;

const editorInit = (ctx: ILowCodePluginContext) => {
  return {
    name: 'editor-init',
    async init() {
      // 设置物料描述
      const { material, project } = ctx;
      await material.setAssets(assets);
      // 加载 schema
      project.openDocument(schema);
    },
  };
}
editorInit.pluginName = 'editorInit';
export default editorInit;
