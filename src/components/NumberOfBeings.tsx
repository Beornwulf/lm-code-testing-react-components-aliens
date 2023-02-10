interface NumberOfBeingsProps {
    number: string;
    onChangeNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({number, onChangeNumber}) => (
    <>
        <label htmlFor='numberOfBeings'>Number of Beings</label>
        <input id='numberOfBeings' type='text' value={number} onChange={onChangeNumber}/>
    </>);