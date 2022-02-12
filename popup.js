// config = {
//     url: 'http://d838-77-111-227-3.ngrok.io/request'
//
// }
//
//
// document.addEventListener('DOMContentLoaded', () => {
//     chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//         let url = tabs[0].url; // get the URL of the currently open tab
//         if (url.startsWith("chrome://")) return;
//         alert("testing");
//         console.log("not a chrome tab");
//         if (!url.contains("youtube")) {
//             return;
//         }
//         fetch(url).then((r) => r.text().then(content => {
//             // post the content of the webpage to the API
//             console.log("sending data to API")
//
//             postData(config.url, {url: url, content: "YouTube video"}).then();
//         })).catch(error => {
//             console.log(error);
//             // post the URL to the API if we can't get the pages content.
//             postData(config.url, {url: url}).then();
//         });
//     });
// });
//
//
// function check_if_bad(html) {
//     if (html.contains("roblox")) {
//         return true
//     } else {
//         return false
//     }
// }
//
//
//
//
// // function to post data to an endpoint thanks stackoverflow xoxoxo
// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
// }
