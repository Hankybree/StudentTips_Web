

export const computed = {

    //computed properties for pins
    pinId: {
        get() {
            return this.$store.state.pinId
        },
        set(newId) {
            this.$store.commit('setPinId', newId)
        }
    },
    pinTitle: {
        get() {
            return this.$store.state.pinTitle
        },
        set(newTitle) {
            this.$store.commit('setPinTitle', newTitle)
        }
    },
    pinDescription: {
        get() {
            return this.$store.state.pinDescription
        },
        set(newDescription) {
            this.$store.commit('setPinDescription', newDescription)
        }
    },
    pinImage: {
        get() {
            return this.$store.state.pinImage
        },
        set(newImage) {
            this.$store.commit('setPinImage', newImage)
        }
    },
    pinTags: {
        get() {
            return this.$store.state.pinTags
        },
        set(newTags) {
            this.$store.commit('setPinTags', newTags)
        }
    },
    pinCoordinatesX: {
        get() {
            return this.$store.state.pinCoordinates.x
        },
        set(newCoordinatesX) {
            this.$store.commit('setPinCoordinatesX', newCoordinatesX)
        }
    },
    pinCoordinatesY: {
        get() {
            return this.$store.state.pinCoordinates.y
        },
        set(newCoordinatesY) {
            this.$store.commit('setPinCoordinatesY', newCoordinatesY)
        }
    },
    pinUser: {
        get() {
            return this.$store.state.pinUser
        },
        set(newUser) {
            this.$store.commit('setPinUser', newUser)
        }
    },
    pinInt: {
        get() {
            return this.$store.state.pinInt
        },
        set(newPinInt) {
            this.$store.commit('setPinInt', newPinInt)
        }
    },
    loggedIn: {
        get() {
            return this.$store.state.loggedIn
        },
        set(newLoggedIn) {
            this.$store.commit('setLoggedIn', newLoggedIn)
        }
    },

    //testing
    center: {
        get() {
            return this.$store.state.center
        },
        set(newCenter) {
            this.$store.commit('setCenter', newCenter)
        }
    },
    zoom: {
        get() {
            return this.$store.state.zoom
        },
        set(newZoom) {
            this.$store.commit('setZoom', newZoom)
        }
    },


    //computed properties for users
    userName: {
        get() {
            return this.$store.state.userName
        },
        set(newUserName) {
            this.$store.commit('setUserName', newUserName)
        }
    },
    userPassword: {
        get() {
            return this.$store.state.userPassword
        },
        set(newUserPassword) {
            this.$store.commit('setUserPassword', newUserPassword)
        }
    },
    userEmail: {
        get() {
            return this.$store.state.userEmail
        },
        set(newUserEmail) {
            this.$store.commit('setUserEmail', newUserEmail)
        }
    }
}