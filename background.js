let config = {
    url: 'https://browsermate.herokuapp.com/request',
    // url: 'http://d838-77-111-227-3.ngrok.io/request'
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        if (!(changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined)) {
            return;
        }
        let url = tabs[0].url; // get the URL of the currently open tab
        if (url.startsWith("chrome://")) return;
        if (!url.includes("youtube")) {
            return;
        }
        alert("YouTube Tab!");
        postData(config.url, {url: url, content: "YouTube video", username: "Sanskruti"}).then().catch(e => console.log(e));
    });
});
function check_if_bad(html) {
    if (html.includes("roblox")) {
        return true;
    } else {
        return false;
    }
}


// function to post data to an endpoint thanks stackoverflow xoxoxo
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
};
