// STEP 1
// for( var i = 0, i < document.querySelectorAll('nav a').length; i+=1 ) {
//     console.log( document.querySelectorAll('nav a')[i] );
// }


// SETP 2
// for( var i = 0, links = document.querySelectorAll('nav a'); i<links.length; i+=1 ) {
//     console.log( links[i] );
// }


// STEP 3
var i = 0,
    links = document.querySelectorAll('nav a');

for( ; i<links.length; i+=1 ) {
    console.log( links[i] );
}