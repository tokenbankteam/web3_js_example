const axios = require('axios');
axios.post('https://api.devnet.solana.com/', {
    method: "getTokenAccountsByOwner",
    jsonrpc: "2.0",
    params: [
        "E3jFKESsueXAtbeGcTcXsEjVEa45R3exTCy1abbNFJ64",
        {
            "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
            "encoding": "jsonParsed",
            "commitment": "processed"
        }
    ],
    "id": "aa8698d2-b3c1-45c1-ae9c-a3e3fabf4dd9"
}).then(res => {
    console.log(res.data);
}).catch(err => {
    console.log(err);
});