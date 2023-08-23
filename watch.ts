import fs from "fs";
import { spawn, ChildProcess } from "child_process";

const projectBuildPath = "./projectBuild.ts";
const srcComponentsDir = "./src/components";
const srcPagesDir = "./src/pages";
const srcStylesDir = "./src/styles";

let timeout: NodeJS.Timeout;
let generateProcess: ChildProcess | null = null;

// Функция для запуска projectBuild.ts
function runProjectBuild() {
    if (generateProcess) {
        generateProcess.kill();
    }

    generateProcess = spawn("node", [projectBuildPath]);

    if (generateProcess) {
        generateProcess.stdout &&
            generateProcess.stdout.on("data", (data) => {
                console.log(`projectBuild: ${data}`);
            });

        generateProcess.stderr &&
            generateProcess.stderr.on("data", (data) => {
                console.error(`projectBuild error: ${data}`);
            });

        generateProcess.on("close", (code) => {
            console.log(`projectBuild process exited with code ${code}`);
            // Сбрасываем таймер после выполнения projectBuild.ts
            clearTimeout(timeout);
        });
    }
}

// Функция для отслеживания изменений в папках src/components и src/pages
function watchDirs() {
    fs.watch(srcComponentsDir, { recursive: true }, (eventType, filename) => {
        console.log(
            `File ${filename} in src/components was changed (${eventType})`
        );
        // Очищаем предыдущий таймер и ставим новый
        clearTimeout(timeout);
        timeout = setTimeout(runProjectBuild, 1000); // 1000 мс (1 сек) задержка перед повторным вызовом
    });

    fs.watch(srcPagesDir, { recursive: true }, (eventType, filename) => {
        console.log(`File ${filename} in src/pages was changed (${eventType})`);
        // Очищаем предыдущий таймер и ставим новый
        clearTimeout(timeout);
        timeout = setTimeout(runProjectBuild, 1000); // 1000 мс (1 сек) задержка перед повторным вызовом
    });

    fs.watch(srcStylesDir, { recursive: true }, (eventType, filename) => {
        console.log(
            `File ${filename} in src/styles was changed (${eventType})`
        );
        // Очищаем предыдущий таймер и ставим новый
        clearTimeout(timeout);
        timeout = setTimeout(runProjectBuild, 1000); // 1000 мс (1 сек) задержка перед повторным вызовом
    });

    console.log("Watching src/components and src/pages for changes...");
}

watchDirs();
