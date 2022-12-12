const ul = document.querySelector('ul')


const btn = document.querySelector('#user')

btn.addEventListener("click", function (e) {
    e.preventDefault()
    let userName = document.querySelector('#name').value
    getApiGitHub(userName)

})

function getApiGitHub(userName) {
    fetch('https://api.github.com/users/' + userName + '/repos')
        .then(async res => {

            if (!res.ok) {
                throw new Error(res.status)
            }

            var data = await res.json()
            let aux = 1

            data.map(item => {
                let li = document.createElement('li')

                li.innerHTML = `
        <strong>${aux}- ${item.name.toUpperCase()}</strong>
        <span>URL: ${item.commits_url}</span>
        <span>Data Criação: 
          ${Intl.DateTimeFormat('pt-BR')
                        .format(new Date(item.created_at))}
        </span>
      `
                aux++
                ul.appendChild(li)

            })

        }).catch(e => console.log(e))
}
