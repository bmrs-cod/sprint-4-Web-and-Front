
import { Link } from 'react-router-dom'

const passos = [
  ['01', 'Escolha o modo', 'Ative o Modo Estudante na câmera.'],
  ['02', 'Escolha a matéria', 'Selecione a disciplina do conteúdo.'],
  ['03', 'Tire a foto', 'Fotografe o quadro ou material.'],
  ['04', 'Encontre depois', 'Acesse o conteúdo organizado.']
]

const publico = [
  ['01', 'Ensino Médio', 'Estudantes que registram várias matérias durante as aulas.'],
  ['02', 'Universitários', 'Alunos que organizam conteúdos de diferentes disciplinas.'],
  ['03', 'Professores', 'Educadores que registram materiais de aulas e turmas.'],
  ['04', 'Famílias', 'Responsáveis que guardam atividades e materiais escolares.']
]

const exemplos = [
  ['MAT', 'Matemática'],
  ['QUI', 'Química'],
  ['HIS', 'História'],
  ['BIO', 'Biologia'],
  ['GEO', 'Geografia'],
  ['COMP', 'Computação']
]

const equipe = [
  ['BM', 'Bruno Marcelo Real e Silva', '569785'],
  ['LA', 'Luiz Ademario', '571182'],
  ['LG', 'Lucas Gaspar', '568616'],
  ['GN', 'Gustavo Noleto', '569592'],
  ['VG', 'Victor Godoy', '571454']
]

export default function Home() {
  function enviar(e) {
    e.preventDefault()
    alert('Mensagem de demonstração! O formulário não envia e-mails.')
    e.target.reset()
  }

  return (
    <main>
      <section className="wrap grid min-h-[570px] items-center gap-12 py-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow">FIAP × JOVI</p>
          <h1 className="max-w-xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl">
            Suas fotos de estudo, <span className="text-coral">no lugar certo.</span>
          </h1>
          <p className="my-7 max-w-lg text-lg leading-relaxed text-ink/70">
            O Modo Estudante permite escolher a matéria antes de fotografar.
            Assim, seus conteúdos ficam muito mais fáceis de encontrar depois.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#solucao" className="btn">Conheça a solução</a>
            <Link to="/estudante" className="btn-light">
              Testar demonstração →
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[370px] rounded-[48px] border-[12px] border-ink bg-ink p-2 shadow-2xl">
          <div className="min-h-[445px] rounded-[32px] bg-cream px-6 py-10 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-sm font-black text-coral">
              JOVI
            </div>
            <h2 className="text-2xl font-black">Modo Estudante</h2>
            <p className="my-5 text-sm text-ink/60">Escolha uma matéria</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Matemática', 'História', 'Biologia'].map(m => (
                <span key={m} className="rounded-full bg-white px-3 py-2 text-xs font-semibold">
                  {m}
                </span>
              ))}
            </div>
            <div className="mx-auto mt-14 h-24 w-24 rounded-full border-[14px] border-white bg-coral shadow-inner" />
          </div>
        </div>
      </section>

      <section id="solucao" className="section bg-cream">
        <div className="wrap">
          <p className="eyebrow">A solução</p>
          <h2 className="heading">O problema e a nossa ideia</h2>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="panel">
              <h3 className="mb-3 text-xl font-black">O problema</h3>
              <p className="leading-relaxed text-ink/70">
                Durante as aulas, muitos estudantes tiram fotos de quadros,
                exercícios e apresentações. Depois, essas imagens ficam
                misturadas com todas as outras fotos do celular.
              </p>
            </article>

            <article className="panel border-coral/40">
              <h3 className="mb-3 text-xl font-black">A solução</h3>
              <p className="leading-relaxed text-ink/70">
                Com o Modo Estudante, o aluno escolhe a matéria antes de
                fotografar. Dessa forma, o conteúdo pode ser separado e
                encontrado com mais facilidade.
              </p>
            </article>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map(([numero, titulo, texto]) => (
              <div key={numero} className="rounded-2xl bg-paper p-6">
                <strong className="text-3xl text-coral">{numero}</strong>
                <h3 className="mt-4 font-black">{titulo}</h3>
                <p className="mt-2 text-sm text-ink/70">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="publico" className="section">
        <div className="wrap">
          <p className="eyebrow">Público-alvo</p>
          <h2 className="heading">Para quem pensamos nessa solução?</h2>
          <p className="mb-9 text-ink/70">
            Pessoas que utilizam o celular durante os estudos.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {publico.map(([numero, titulo, texto]) => (
              <article key={titulo} className="panel">
                <div className="text-3xl font-black text-coral">
                  {numero}
                </div>
                <h3 className="my-4 font-black">{titulo}</h3>
                <p className="text-sm leading-relaxed text-ink/70">
                  {texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="section bg-sage">
        <div className="wrap">
          <p className="eyebrow">Galeria</p>
          <h2 className="heading">Um pouco da nossa solução</h2>
          <p className="mb-9 text-ink/70">
            Exemplos visuais das matérias que podem ser organizadas.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {exemplos.map(([sigla, titulo]) => (
              <div
                key={titulo}
                className="flex min-h-44 flex-col items-center justify-center rounded-3xl bg-white/80 shadow-sm"
              >
                <span className="text-3xl font-black text-coral">
                  {sigla}
                </span>
                <span className="mt-5 text-base font-bold">{titulo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipe" className="section">
        <div className="wrap">
          <p className="eyebrow">Nossa equipe</p>
          <h2 className="heading">Quem participou do projeto</h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {equipe.map(([iniciais, nome, rm]) => (
              <article key={rm} className="panel">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-coral/20 text-xl font-black">
                  {iniciais}
                </div>
                <h3 className="font-black">{nome}</h3>
                <p className="mt-2 text-sm text-ink/60">
                  Integrante da equipe
                </p>
                <small className="text-ink/60">RM: {rm}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="section bg-cream">
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Contato</p>
            <h2 className="heading">Quer saber mais sobre o projeto?</h2>
            <p className="text-ink/70">
              Entre em contato com nossa equipe.
              Este formulário é demonstrativo.
            </p>
          </div>

          <form onSubmit={enviar} className="panel space-y-4">
            <label className="block font-semibold" htmlFor="nome">
              Nome
            </label>
            <input id="nome" className="field" required />

            <label className="block font-semibold" htmlFor="email">
              E-mail
            </label>
            <input id="email" className="field" type="email" required />

            <label className="block font-semibold" htmlFor="mensagem">
              Mensagem
            </label>
            <textarea id="mensagem" className="field" rows="4" required />

            <button className="btn" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
