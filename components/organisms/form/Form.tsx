import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { styled } from "styled-components";
import TextInput from "../../atoms/input/TextInput";
import SelectInput from "../../atoms/input/SelectInput";
import CheckboxInput from "../../atoms/input/CheckboxInput";
import Button from "../../atoms/button/Button";
import { z } from "zod";
import StyledInputWrapper from "../../atoms/input/InputWrapper";
import SubmitInput from "../../atoms/input/SubmitInput";

const FieldSchema = z.union([
    z.object({
        name: z.string(),
        type: z.enum(["text", "checkbox"]),
        label: z.string(),
        required: z.boolean().optional(),
    }),
    z.object({
        name: z.string(),
        type: z.literal("select"),
        label: z.string(),
        options: z.array(
            z.object({ name: z.string(), value: z.string() })
        ),
        required: z.boolean().optional(),
    })
])

type IFieldProps = z.infer<typeof FieldSchema>;

interface IFormProps {
    onSubmit: SubmitHandler<FieldValues>,
    fields: Array<IFieldProps>,
}

const StyledForm = styled.form`
    
`;

const Form = ({ onSubmit, fields }: IFormProps) => {
    const { handleSubmit, register } = useForm();

    return (
        <>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field, index) => {
                    switch (field.type) {
                        case "text":
                            return <TextInput key={index} register={register} name={field.name} label={field.label} required={field.required} />
                        case "select":
                            return <SelectInput key={index} register={register} name={field.name} label={field.label} options={field.options} required={field.required} />
                        case "checkbox":
                            return <CheckboxInput key={index} register={register} name={field.name} label={field.label} required={field.required} />
                        default: 
                            return;
                    }
                })}
                <SubmitInput />
            </StyledForm>
        </>
    )
}

export default Form;