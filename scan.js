//const nmapLocation  = require('node-nmap');
const nmap = require('node-nmap');

nmap.nmapLocation = "nmap";

var quickscan = new nmap.QuickScan("127.0.0.1");

quickscan.on('complete',data => {
    console.log(data);
});


quickscan.on('error',error => {
    console.log(error);
});

quickscan.startScan();
