export const actions = {

    getPins() {
        fetch('http://116.203.125.0:12001/pins')
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
    },
    getSinglePin(context) {
        fetch('http://116.203.125.0:12001/pins/' + context.state.pinId)
            .then(response => response.json())
            .then(result => {

                context.commit('setPinTitle', result.pinTitle)
                context.commit('setPinDescription', result.pinDescription)
                context.commit('setPinImage', result.pinImage)
                context.commit('setPinTags', result.pinTags)
                context.commit('setPinCoordinatesX', result.pinCoordinates.x)
                context.commit('setPinCoordinatesY', result.pinCoordinates.y)
                context.commit('setPinUser', result.pinUser)

                console.log(result)
            })
    },
    postPin(context) {

        let formData = new FormData()

        formData.append('pinTitle', context.state.pinTitle)
        formData.append('pinDescription', context.state.pinDescription)
        formData.append('pinImage', document.querySelector('#pin-image').files[0])
        formData.append('pinTags', JSON.stringify(context.state.pinTags))
        formData.append('pinCoordinates', JSON.stringify(context.state.pinCoordinates))
        formData.append('pinUser', context.state.pinUser)
        context.commit('setPinInt', 0)
        console.log(context.state.pinBool)


        fetch('http://116.203.125.0:12001/pins', {
            body: formData,
            headers: {
                'Token': localStorage.getItem('token')
            },
            method: 'POST'
        }).then(response => response)
            .then(result => {
                console.log(result)
                context.dispatch('reloadWindow')
                    .then(() => {
                        context.commit('setCenter', context.state.pinCoordinates)
                        context.commit('setPinTitle', "")
                        context.commit('setPinDescription', "")
                        context.commit('setPinCoordinatesX', 0)
                        context.commit('setPinCoordinatesY', 0)
                        context.commit('setPinTags', [])
                    })
            })
    },
    patchPin(context) {

        let formData = new FormData()

        formData.append('pinTitle', context.state.pinTitle)
        formData.append('pinDescription', context.state.pinDescription)
        if (document.querySelector('#pin-image').files[0] !== undefined) {
            formData.append('pinImage', document.querySelector('#pin-image').files[0])
        } else {
            formData.append('pinImage', null)
        }
        formData.append('pinTags', JSON.stringify(context.state.pinTags))
        formData.append('pinCoordinates', JSON.stringify(context.state.pinCoordinates))
        formData.append('pinUser', context.state.pinUser)

        fetch('http://116.203.125.0:12001/pins/' + context.state.pinId, {
            body: formData,
            headers: {
                'Token': localStorage.getItem('token')
            },
            method: 'PATCH'
        }).then(response => response)
            .then(result => {
                console.log(result)
            })
    },
    deletePin(context) {
        fetch('http://116.203.125.0:12001/pins/' + context.state.pinId, {
            headers: {
                'Token': localStorage.getItem('token')
            },
            method: 'DELETE'
        }).then(response => response)
            .then(result => {
                console.log(result)
            })
    },

    //actions for user data
    signup(context) {

        let formData = new FormData()//formData holds and transfers the data from a form to a backend server

        formData.append('userName', context.state.userName)
        formData.append('userPassword', context.state.userPassword)
        formData.append('userEmail', context.state.userEmail)
        formData.append('userImage', document.querySelector('#user-image')).files[0]

        fetch('http://116.203.125.0:12001/signup', {
            body: formData,
            method: 'POST'
        }).then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.status === 2) {
                    console.log(result.status)
                    alert("User name taken!")
                } else {
                    window.location.replace("http://localhost:8080/#/")
                }
            })
    },
    login(context) {
        fetch('http://116.203.125.0:12001/login', {
            body: JSON.stringify({
                userName: context.state.userName,
                userPassword: context.state.userPassword
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json())
            .then(result => {

                localStorage.setItem('token', result.token)

                console.log(result)
                if (result.status === 1 || result.status === 3) {
    
                        context.commit('setLoggedIn', true)
                        context.commit('setActiveUser', result.user)
    
                        window.location.replace("http://localhost:8080/#/map")
                }
            })
    },
    logout(context) {
        console.log(localStorage.getItem("token"));
        fetch('http://116.203.125.0:12001/logout', {
            headers: {
                'Token': localStorage.getItem('token')
            },
            method: 'DELETE'
        }).then(response => response.json())
            .then(result => {
                context.commit('setLoggedIn', false)
                context.commit('setActiveUser', -1)
                localStorage.removeItem('token')
                console.log(result)
            })

        window.location.replace("http://localhost:8080/#/");
    },
    changePinInt(context) {
        if (context.state.pinInt != 0) {
            context.state.pinInt = 0
        }
    },
    reloadWindow() {
        return new Promise((resolve) => {
            window.location.reload()
            resolve(true)
        })
    }
}
