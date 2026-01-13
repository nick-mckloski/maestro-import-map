import * as remoteEntryModules from "src/constants/remoteEntryModules";
const getRemoteEntryEnvVar = (moduleName) => `${moduleName.replaceAll("@", "").replaceAll("/", "").replaceAll("-", "_")}_ENTRY_URL`;
export const RemoteEntryImports = Object(remoteEntryModules)
    .values()
    .map((moduleName) => ({
    moduleName,
    entryUrl: process.env[getRemoteEntryEnvVar(moduleName)],
}));
