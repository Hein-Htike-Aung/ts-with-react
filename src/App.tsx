import React from 'react'
import { fetchCharactersUsingFor, fetchCharactersUsingForEach, fetchCharactersUsingMapAndPromiseAll } from './ts/loopy-async-await'

const App = () => {

  // fetchCharactersUsingFor();
  // fetchCharactersUsingForEach();
  fetchCharactersUsingMapAndPromiseAll()

  return (
    <div>App</div>
  )
}

export default App