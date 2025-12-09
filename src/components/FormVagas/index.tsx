import { FormEvent, useState } from 'react'

// import styles from './FormVagas.module.css'
import { FormStyle } from './styleForm'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormStyle onSubmit={aoEnviarForm}>
      <input
        className="campo"
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <button className="btnPesquisar" type="submit">
        Pesquisar
      </button>
    </FormStyle>
  )
}
export default FormVagas
