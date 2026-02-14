import chalk from "chalk";
import { taskManager } from "../manager/tasks.js";
import { mainMenu } from "./main.js";
import { isCancel, log, select, tasks } from "@clack/prompts";
import { updateTaskMenu } from "./update.js";


export async function listTaskMenu(params) {
  
  if(taskManager.tasks.size < 1) {
    log.warn("Nenhuma tarefa para ser listada!");
    setTimeout(() => mainMenu(), 1000);
    
    return;
  }

  const selected = await select({
    message: "Selecione uma tarefa",
    options: [
      ...taskManager.toArray().map(({name, status}) => ({
        label: `${taskManager.colorStatus(status)}, ${chalk.white.underline(name)}`,
        value: name
      })),
      {label: "Menu Principal", value: "main" }
    ]
  })
  if(isCancel(selected) || selected === "main") {
    mainMenu();
    return;
  }

  updateTaskMenu(selected);
}