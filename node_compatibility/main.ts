// Learn more at https://deno.com/blog/v1.25#experimental-npm-support
import { v4 as uuidv4 } from 'npm:uuid';
import express from 'npm:express';

if (import.meta.main) {
  const app = express();

  app.get('/', (req, res) => {
    res.send(`Hello World! ${uuidv4()}`);
  });

  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
}
