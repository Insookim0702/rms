const state = {
    gAppTitle: '',
    gTagChartIndex: ''
};

const actions = {};

const mutations = {
    setAppTitle(state, aTitle) {
        return (state.gAppTitle = aTitle);
    },
    setTagChartIndex(state, aIndex) {
        return (state.gTagChartIndex = aIndex);
    }
};

const getters = {
    getAppTitle: state => {
        return state.gAppTitle;
    },
    getTagChartIndex: state => {
        return state.gTagChartIndex;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
