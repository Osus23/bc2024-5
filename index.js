const { Command } = require('commander');
const express = require('express');
const app = express();

const program = new Command();

program
  .requiredOption('-h, --host <host>', 'Host address')
  .requiredOption('-p, --port <port>', 'Port number')
  .requiredOption('-c, --cache <path>', 'Cache directory');

program.parse(process.argv);

const options = program.opts();

app.listen(options.port, options.host, () => {
  console.log(`Server running at http://${options.host}:${options.port}/`);
});
