import {ErrorMessage} from "./ErrorMessage";
import {useState} from "react";

interface ArithmeticProps {
    value: string;
    onChangeValue: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Arithmetic: React.FC<ArithmeticProps> = ({value, onChangeValue}) => {

    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const validate: (value: string) => string | undefined = (value) => {
        if (!(value == '4')) {
            return "Incorrect"
        }
        return undefined;
    };

    return (
        <>
            <label htmlFor='arithmetic'>What is 2 + 2</label>
            <select id='arithmetic' value={value} onChange={(e) => {
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
                onChangeValue(e);
            }}>
                <option value='4'>4</option>
                <option value='Not 4'>Not 4</option>
            </select>
            <ErrorMessage message={errorMessage}/>
        </>);
};