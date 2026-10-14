import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Login({ logado, entrar }) {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const navegar = useNavigate()
  if (logado) return <Navigate to="/estudante" replace />
  function enviar(e) {
    e.preventDefault()
    if (usuario === 'aluno' && senha === 'jovi123') { entrar(); navegar('/estudante') }
    else setErro('Usuário ou senha incorretos.')
  }
  return <main className="wrap flex min-h-[72vh] items-center justify-center py-16"><div className="panel w-full max-w-md">
    <p className="eyebrow">Modo Estudante</p><h1 className="heading">Entrar na demonstração</h1>
    <p className="mb-6 text-sm text-ink/70">Acesso de teste: <strong>aluno</strong> / <strong>jovi123</strong>. Não utilize senhas reais.</p>
    <form onSubmit={enviar} className="space-y-4"><label className="block font-semibold" htmlFor="usuario">Usuário</label><input id="usuario" autoComplete="username" className="field" value={usuario} onChange={e => setUsuario(e.target.value)} required /><label className="block font-semibold" htmlFor="senha">Senha</label><input id="senha" type="password" autoComplete="current-password" className="field" value={senha} onChange={e => setSenha(e.target.value)} required />{erro && <p role="alert" className="text-sm font-bold text-red-700">{erro}</p>}<button className="btn w-full">Entrar</button></form>
  </div></main>
}
