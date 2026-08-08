import * as ExternalPlugin from "./.quartz/plugins"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

ExternalPlugin.Explorer({
  filterFn: (node) => !node.name?.startsWith("_") && !node.name?.startsWith("."),
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()