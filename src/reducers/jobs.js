import {FETCH_JOBS} from '../actions/index'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_JOBS:
      console.dir(action.payload.data.values)
      return action.payload.data.values
  }
  return state
}
