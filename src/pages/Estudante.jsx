import { useEffect, useState } from 'react'
import SubjectCard from '../components/SubjectCard'
import useLocalStorage from '../hooks/useLocalStorage'

export default function Estudante() {
  const [materias, setMaterias] = useState([])
  const [erro, setErro] = useState('')
  const [materia, setMateria] = useState('Todas')
  const [fotos, setFotos] = useLocalStorage('jovi-fotos', [])
  const [titulo, setTitulo] = useState('')
  const [arquivo, setArquivo] = useState(null)
  useEffect(() => {
    fetch('/data/materias.json')
      .then(res => { if (!res.ok) throw new Error('Falha na API simulada'); return res.json() })
      .then(setMaterias)
      .catch(() => setErro('Não foi possível carregar as matérias.'))
  }, [])
  const visiveis = materia === 'Todas' ? fotos : fotos.filter(foto => foto.materia === materia)
  function adicionar(e) {
    e.preventDefault()
    if (!arquivo || materia === 'Todas') return alert('Escolha uma matéria e uma imagem.')
    if (!arquivo.type.startsWith('image/')) return alert('Selecione uma imagem válida.')
    if (arquivo.size > 1200000) return alert('Escolha uma foto menor que 1,2 MB para armazenar neste navegador.')
    const leitor = new FileReader()
    leitor.onload = () => {
      const nova = { id: crypto.randomUUID(), titulo: titulo.trim(), materia, imagem: leitor.result }
      setFotos(anteriores => [nova, ...anteriores])
      setTitulo(''); setArquivo(null); e.target.reset()
    }
    leitor.readAsDataURL(arquivo)
  }
  function excluir(id) { if (confirm('Deseja excluir esta foto?')) setFotos(anteriores => anteriores.filter(f => f.id !== id)) }
  return <main className="wrap section min-h-[75vh]">
    <p className="eyebrow">Área do estudante · demonstração</p><h1 className="heading">Suas matérias, suas fotos.</h1>
    <p className="mb-8 max-w-2xl text-ink/70">Selecione uma matéria, adicione uma imagem do seu dispositivo e encontre-a depois. As fotos ficam armazenadas apenas neste navegador.</p>
    <h2 className="mb-4 text-xl font-black">Escolha uma matéria</h2>
    {erro && <p role="alert" className="mb-4 text-red-700">{erro}</p>}
    <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{materias.map(m => <SubjectCard key={m.id} materia={m} quantidade={fotos.filter(f => f.materia === m.nome).length} selecionada={materia === m.nome} aoSelecionar={setMateria} />)}</div>
    <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
      <section className="panel self-start"><h2 className="mb-2 text-2xl font-black">Adicionar foto</h2><p className="mb-5 text-sm text-ink/60">Matéria selecionada: <strong>{materia}</strong></p>
        <form onSubmit={adicionar} className="space-y-4"><label htmlFor="titulo" className="block font-semibold">Título da foto</label><input id="titulo" className="field" value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Ex.: Exercício da aula" maxLength={70} required /><label htmlFor="imagem" className="block font-semibold">Imagem (até 1,2 MB)</label><input id="imagem" className="field" type="file" accept="image/*" onChange={e => setArquivo(e.target.files[0] || null)} required /><button className="btn w-full" type="submit">Salvar foto</button></form>
      </section>
      <section><div className="mb-4 flex flex-wrap items-center justify-between gap-3"><h2 className="text-2xl font-black">Galeria ({visiveis.length})</h2><button onClick={() => setMateria('Todas')} className="btn-light text-sm">Ver todas</button></div>
        {visiveis.length === 0 ? <div className="rounded-3xl border-2 border-dashed border-ink/20 p-12 text-center text-ink/60">Nenhuma foto nesta seleção. Adicione sua primeira imagem!</div> : <div className="grid gap-4 sm:grid-cols-2">{visiveis.map(f => <article key={f.id} className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm"><img src={f.imagem} alt={f.titulo} className="h-48 w-full object-cover" /><div className="p-4"><h3 className="break-words font-bold">{f.titulo}</h3><p className="mb-3 text-sm text-ink/60">{f.materia}</p><button className="text-sm font-bold text-red-700 hover:underline" onClick={() => excluir(f.id)}>Excluir foto</button></div></article>)}</div>}
      </section>
    </div>
  </main>
}
