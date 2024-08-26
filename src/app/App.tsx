import Button from "../../components/atoms/button/Button"
import Form from "../../components/organisms/form/Form";

function App() {

  return (
    <>
      <Button text="Botão" onClick={() => {}}/>
        <Form onSubmit={() => {}} fields={[
          { type: "text", label: "Teste" },
          { type: "select", label: "Olha que bacana", options: [
            {value: "opcao1", name: "Opção 1"},
            {value: "opcao2", name: "Opção 2"},
            {value: "opcao3", name: "Opção 3"},
          ] },
        ]} />
    </>
  )
}

export default App;
