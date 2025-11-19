import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pressme from "./Main Page/Pressme"

const App=()=>{
return(
  <div className='w-full min-h-screen bg-gray-900'>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Pressme/>}/>
  </Routes>
</BrowserRouter>
  </div>
)
}
export default App