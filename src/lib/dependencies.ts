import type { ManagedDependencyImport } from "types/imports";
import { dependencies } from "package.json";
import * as managedModules from "src/constants/managedModules";

const getDependencyCDNUrl = (moduleName: string, version: string) =>
    `${process.env.CDN_BASE_URL}${moduleName}@${version}/index.js`;

export const ManagedDependencyImports: ManagedDependencyImport[] =
    Object.values(managedModules).map((moduleName) => {
        const version = dependencies[moduleName];
        return {
            moduleName,
            version,
            cdnUrl: getDependencyCDNUrl(moduleName, version),
        };
    });
