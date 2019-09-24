import React, { useReducer } from 'react'

// reducer function includes the switch statement and all cases
// actions object
// defaultValue === default state
export default (reducer, actions, defaultValue) => {
  // Context is the context object we're gonna use to
  // get access to the inforamtion (data, state) 
  // provided by the Provider from one our child component
  const Context = React.createContext()

  // helper, provider is our component which is essentially
  // going to make our data (state) available to everything
  // else inside our app
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue)

    // We're gonna loop over all of those different actions inside
    // our actions object which are actually functions
    // We need to call those actions with dispatch
    // Dispatch is a function that we can call with
    // some action objects, and whenever we do, React 
    // is gonna take that action object and send it off to the reducer
    const boundActions = {}
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch)
    }
    
    // boundActions are functions get used to somehow change the state
    // value prop is the info actually is gonna get shared with all of
    // children components
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    )

  }

  return { Context, Provider }
}