let store = {
  dice:[],
  stats:{}
}

export default function Reducer ( state = store, action) {
  switch( action.type ){
    case "ADD_DICE":
      return {...state,dice:[...state.dice,action.payload]}
      case "INITIAL_DICE":
      return{...state,dice:action.payload}
      case "DELETE_DICE":
      let dice=state.dice.find(dice => dice._id===action.payload)
      let index =state.dice.indexOf(dice)
      let copy=[...state.dice]
      copy.splice(index,1)
      return{...state,dice:copy}
      case "CHANGE_DICE":
      let changeDice=state.dice.find(dice => dice._id===action.payload.id)
      let changeIndex =state.dice.indexOf(changeDice)
      changeDice.roll=action.payload.roll
      let changeCopy=[...state.dice]
      changeCopy.splice(changeIndex,1,changeDice)
      return{...state,dice:changeCopy}
      case "CHANGE_STATISTICS":
      return {...state,stats:action.payload}
    default:
      return state;
  }
}
