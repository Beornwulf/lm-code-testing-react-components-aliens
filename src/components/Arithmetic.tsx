interface ArithmeticProps {
    value: string;
    onChangeValue: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Arithmetic: React.FC<ArithmeticProps> = ({value, onChangeValue}) => (
    <>
        <label htmlFor='arithmetic'>What is 2 + 2</label>
        <select id='arithmetic' value={value} onChange={onChangeValue}>
            <option value='4'>4</option>
            <option value='Not 4'>Not 4</option>
        </select>
    </>);