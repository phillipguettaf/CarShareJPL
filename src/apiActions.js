
function callApi(action, data, callback) {
    // URL Of the API server, needds to be changed on deployment
    //fetch('http://localhost:8080/' + action, {
    fetch('https://api-dot-jpl-carshare.appspot.com/' + action, {
        method: 'POST',
        body: JSON.stringify(data, null, 2), // Prettify the JSON output
        headers: {'Content-Type': 'application/json'}
    }).then(response => {
        return response.json();
    }).then(data => {
        callback(data);
    }).catch(err => {
        console.error(err);
    });
}


export {callApi}
