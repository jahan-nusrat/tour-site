export const initialState = {
	bookingInfo : [ {} ]
};

const reducer = (state, action) => {
	console.log(action);
	console.log(state);
	switch (action.type) {
		case 'BOOKING-BUTTON': {
			return {
				...state,
				bookingInfo : [
					{
						...action.item
					}
				]
			};
			break;
		}
		default:
			return state;
	}
};
export default reducer;
