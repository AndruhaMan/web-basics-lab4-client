import { HashRouter, Route, Routes } from 'react-router-dom';
import socketIO from 'socket.io-client';
import { Login } from './components/Login';
import './App.scss';
import { ChatPage } from './components/ChatPage';
import { Header } from './components/Header';

const socket = socketIO.connect('https://web-basics-lab4-server.onrender.com/');


export const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<ChatPage socket={socket} />} />
        </Routes>
      </HashRouter>
      </main>
    </>
  );
}
