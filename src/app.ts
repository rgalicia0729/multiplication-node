import { yarg } from './config/adapters/args.adapter';
import { ServerApp } from './presentation/server-app';

const main = () => {
  const { b:base, l:limit, s:showTable, n:fileName, d:fileDestination } = yarg;

  ServerApp.execute({
    base,
     limit,
     showTable,
     fileName,
     fileDestination
  });
}

(() => {
  main();
})();
