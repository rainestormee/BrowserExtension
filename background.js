let config = {
    url: 'https://browsermate.herokuapp.com/request',
    // url: 'http://d838-77-111-227-3.ngrok.io/request'
};

let options = {
    name: "Ryan",
    message: "%name% is accessing content that they shouldn't be. %link%",
    formatted_message: "Ryan is accessing content that they shouldn't be.",
    number: "+447579065474",
    agreed: true,
    tracked_websites: [
        "https://www.youtube.com/",
        "https://twitter.com/",
        "https://www.facebook.com/",
        "https://www.twitch.tv/"
    ]
}

function isBlocked(url, blocked_sites) {
    for (let blocked_site of blocked_sites) {
        if (url.startsWith(blocked_site)) {
            return true;
        }
    }
    return false;
}

chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {

    // chrome.storage.sync.get(['username'], function(result) {
    //     console.log('Value currently is ' + result.key);
    //     alert(result.key);
    // });
    // if (!options.agreed) return;
    if (info.status != 'complete') return;


    let url = tab.url; // get the URL of the currently open tab
    if (url.startsWith("chrome://")) return;


    if (!isBlocked(url, options.tracked_websites)) return;

    postData(config.url, {
        url: url,
        message: options.formatted_message + url,
        username: name,
        number: "+447579065474"
    }).then().catch(e => console.log(e));
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
