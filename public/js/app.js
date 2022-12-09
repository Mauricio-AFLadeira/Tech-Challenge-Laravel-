const base_url = 'https://api.github.com';

const btn = document.querySelector("#send")

btn.addEventListener("click", function (e) {
    e.preventDefault()

    let owner = document.querySelector("#owner").value
    let repo = document.querySelector("#repo").value
    let sha = document.querySelector("#sha").value


    get_all_commits_count(owner, repo, sha)

})

function httpGet(theUrl, return_headers) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    if (return_headers) {
        return xmlHttp
    }
    return xmlHttp.responseText;
}

function get_all_commits_count(owner, repo, sha) {
    let result = document.querySelector("#result")
    let first_commit = get_first_commit(owner, repo);
    let compare_url = base_url + '/repos/' + owner + '/' + repo + '/compare/' + first_commit + '...' + sha;
    let commit_req = httpGet(compare_url);
    let commit_count = JSON.parse(commit_req)['total_commits'] + 1;
    console.log('Commit Count: ', commit_count);
    result.innerHTML = ("Commit count: " + commit_count)
    return commit_count
}

function get_first_commit(owner, repo) {
    let url = base_url + '/repos/' + owner + '/' + repo + '/commits';
    let req = httpGet(url, true);
    let first_commit_hash = '';
    if (req.getResponseHeader('Link')) {
        let page_url = req.getResponseHeader('Link').split(',')[1].split(';')[0].split('<')[1].split('>')[0];
        let req_last_commit = httpGet(page_url);
        let first_commit = JSON.parse(req_last_commit);
        first_commit_hash = first_commit[first_commit.length - 1]['sha']
    } else {
        let first_commit = JSON.parse(req.responseText);
        first_commit_hash = first_commit[first_commit.length - 1]['sha'];
    }
    return first_commit_hash;
}