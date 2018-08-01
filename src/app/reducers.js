import { SET_DRAWER, SET_CALENDAR_MONTH, SET_CALENDAR_YEAR } from "./consts.js";

const ui = (
  state = {
    drawer: {
      open: false
    },
    calendar: {
      month: 0,
      year: 2018
    }
  },
  action
) => {
  switch (action.type) {
    case SET_DRAWER:
      return Object.assign({}, state, {
        drawer: Object.assign({}, state.drawer, {
          open: action.open
        })
      });
    case SET_CALENDAR_MONTH:
      return Object.assign({}, state, {
        calendar: Object.assign({}, state.calendar, {
          month: action.month
        })
      });
    case SET_CALENDAR_YEAR:
      return Object.assign({}, state, {
        calendar: Object.assign({}, state.calendar, {
          year: action.year
        })
      });
    default:
      return state;
  }
};

export { ui };
