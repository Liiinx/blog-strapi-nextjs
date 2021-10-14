const axios = require('axios');

// requete une la base de donnes avec login + password afin de recuperer un token (jwt : json web token)
axios.post('http://localhost:1337/auth/local', {
    identifier: 'test@test.com',
    password: 'testtest',
})
    .then(function (response) {

        console.log(response.data) // handle succes

        // recuperer jwt pour joindre a une requete authentifier
        let jwt = response.data.jwt

        // construire bearer auth token a joindre avec la requete
        console.log(`Bearer ${response.data.jwt}`)

        // recuperer la liste des categories disponibles en base de donnees
        axios.get('http://localhost:1337/users',
            { headers: { Authorization: `Bearer ${jwt}` }
            }).then(function (response) {
            console.log(response.data)
        })
            .catch(function (error) {
                console.log('error') // handle error
            })
            .then(function () {
                console.log('--- --- ---')
            })

    })
    .catch(function (error) {
        console.log('error') // handle error
    })
    .then(function () {
        console.log('--- --- ---')
    });