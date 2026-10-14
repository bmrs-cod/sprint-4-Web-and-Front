import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header({ logado, sair }) {
  const [aberto, setAberto] = useState(false)
  const fechar = () => setAberto(false)
  return <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/95 backdrop-blur">
    <nav className="wrap flex min-h-20 items-center justify-between gap-5" aria-label="Menu principal">
      <Link to="/" onClick={fechar} className="text-3xl font-black tracking-tighter">JOVI<span className="text-coral">.</span></Link>
      <button className="rounded-lg border border-ink/20 px-3 py-2 md:hidden" aria-label="Abrir menu" aria-expanded={aberto} onClick={() => setAberto(!aberto)}>☰</button>
      <div className={`${aberto ? 'flex' : 'hidden'} absolute left-0 right-0 top-20 flex-col gap-5 border-b bg-paper px-6 py-6 shadow-md md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
        {[['/#solucao', 'A Solução'], ['/#publico', 'Público-Alvo'], ['/#galeria', 'Galeria'], ['/#equipe', 'Equipe'], ['/#contato', 'Contato']].map(([url, nome]) => <a key={nome} className="text-sm font-semibold hover:text-coral" href={url} onClick={fechar}>{nome}</a>)}
        <NavLink to="/estudante" onClick={fechar} className="text-sm font-bold text-coral">Área do estudante</NavLink>
        {logado ? <button className="text-left text-sm font-semibold" onClick={() => { sair(); fechar() }}>Sair</button> : <Link to="/login" onClick={fechar} className="text-sm font-semibold">Entrar</Link>}
      </div>
    </nav>
  </header>
}
