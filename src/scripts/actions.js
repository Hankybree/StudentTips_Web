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
        fetch('http://116.203.125.0:12001/pins', {
            body: JSON.stringify({
                pinTitle: context.state.pinTitle,
                pinDescription: context.state.pinDescription,
                pinImage: context.state.pinImage,
                pinTags: context.state.pinTags,
                pinCoordinates: context.state.pinCoordinates,
                pinUser: context.state.pinUser
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response)
            .then(result => {
                console.log(result)
            })
            context.commit('setPinTitle', "")
            context.commit('setPinDescription', "")
            context.commit('setPinCoordinatesX', 0)
            context.commit('setPinCoordinatesY', 0)
            context.commit('setPinTags', [])
    },
    patchPin(context) {
        fetch('http://116.203.125.0:12001/pins/' + context.state.pinId, {
            body: JSON.stringify({
                pinTitle: context.state.pinTitle,
                pinDescription: context.state.pinDescription,
                pinImage: context.state.pinImage,
                pinTags: context.state.pinTags,
                pinCoordinates: context.state.pinCoordinates
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PATCH'
        }).then(response => response)
            .then(result => {
                console.log(result)
            })
    },
    deletePin(context) {
        fetch('http://116.203.125.0:12001/pins/' + context.state.pinId, {
            method: 'DELETE'
        })
            .then(response => response)
            .then(result => {
                console.log(result)
            })
    }
}
