interface SpeciesNameProps {
    name: string;
    onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SpeciesName: React.FC<SpeciesNameProps> = ({name, onChangeName}) => (
    <>
        <label htmlFor='speciesName'>Species Name</label>
        <input id='speciesName' type='text' value={name} onChange={onChangeName}/>
    </>);