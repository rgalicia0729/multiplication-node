import { CreateTable, SaveFile } from '../domain/use-cases';

interface Options {
  base: number;
  limit: number;
  showTable: boolean;
  fileName: string;
  fileDestination: string;
}

export class ServerApp {
  static execute({ base, limit, showTable, fileName, fileDestination }: Options) {
    const table = new CreateTable().execute({base, limit});
    const wasCreated = new SaveFile().execute({fileContent: table, fileName, fileDestination});

    if (showTable) console.log(table);

    (wasCreated)
      ? console.log('File created')
      : console.log('File not created');
  }
}