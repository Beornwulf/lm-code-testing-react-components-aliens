import {fireEvent, render, screen} from "@testing-library/react";
import {Arithmetic} from "./Arithmetic";

const onChangeMock = jest.fn();
const labelText = "What is 2 \+ 2";
const errorText = "Incorrect";

beforeEach(() => {
    render(<Arithmetic value={''} onChangeValue={onChangeMock}/>);
})
test('renders test label', () => {
    expect(screen.getByText(labelText)).toBeInTheDocument();
})

test('renders select input', () => {
    expect(screen.getByDisplayValue("4")).toBeInTheDocument();
})

test('calls change function when changed', () => {
    fireEvent.change(screen.getByLabelText(labelText));
    expect(onChangeMock).toHaveBeenCalled();
})

describe('provides the correct error messages', () => {
    it('should correctly show an error message when appropriate', () => {
        fireEvent.change(screen.getByLabelText(labelText), {target: {value: 'Not 4'}});
        expect(screen.queryByText(errorText)).toBeInTheDocument();
    });
    it('should not show an error message when no error is found', () => {
        fireEvent.change(screen.getByLabelText(labelText), {target: {value: '4'}});
        expect(screen.queryByText(errorText)).not.toBeInTheDocument();
    });
})