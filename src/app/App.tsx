import Button from "../../components/atoms/button/Button"
import Form from "../../components/organisms/form/Form";

function App() {

  return (
    <>
      <Button text="Botão" onClick={() => {}}/>
        <Form onSubmit={(data) => {console.log(data)}} fields={[
          { name: "name", type: "text", label: "Nome", required: true },
          { name: "sex", type: "select", label: "Sexo", options: [
            { value: "", name: "Selecione uma opção" },
            { value: "M", name: "Homem" },
            { value: "F", name: "Mulher" },
            { value: "O", name: "Outro" },
          ] },
          { name: "checkbox", type: "checkbox", label: "Checkbox" },
          { name: "age", label: "Idade", type: "text" }
        ]} />
    </>
  )
}

export default App;
