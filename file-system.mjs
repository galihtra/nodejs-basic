import fs from 'node:fs/promises';

// todo With synchronous
// const readNoteSync = fs.readFileSync('note.txt');
// console.log(readNoteSync.toString());

// todo With asynchronous
// const writeNote = await fs.writeFile('note.txt','my name is galih');

const readNote = await fs.readFile('note.txt');
console.log(readNote.toString());