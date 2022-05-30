import { build } from "esbuild";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  await build({
    bundle: true,
    minify: true,
    sourcemap: true,
    format: "esm",
    target: "esnext",
    external: ["__STATIC_CONTENT_MANIFEST"],
    conditions: ["worker", "browser"],
    entryPoints: [path.join(__dirname, "src", "index.mjs")],
    outfile: path.join(__dirname, "dist", "index.mjs"),
    outExtension: { ".js": ".mjs" },
    define: {
      ["process.env.NODE_ENV"]: JSON.stringify(
        process.env.NODE_ENV ?? "development"
      ),
    },
  });
} catch (e) {
  console.error(e);
  process.exitCode = 1;
}
