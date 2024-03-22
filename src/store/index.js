import { defineStore } from 'pinia'
import encode from './rot13.js'

export const useStore = defineStore('store', {
	state: () => {
		return {
            flash       : null,
            attemp 		: null,

			ID          : null,
            token       : null,
		}
	},
	getters : {
        getFlash    : state => state.flash,
        getAttemp   : state => state.attemp,

		getId       : state => encode(state.ID),
        getToken    : state => encode(state.token),
	},
	actions: {
        setFlash    (payload) { this.flash = payload },
        setAttemp   (payload) { this.attemp = payload },

		setId       (payload) { this.ID = encode(payload) },
        setToken    (payload) { this.token = encode(payload) },

        $reset() {
            this.flash       = null
            this.attemp 	 = null

        	this.ID          = null
            this.token       = null
        }
	},
	persist: true
})