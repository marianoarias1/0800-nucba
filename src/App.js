
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { Container } from './components/Container/Container';
import { Congrats } from './components/Pages/Congrats/Congrats';
import { Login } from './components/Pages/Login/Login';
import { Register } from './components/Pages/Register/Register';

const AppDiv= styled.div`
background-color: ${({theme})=> theme.bgColor};
`

function App() {
  return (
    <AppDiv className="App"> 
      <Routes>
          <Route index element={<Navigate to='home'/>}></Route>
          <Route path='home/*' element={<Container/>}></Route>
          <Route path='login/*' element={<Login/> }></Route>
          <Route path='*' element={<Navigate to='home'/>}></Route>
          <Route path='register/*' element={<Register/>}></Route>
          <Route path='congrats/*' element={<Congrats/>}></Route>
        </Routes>
    </AppDiv>
  );
}

export default App;
