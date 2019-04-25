const app = {
    state: {
        title: '',
        showLArrow: true,
        rightText:'',
        needTools: true,
        activeNum: 0,
        direction: 'forward'
    },
    mutations: {
        TOGGLE_TITLE: (state, payload) => {
             state.title = payload.title
        },
        TOGGLE_LARROW: (state, payload) => {
            state.showLArrow = payload.showLArrow
        },
        TOGGLE_RIGHT_TEXT: (state, payload) => {
            state.rightText = payload.rightText
        },
        TOGGLE_TOOLS: (state, payload) => {
            state.needTools = payload.needTools
        },
        TOGGLE_NUM: (state, payload) => {
            state.activeNum = payload.activeNum
        },
        UPDATE_DIRECTION: (state, payload) => {
            state.direction = payload.direction
        },

    },
    actions: {
        ToggleTitle: ({ commit },payload) => {
            commit('TOGGLE_TITLE', payload)
        },
        ToggleLArrow:({commit}, payload) => {
            commit('TOGGLE_LARROW', payload)
        },
        ToggleLRightText:({commit}, payload) => {
            commit('TOGGLE_RIGHT_TEXT', payload)
        },
        ToggleTools:({commit}, payload) => {
            commit('TOGGLE_TOOLS', payload)
        },
        ToggleNum:({commit}, payload) => {
            commit('TOGGLE_NUM', payload)
        },
        ToggleDire:({commit}, payload) => {
             commit('UPDATE_DIRECTION', payload)

        }
    }
}

export default app

