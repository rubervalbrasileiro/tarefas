import { isCancel, log, select, text } from "@clack/prompts";
import { taskManager } from "../manager/tasks.js";
import chalk from "chalk";
import { listTaskMenu } from "./list.js";

export async function updateTaskMenu(taskName) {

  const task = taskManager.tasks.get(taskName);

  const formattedDate = new Date(task.createdAt).toLocaleString();

  const status = taskManager.colorStatus(task.status);

  log.info(
    [
      `Tarefa: ${chalk.white.underline(task.name)}`,
      `Status: ${status}`,
      `Criada em: ${chalk.bgGray(formattedDate)}`
    ].join("\n"));


    const selected = await select({
      message: "Selecione o que deseja fazer",
      options: [
        {label: "Altera nome", value: "name"},
        {label: "Altera status", value: "status"},
        {label: "Deletar", value: "delete"},
        {label: "Voltar", value: "back"},
      ]
    })
    if(isCancel(selected)) {
      listTaskMenu();
      return;
    }

    switch(selected){
      case "delete":{
        taskManager.tasks.delete(taskName);
        taskManager.save();
      }
      case "back":{
        listTaskMenu();
         return;
      }
      case "name":{
        const oldTaskName = task.name;

        const newTaskName = await text({
          message: "Informe o novo nome da tarefa",
          validate(input){
            if(taskManager.tasks.has(input)){
              return "Já existe uma tarefa com este nome!"
            }
          }
        })
        if(isCancel(newTaskName)){
          updateTaskMenu(oldTaskName);
          return;
        }

        taskManager.tasks.delete(oldTaskName);
        const updatededTask = {...task, name: newTaskName};
        taskManager.tasks.set(newTaskName, updatededTask);
        taskManager.save();
        updateTaskMenu(newTaskName);
        return; 
      }
      case "status":{
        const taskStatus = [
          "em andamento",
          "concluída",
          "cancelada"
        ]
        .filter(status => status !== task.status)
        .map(status => ({label: status, value: status}));

        const status = await select({
          message: "Selecione um novo status da tarefa",
          options: taskStatus
        })

        if(isCancel(status)){
          updateTaskMenu(taskName);
          return;
        }

        taskManager.tasks.set(taskName,{...task, status});
        taskManager.save();
        updateTaskMenu(taskName);
        return;
      }
    }
}
