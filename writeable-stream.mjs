/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

import fs from 'node:fs';

const reader = fs.createReadStream('input.txt', {
    highWaterMark: 15
});

const writer = fs.createWriteStream('output.txt');

reader.on('data', (data) => {
    writer.write(`${data}\n`);
});
