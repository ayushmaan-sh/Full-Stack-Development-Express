"use strict";
function printStatusCode(code) {
    console.log(`Status Code :  ${code}`);
}
printStatusCode(404);
printStatusCode('404');
{
    function printStatusCode(code) {
    }
}
