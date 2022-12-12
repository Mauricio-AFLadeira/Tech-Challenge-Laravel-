const base_url = 'https://api.github.com';

const btn = document.querySelector("#send")
const ctx = document.getElementById('myChart');

btn.addEventListener("click", function (e) {
    e.preventDefault()

    let owner = document.querySelector("#owner").value
    let repo = document.querySelector("#repo").value
    let sha = document.querySelector("#sha").value
    let result = document.querySelector("#result")
    // let test = document.querySelector("#test")

    let count = get_all_commits_count('Mauricio-AFLadeira', 'Tech-Challenge-Laravel-', 'main')
    // let count = get_all_commits_count(owner, repo, sha)


    console.log('Commit Count: ', count);
    result.innerHTML = ("Commit count: " + count)
    // test.innerHTML = (get_commits_count_by_period())

    let xAxis = get_days_it_was_committed('Mauricio-AFLadeira', 'Tech-Challenge-Laravel-')
    let yAxis = [1, 0, 4]

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xAxis,
            datasets: [{
                label: 'Commit per day',
                data: yAxis,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


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

function get_commits_per_day(owner, repo) {
    let url = base_url + '/repos/' + owner + '/' + repo + '/commits';
    let req = httpGet(url);
    let json = JSON.parse(req)
    let days = get_days_it_was_committed(owner, repo)

    for (let aux = 0; aux < json.length - 1; aux++) {

        let day = new Date(json[aux].commit.author.date).toISOString().replace('-', '/').split('T')[0].replace('-', '/')
        if (day === days[aux]) {
            oldDay = day
            days.push(day)
            // debugger
        }
    }

    return 1
}

function get_days_it_was_committed(owner, repo) {
    let url = base_url + '/repos/' + owner + '/' + repo + '/commits';
    let req = httpGet(url);
    let json = JSON.parse(req)
    let days = []
    let oldDay = ''

    for (let aux = 0; aux < json.length - 1; aux++) {

        let day = new Date(json[aux].commit.author.date).toISOString().replace('-', '/').split('T')[0].replace('-', '/')
        if (oldDay != day) {
            oldDay = day
            days.push(day)
        }
        // debugger
    }
    return days.reverse()
}

function get_all_commits_count(owner, repo, sha) {
    let first_commit = get_first_commit(owner, repo);

    let compare_url = base_url + '/repos/' + owner + '/' + repo + '/compare/' + first_commit + '...' + sha;
    let commit_req = httpGet(compare_url);
    let commit_count = JSON.parse(commit_req)['total_commits'] + 1;
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
