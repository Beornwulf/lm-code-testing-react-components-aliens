import {fireEvent, render, screen} from "@testing-library/react";
import {NumberOfBeings} from "./NumberOfBeings";

const onChangeMock = jest.fn();
const labelText = "Number of Beings";

beforeEach(() => {
    render(<NumberOfBeings number={''} onChangeNumber={onChangeMock}/>);
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
    it('should correctly show an error message when the value is not a number', () => {
        fireEvent.change(screen.getByLabelText(labelText), {target: {value: 'eleven'}});
        expect(screen.queryByText("Must be a number.")).toBeInTheDocument();
    });
    it('should correctly show an error message when the value is too small', () => {
        fireEvent.change(screen.getByLabelText(labelText), {target: {value: '11'}});
        expect(screen.queryByText("Must be greater than 1 billion.")).toBeInTheDocument();
    });
    it('should not show an error message when no error is found', () => {
        fireEvent.change(screen.getByLabelText(labelText), {target: {value: '1000000000'}});
        expect(screen.queryByText("Must be a number.")).not.toBeInTheDocument();
        expect(screen.queryByText("Must be greater than 1 billion.")).not.toBeInTheDocument();
    });
})