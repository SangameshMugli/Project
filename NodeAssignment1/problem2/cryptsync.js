const crypt0=require('crypto');
const { performance } =require('perf_hooks');

const start = performance.now()

crypto.pbkdf2Sync("password", "salt",100000,64,"sha512")

const end = performance.now()

console.log(`Time Taken : ${hashTime.toFixed(3)} milliseconds`);