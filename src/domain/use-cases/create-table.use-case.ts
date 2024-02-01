export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export class CreateTable implements CreateTableUseCase {
  execute({ base, limit = 10 }: CreateTableOptions) {
    let response = '';

    for (let i = 1; i <= limit; i++) {
      response += `${base} x ${i} = ${base * i}\n`
    }
  
    return response;
  }
}