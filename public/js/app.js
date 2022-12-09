// const ul = document.querySelector('ul')

// function getApiGitHub() {
//     fetch('https://api.github.com/users/Mauricio-AFLadeira/repos')
//         .then(async res => {

//             if (!res.ok) {
//                 throw new Error(res.status)
//             }

//             var data = await res.json()

//             data.map(item => {
//                 let li = document.createElement('li')

//                 li.innerHTML = `
//         <strong>${item.name.toUpperCase()}</strong>
//         <span>URL: ${item.commits_url}</span>
//         <span>Data Criação: 
//           ${Intl.DateTimeFormat('pt-BR')
//                         .format(new Date(item.created_at))}
//         </span>
//       `
//                 ul.appendChild(li)

//             })

//         }).catch(e => console.log(e))
// }

// getApiGitHub()
const base_url = 'https://api.github.com';

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
    let first_commit = get_first_commit(owner, repo);
    let compare_url = base_url + '/repos/' + owner + '/' + repo + '/compare/' + first_commit + '...' + sha;
    let commit_req = httpGet(compare_url);
    let commit_count = JSON.parse(commit_req)['total_commits'] + 1;
    console.log('Commit Count: ', commit_count);
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
