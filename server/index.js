import Express from 'express';
import * as fs from 'fs';

const app = new Express();

app.get('/', (req, res) => {
  fs.readFile('server/files/data.json', 'utf8', function (err, data) {
    res.json(data);
    if (err) {
      console.log('error', err);
    }
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

// 1. Сделать приложение экспресс
// 2. Прописать установить пакеты для таблицы
// 3. Исправить ошибки
// 4. Соединить бэк и фронт
