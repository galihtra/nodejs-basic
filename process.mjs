import process from 'node:process';

process.addListener("exit",  (exitCode) => {
    console.info(`NodeJS exit code with ${exitCode}`);
})

process.exit(1);