// initial state
const initState = {
	isAuth: false,
	user: {},
	profile: {},
	quotes: [],
	quotesLoad: false,
	authLoad: false
};

// basic reducer
const reducer = (state = initState, action) => {
	if (action.type === 'SET_USER') {
		return {
			...state,
			user: action.value
		};
	}

	if (action.type === 'INSERT_QUOTES') {
		let temp = [];
		for (let i in action.value) {
			temp.push({ ...action.value[i], id: i });
		}
		return {
			...state,
			quotes: temp.reverse()
		};
	}

	if (action.type === 'SET_QLOAD') {
		return {
			...state,
			quotesLoad: action.value
		};
	}

	if (action.type === 'SET_AUTH') {
		return {
			...state,
			isAuth: action.value
		};
	}

	if (action.type === 'SET_ALOAD') {
		return {
			...state,
			authLoad: action.value
		};
	}

	return state;
};

export default reducer;
