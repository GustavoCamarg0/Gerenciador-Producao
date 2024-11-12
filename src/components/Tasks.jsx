import { ReceiptText, TrashIcon } from "lucide-react";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TableProcess } from "./TableProcess";

function Tasks({ tasks, onDeleteTaskClick }) {
  const resolutions = `
  lg:max-h-80
  2xl:max-h-[80%]
  `;

  return (
    <ul
      className={`grid grid-cols-5 gap-10 bg-white w-[80%] p-4 overflow-auto ${resolutions}`}
    >
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex flex-col gap-2 items-center p-1 bg-gray-950/10 rounded-md justify-between"
        >
          <span className="bg-blue-800 w-full text-white p-2 rounded-md flex-1 text-xs text-center font-semibold flex justify-center items-center">
            {task.description}
          </span>
          <div className="flex gap-2 w-full justify-around">
            <Dialog>
              <DialogTrigger>
                <Button className="bg-emerald-500 hover:bg-emerald-500/80">
                  <ReceiptText />
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0 top-[40%]">
                <DialogTitle hidden></DialogTitle>
                <div className="p-0 flex flex-col gap-2 text-sm">
                  <div className="p-4 text-lg text-gray-400">
                    <h1>{task.description} - Descrição</h1>
                  </div>
                  <hr />

                  <div className="flex flex-col gap-2 p-4">
                    <span>
                      Preço Unitário:{" "}
                      <span className="text-green-600 font-medium">
                        R$ {task.valorUnitario}
                      </span>
                    </span>
                    {
                      task.processos ? (<TableProcess processos={task.processos} />):""
                    }
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button
              onClick={() => onDeleteTaskClick(task.id)}
              variant={"destructive"}
            >
              <TrashIcon />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
