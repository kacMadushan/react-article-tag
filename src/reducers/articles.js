// articles reducer
const articlesReducerDefaultState = {
    articles: [],
    loading: false,
    remove: false
}

export default (state = articlesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};