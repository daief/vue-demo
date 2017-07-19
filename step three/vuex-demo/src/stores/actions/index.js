// actions
// 添加异步函数setLoading
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作
const actions = {
	setLoading ({commit}, platform) {
    	commit('SET_LOADING', platform)
  	}
}
export default actions