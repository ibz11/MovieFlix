
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
//components



import {Home} from './pages/Home'
import {SingleMovie} from './pages/SingleMovie'
import {NotFound} from './pages/404'

function App() {
  const client=new QueryClient()
  return (
    <div className="App">
       <QueryClientProvider client={client}>
<Router>
  <Routes>



    <Route path='/' element={<Home/>} />
    <Route path='/:id' element={<SingleMovie/>} />
    <Route path='/404' element={<NotFound />} />


  </Routes>
  
</Router>
</QueryClientProvider>
       
   
    </div>
  );
}

export default App;
