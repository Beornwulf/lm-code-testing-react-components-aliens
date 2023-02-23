import {useState} from "react";
import {ErrorMessage} from "./ErrorMessage";

interface PlanetNameProps {
    name: string;
    onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PlanetName: React.FC<PlanetNameProps> = ({name, onChangeName}) => {

    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const validate: (value: string) => string | undefined = (value) => {
        if (value.match(/\W/)) {
            return "Must not include special characters."
        }
        if (value.length < 3 || value.length > 23) {
            return "Must be between 2 and 49 characters long.";
        }
        return undefined;
    };

    return (
        <>
            <label htmlFor='planetName'>Planet Name</label>
            <input id='planetName' type='text' value={name} onChange={(e) => {
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
                onChangeName(e);
            }}/>
            <ErrorMessage message={errorMessage}/>
        </>);
};