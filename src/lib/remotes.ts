import type { RemoteEntryImport } from "types/imports";
import * as remoteEntryModules from "src/constants/remoteEntryModules";

const getRemoteEntryEnvVar = (moduleName: string) =>
    `${moduleName.replaceAll("@", "").replaceAll("/", "").replaceAll("-", "_")}_ENTRY_URL`;

export const RemoteEntryImports: RemoteEntryImport[] = Object(
    remoteEntryModules,
)
    .values()
    .map((moduleName: string) => ({
        moduleName,
        entryUrl: process.env[getRemoteEntryEnvVar(moduleName)],
    }));
