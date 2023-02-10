interface FormProps {
    speciesName: string;
    planetName: string;
    numberOfBeings: string;
    arithmetic: string;
    reasonForSparing: string;
}

export const SubmitForm: React.FC<FormProps> = ({
                                                    speciesName,
                                                    planetName,
                                                    numberOfBeings,
                                                    arithmetic,
                                                    reasonForSparing
                                                }) => {
    const onButtonClick: () => void = () => {
        console.log('Species: ' + speciesName);
        console.log('Planet: ' + planetName);
        console.log('Beings: ' + numberOfBeings);
        console.log('Arithmetic: ' + arithmetic);
        console.log('Reason: ' + reasonForSparing);
    };

    return (
        <>
            <button id='submit' type='button' onClick={onButtonClick}>Submit</button>
        </>
    )
};