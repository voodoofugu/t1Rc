import { cp, mkdir, readFile, realpath, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const source = path.resolve(root, "../demo-workbench");
const target = path.resolve(root, "node_modules/demo-workbench");

async function pathExists(filePath) {
  try {
    await readFile(filePath);
    return true;
  } catch {
    return false;
  }
}

async function realpathOrNull(filePath) {
  try {
    return await realpath(filePath);
  } catch {
    return null;
  }
}

if (!(await pathExists(path.join(source, "dist/index.js")))) {
  throw new Error("demo-workbench dist is missing. Run npm --prefix ../demo-workbench run build first.");
}

const [realSource, realTarget] = await Promise.all([
  realpath(source),
  realpathOrNull(target),
]);

if (realTarget === realSource) {
  console.log(`demo-workbench is symlinked at ${target}; dist is already shared`);
  process.exit(0);
}

await mkdir(target, { recursive: true });
await rm(path.join(target, "dist"), { recursive: true, force: true });
await cp(path.join(source, "dist"), path.join(target, "dist"), { recursive: true });

const packageJson = JSON.parse(await readFile(path.join(source, "package.json"), "utf8"));
await writeFile(path.join(target, "package.json"), `${JSON.stringify(packageJson, null, 2)}\n`);

for (const fileName of ["README.md", "LICENSE"]) {
  if (await pathExists(path.join(source, fileName))) {
    await cp(path.join(source, fileName), path.join(target, fileName));
  }
}

console.log(`Synced demo-workbench dist to ${target}`);
