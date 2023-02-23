import {ErrorMessage} from "./ErrorMessage";
import {useState} from "react";

interface SpeciesNameProps {
    name: string;
    onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SpeciesName: React.FC<SpeciesNameProps> = ({name, onChangeName}) => {

    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const validate: (value: string) => string | undefined = (value) => {
        if (value.match(/[^A-Za-z]/)) {
            return "Must not include numbers or special characters."
        }
        if (value.length < 3 || value.length > 23) {
            return "Must be between 3 and 23 characters long.";
        }
        return undefined;
    };

    return (
        <>
            <label htmlFor='speciesName'>Species Name</label>
            <input id='speciesName' type='text' value={name} onChange={(e) => {
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
                onChangeName(e);
            }}/>
            <ErrorMessage message={errorMessage}/>
        </>)
};