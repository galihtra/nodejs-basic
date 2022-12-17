import fs from 'node:fs';

const writer = fs.createWriteStream('article.txt');

writer.write('This is my first article\n');
writer.write('created by galih');
writer.end();

const reader = fs.createReadStream('article.txt');
reader.on('data', (data) => {
    console.info(data.toString());
})