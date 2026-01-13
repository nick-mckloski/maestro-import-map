import { config } from "dotenv";
config();

import FileSystem from "fs";
import { ManagedDependencyImports } from "src/lib/dependencies";
import { RemoteEntryImports } from "src/lib/remotes";

function buildImportMap() {
    const managed = ManagedDependencyImports.reduce((map, dep) => ({
        ...map,
        [dep.moduleName]: dep.cdnUrl,
    }));
    const remotes = RemoteEntryImports.reduce((map, remote) => ({
        ...map,
        [remote.moduleName]: remote.entryUrl,
    }));

    return {
        imports: {
            ...managed,
            ...remotes,
        },
    };
}

export default function build(config) {
    const {
        debug,
        outputPath = "./dist",
        fileName = "import-map.json",
    } = config;

    if (debug) console.log("Building with config ", config);

    const importMap = buildImportMap();

    if (debug) console.log("Built import map ", importMap);

    const outputFile = `${outputPath}/${fileName}`;
    FileSystem.writeFile(outputFile, JSON.stringify(importMap), (error) => {
        if (error) throw error;
    });

    if (debug) console.log("Wrote import map to ", outputFile);
}

build({
    debug: true,
});
