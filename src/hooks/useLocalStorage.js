import { useEffect, useState } from 'react'

// Hook personalizado: mantém um valor salvo no navegador.
export default function useLocalStorage(chave, inicial) {
  const [valor, setValor] = useState(() => {
    try { return JSON.parse(localStorage.getItem(chave)) ?? inicial }
    catch { return inicial }
  })
  useEffect(() => {
    try { localStorage.setItem(chave, JSON.stringify(valor)) }
    catch { console.warn('Não foi possível salvar no navegador.') }
  }, [chave, valor])
  return [valor, setValor]
}
