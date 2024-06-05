const crypt0=require('crypto');
const { performance } =require('perf_hooks');

const start=performance.now()
for (let i=0;i<3;i++){
crypt0.pbkdf2("password", "salt",100000,64,"sha512" , () => {

    const end = performance.now()

const hashTime=end-start;

console.log(`Time Taken : ${hashTime.toFixed(3)} milliseconds`);

});

}
