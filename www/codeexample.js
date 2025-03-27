const { getRPC, methods } = require("@meowcoin-foundation/meowcoin-rpc");
//@meowcoin-foundation/meowcoin-rpc believes that username/password is mandatory,
//so just send in whatever
const username ="whatever";
const password ="whatever"; 
//Check the ENDPOINT URL, "https://tls-rpc-mainnet.meowcoin.io/rpc"
const rpc = getRPC(username, password, "$ENDPOINT");

const promise = rpc(methods.getassetdata, ["UGLY"]);
promise.catch((e) => {
    console.dir(e);
});

promise.then((response) => {    
        console.log(response);
});