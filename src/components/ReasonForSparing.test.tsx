import {fireEvent, render, screen} from "@testing-library/react";
import {ReasonForSparing} from "./ReasonForSparing";

const onChangeMock = jest.fn();
const labelText = "Reason For Sparing";

beforeEach(() => {
    render(<ReasonForSparing reason={''} onChangeReason={onChangeMock}/>);
})

test('renders test label', () => {
    expect(screen.getByText(labelText)).toBeInTheDocument();
})

test('renders input', () => {
    expect(screen.getByLabelText(labelText)).toBeInTheDocument();
})

test('calls change function when changed', () => {
    fireEvent.change(screen.getByLabelText(labelText), {target: {value: ' '}});
    expect(onChangeMock).toHaveBeenCalled();
})

describe('provides the correct error messages', () => {
    it('should correctly show an error message when the string is the wrong size', () => {
        fireEvent.change(screen.getByLabelText(labelText), {target: {value: 'g'}});
        expect(screen.queryByText("Must be between 17 and 153 characters long.")).toBeInTheDocument();
    });
    it('should not show an error message when no error is found', () => {
        fireEvent.change(screen.getByLabelText(labelText), {target: {value: 'planet not found please try again'}});
        expect(screen.queryByText("Must be between 17 and 153 characters long.")).not.toBeInTheDocument();
    });
})