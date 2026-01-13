import { dependencies } from "package.json";
import * as managedModules from "src/constants/managedModules";
const getDependencyCDNUrl = (moduleName, version) => `${process.env.CDN_BASE_URL}${moduleName}@${version}/index.js`;
export const ManagedDependencyImports = Object.values(managedModules).map((moduleName) => {
    const version = dependencies[moduleName];
    return {
        moduleName,
        version,
        cdnUrl: getDependencyCDNUrl(moduleName, version),
    };
});
