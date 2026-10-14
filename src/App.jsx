import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Estudante from './pages/Estudante'
import useLocalStorage from './hooks/useLocalStorage'

function RotaPrivada({ logado, children }) {
  return logado ? children : <Navigate to="/login" replace />
}
export default function App() {
  const [logado, setLogado] = useLocalStorage('jovi-logado', false)
  return <><Header logado={logado} sair={() => setLogado(false)} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login logado={logado} entrar={() => setLogado(true)} />} />
      <Route path="/estudante" element={<RotaPrivada logado={logado}><Estudante /></RotaPrivada>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes><Footer /></>
}
