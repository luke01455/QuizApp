import CarQuizTypes from "./car-quiz.types";

const INITIAL_STATE = {
  carTickets: 1
};

const ticketsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CarQuizTypes.ADD_TEN_TICKETS:
      return {
        ...state,
        carTickets: state.carTickets + 10
      };
    default:
      return state;
  }
};

export default ticketsReducer;