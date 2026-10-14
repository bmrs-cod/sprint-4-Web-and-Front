export default function SubjectCard({ materia, quantidade, selecionada, aoSelecionar }) {
  return <button onClick={() => aoSelecionar(materia.nome)} className={`rounded-2xl border p-5 text-left transition hover:-translate-y-1 ${selecionada ? 'border-coral bg-orange-50' : 'border-ink/10 bg-white hover:border-coral'}`}>
    <div className="mb-4 text-4xl" aria-hidden="true">{materia.icone}</div>
    <h3 className="font-bold">{materia.nome}</h3><p className="mt-1 text-sm text-ink/60">{quantidade} {quantidade === 1 ? 'foto' : 'fotos'}</p>
  </button>
}
