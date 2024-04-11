import { CompilerConfigInterface } from '@stylify/stylify';
import type { NuxtModule } from '@nuxt/schema';
export interface NuxtModuleConfigInterface {
    dev?: boolean;
    configPath?: string;
    compiler?: CompilerConfigInterface;
    cssVarsExportPath?: string;
    sassVarsExportPath?: string;
    lessVarsExportPath?: string;
    stylusVarsExportPath?: string;
    filesMasks?: string[];
}
export interface ProcessedBundleInterface {
    css?: string;
}
export interface BundleStatsInterface {
    resourcePath: string;
    css: string;
}
export declare const hooks: any;
export declare const defineConfig: (config: NuxtModuleConfigInterface) => NuxtModuleConfigInterface;
declare const _default: NuxtModule<NuxtModuleConfigInterface>;
export default _default;
