interface ReasonForSparingProps {
    reason: string;
    onChangeReason: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const ReasonForSparing: React.FC<ReasonForSparingProps> = ({reason, onChangeReason}) => (
    <>
        <label htmlFor='reasonForSparing'>Reason For Sparing</label>
        <textarea id='reasonForSparing' value={reason} onChange={onChangeReason}/>
    </>);