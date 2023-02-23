import {useState} from "react";
import {ErrorMessage} from "./ErrorMessage";

interface NumberOfBeingsProps {
    number: string;
    onChangeNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({number, onChangeNumber}) => {

    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const validate: (value: string) => string | undefined = (value) => {
        const number = parseInt(value);
        if (isNaN(number)) {
            return "Must be a number."
        }
        if (number < 1000000000) {
            return "Must be greater than 1 billion.";
        }
        return undefined;
    };

    return (
        <>
            <label htmlFor='numberOfBeings'>Number of Beings</label>
            <input id='numberOfBeings' type='text' value={number} onChange={(e) => {
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
                onChangeNumber(e);
            }}/>
            <ErrorMessage message={errorMessage}/>
        </>)
};