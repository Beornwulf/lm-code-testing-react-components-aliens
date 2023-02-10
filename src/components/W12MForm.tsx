import W12MHeader from './W12MHeader';
import {SpeciesName} from "./SpeciesName";
import {Arithmetic} from "./Arithmetic";
import {PlanetName} from "./PlanetName";
import {NumberOfBeings} from "./NumberOfBeings";
import {ReasonForSparing} from "./ReasonForSparing";
import {SubmitForm} from "./SubmitForm";
import {useState} from "react";


const W12MForm = () => {

    const [speciesName, setSpeciesName] = useState<string>('');
    const [planetName, setPlanetName] = useState<string>('');
    const [numberOfBeings, setNumberOfBeings] = useState<string>('');
    const [arithmetic, setArithmetic] = useState<string>('');
    const [reasonForSparing, setReasonForSparing] = useState<string>('');

    return (
        <section className='w12MForm'>
            <W12MHeader/>
            <SpeciesName
                name={speciesName}
                onChangeName={(e: any) => setSpeciesName(e.target.value)}
            />
            <br/>
            <PlanetName
                name={planetName}
                onChangeName={(e: any) => setPlanetName(e.target.value)}
            />
            <br/>
            <NumberOfBeings
                number={numberOfBeings}
                onChangeNumber={(e: any) => setNumberOfBeings(e.target.value)}
            />
            <br/>
            <Arithmetic
                value={arithmetic}
                onChangeValue={(e: any) => setArithmetic(e.target.value)}
            />
            <br/>
            <ReasonForSparing
                reason={reasonForSparing}
                onChangeReason={(e: any) => setReasonForSparing(e.target.value)}
            />
            <br/>
            <SubmitForm
                speciesName={speciesName}
                planetName={planetName}
                numberOfBeings={numberOfBeings}
                arithmetic={arithmetic}
                reasonForSparing={reasonForSparing}
            />
        </section>
    );
};

export default W12MForm;
