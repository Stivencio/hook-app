export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case "add":
			return [...state, action.payload];

		case "delete":
			return state.filter((el) => el.id !== action.payload);

		case "toggle":
			return state.map((el) =>
				el.id === action.payload ? { ...el, done: !el.done } : el
			);

		case "toggle-old":
			return state.map((el) => {
				if (el.id === action.payload) {
					return {
						...el,
						done: !el.done,
					};
				} else {
					return el;
				}
			});

		default:
			return state;
	}
};
