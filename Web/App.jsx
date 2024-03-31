
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppShell from './pages/AppShell'
import About  from './pages/About';

import '@mantine/core/styles.css';
import './index.css'
import Home from './pages/Home';
import Info from './pages/Info';

export default function App() {
  return <MantineProvider defaultColorScheme='dark'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppShell />} >
          <Route path='/home' element={<Home />} />
          <Route path='/info' element={< Info />} />
          <Route path='/you' element={< About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </MantineProvider>;
}