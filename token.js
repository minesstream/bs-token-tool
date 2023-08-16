const jwt = require('jsonwebtoken');
const cfg = require('./config.json')

let arg = process.argv
let vo = (arg.length>2)?arg[2]:"-"

let pl = {
    "vo": vo,
    "acl": [
      {
        "accept": false
      },
      {
        "accept": true,
        "service": "storage",
        "resource": vo + ".*",
        "mode": "+(l|r)"
      }
    ]
}

if(vo=='-'){
    pl.acl=[{"accept":false}]
}

let token = jwt.sign(pl, cfg.secret);

console.log('Data API Token for project [' + vo + ']')
console.log('----------------------------------------')
console.log(' ')
console.log(token)
console.log(' ')