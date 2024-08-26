import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import TextInput from "../../atoms/input/TextInput";
import SelectInput from "../../atoms/input/SelectInput";

interface IFormProps {
    onSubmit: () => void,
    fields: Array<{
        type: "text",
        label: string,
    } | {
        type: "select",
        label: string,
        options: Array<{ name: string, value: string }>,
    }>
}

const StyledForm = styled.form`
    
`;

const Form = ({ onSubmit, fields }: IFormProps) => {
    const { handleSubmit } = useForm();

    return (
        <>
            <StyledForm onSubmit={handleSubmit(onSubmit)} />
            {fields.map((field) => {
                switch (field.type) {
                    case "text":
                        return <TextInput label={field.label} />
                    case "select":
                        return <SelectInput label={field.label} options={field.options} />
                    default: 
                        throw Error;
                }
            })}
        </>
    )
}

export default Form;