

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path  from "node:path";
import chalk from "chalk";


const filePath = path.join("./tasks.json");

if(!existsSync(filePath)) {
  writeFileSync(filePath, JSON.stringify([]), "utf8");
}

const data = readFileSync(filePath, {encoding: "utf8"});
const parsed = JSON.parse(data);

const tasks = new Map(parsed.map(task => [task.name, task]));

export const taskManager = {
  tasks,
  save() {
    const data = this.toArray();
    writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
  },
  create(taskData) {
    this.tasks.set(taskData.name, taskData);
    this.save();
  },
  toArray() {
    return Array.from(this.tasks.values());
  },
  colorStatus(status) {
    switch(status.toLowerCase()) {
      case "em andamento": {
        return chalk.bgRgb(176, 209, 11)(` ${status} `);
}
      case "concluída": {
        return chalk.bgBlue(` ${status} `);
      }
      case "cancelada": {
        return chalk.bgRed(` ${status} `);
      }
      default: {
        return chalk.bgWhite( `${status}`);
      }
    }
  }
}