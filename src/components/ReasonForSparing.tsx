import {useState} from "react";
import {ErrorMessage} from "./ErrorMessage";

interface ReasonForSparingProps {
    reason: string;
    onChangeReason: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const ReasonForSparing: React.FC<ReasonForSparingProps> = ({reason, onChangeReason}) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const validate: (value: string) => string | undefined = (value) => {
        if (value.length < 17 || value.length > 153) {
            return "Must be between 17 and 153 characters long.";
        }
        return undefined;
    };
    return (
        <>
            <label htmlFor='reasonForSparing'>Reason For Sparing</label>
            <textarea id='reasonForSparing' value={reason} onChange={(e) => {
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
                onChangeReason(e)
            }}/>
            <ErrorMessage message={errorMessage}/>
        </>);
};