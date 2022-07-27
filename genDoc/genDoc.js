import td, { Application } from "typedoc";
import { readFileSync, writeFileSync } from "fs";
import { concatMdSync } from "concat-md";

// Some discussion:
// https://github.com/tgreyuk/typedoc-plugin-markdown/issues/59

// Interesting template location:
// https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/typedoc-plugin-markdown/src/resources

async function run() {
    const app = new Application();
    app.options.addReader(new td.TypeDocReader());
    app.options.addReader(new td.TSConfigReader());
    const entryPoints = readFileSync("./paths.txt", "utf8").split(/\n/).map(f => `${f}`);
    const out = "./generated";
    app.bootstrap({
        entryPoints,
        cleanOutputDir: true,
        out,
        plugin: ["typedoc-plugin-markdown"],
        tsconfig: './tsconfig.json',
        basePath: './',
        // Options for typedoc-plugin-markdown
        // See: https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/typedoc-plugin-markdown/src/theme.ts#L25
        // https://github.com/tgreyuk/typedoc-plugin-markdown/blob/f51ff45d20758a19c851c37561dd2c07e80f0c23/packages/typedoc-plugin-markdown/src/index.ts
        hideBreadcrumbs: true
    });
    const project = app.convert();
    if (!project) {
        console.error("Could not generate reflections");
        return;
    }
    await app.generateDocs(project, out);
    const concatted = concatMdSync("./generated", {});
    writeFileSync("./generated/concatted.md", concatted);
}

run();