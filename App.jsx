import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router'
import { Usercontext } from './components/context'
import Loginpage from './components/Loginpage'
import Secondpage from './components/Secondpage'
import Thirdpage from './components/thirdpage'


function App() {
  return (
    <Usercontext>
     <Router>
      <Routes>
       <Route path='/' element={<Loginpage/>}>Login</Route>
       <Route path='/secondpage' element={<Secondpage/>}>Login</Route>
       <Route path='/thirdpage' element={<Thirdpage/>}>Login</Route>
       </Routes>
     </Router>
    </Usercontext>
  )
}

export default App
