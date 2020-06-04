export const computed = {

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
    userName: {
        get() {
            return this.$store.state.userName
        },
        set(newUser) {
            this.$store.commit('setUserName', newUser)
        }

    },
    password: {
        get() {
            return this.$store.state.password
        },
        set(userPassword) {
            this.$store.commit('setPassword', userPassword)
        }

    }
}
