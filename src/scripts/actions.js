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
        context.commit('setPinBool', false)
        console.log(context.state.pinBool)

        if (formData.get('pinTitle') !== ("")) {
            fetch('http://116.203.125.0:12001/pins', {
                body: formData,
                method: 'POST'
            }).then(response => response)
                .then(result => {
                    console.log(result)
                })
        } else {
            console.log("did not send")
            context.commit('setPinBool', true)
        }
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
            method: 'PATCH'
        }).then(response => response)
            .then(result => {
                console.log(result)
            })
    },
    deletePin(context) {
        fetch('http://116.203.125.0:12001/pins/' + context.state.pinId, {
            method: 'DELETE'
        }).then(response => response)
            .then(result => {
                console.log(result)
            })
    },
    changePinBool(context) {
        if (context.state.pinBool === true) {
            context.commit('setPinBool', false)
        } else if (context.state.pinBool === false) {
            context.commit('setPinBool', true)
        }
    }

}
