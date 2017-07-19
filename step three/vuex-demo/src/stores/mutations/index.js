// mutations
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
// 添加同步函数
const mutations = {
	// 可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）
	SET_LOADING (state, platform) {
		state.isLoading = platform
	}
}
export default mutations