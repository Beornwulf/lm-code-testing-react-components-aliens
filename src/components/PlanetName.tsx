interface PlanetNameProps {
    name: string;
    onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PlanetName: React.FC<PlanetNameProps> = ({name, onChangeName}) => (
    <>
        <label htmlFor='planetName'>Planet Name</label>
        <input id='planetName' type='text' value={name} onChange={onChangeName}/>
    </>);