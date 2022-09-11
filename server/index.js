import Express from 'express';
import * as fs from 'fs';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = new Express();

const PORT = process.env.PORT || 3001;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFilePath = (filename) => path.join(__dirname, '..', 'server/files', filename);

const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin(origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  fs.readFile(getFilePath('data.json'), 'utf8', (err, data) => {
    res.send(data);
    if (err) {
      console.log('error', err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});

// eslint-disable-next-line import/prefer-default-export
export const server = app;
