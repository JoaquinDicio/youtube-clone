import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Feed from './pages/Feed'
import Video from './pages/Video'
import Channel from './pages/Channel'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'
import AppContext from './context/AppContext'

function App() {
  return (
    <AppContext>
      <Container fluid className={'d-flex p-0 App bg-light'}>
        <BrowserRouter>
        <Navbar/>
        <Sidebar/>
          <Routes>
            <Route path='/' element={<Feed/>} />
            <Route path='/video/:id' element={<Video/>}/>
            <Route path='/channel/:id' element={<Channel/>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </AppContext>
  )
}

export default App
