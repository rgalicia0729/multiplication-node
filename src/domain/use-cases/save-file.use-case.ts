import { writeFileSync, mkdirSync } from 'fs';

export interface SaveFileOptions {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}

export class SaveFile implements SaveFileUseCase {
  execute({
    fileContent, 
    fileDestination = 'outputs', 
    fileName = 'table'
  }: SaveFileOptions) {
    try {
      mkdirSync(fileDestination, {recursive: true});
      writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);

      return true;
    } catch(err) {
      console.error(err);

      return false;
    }
  }
}