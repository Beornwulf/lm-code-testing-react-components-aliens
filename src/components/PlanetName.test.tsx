import {fireEvent, render, screen} from "@testing-library/react";
import {PlanetName} from "./PlanetName";

const onChangeMock = jest.fn();
const labelText = "Planet Name";

beforeEach(() => {
    render(<PlanetName name={''} onChangeName={onChangeMock}/>);
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
    it('should correctly show an error message when the value includes special characters', () => {
        fireEvent.change(screen.getByLabelText(labelText), {target: {value: '^hdfh'}});
        expect(screen.queryByText("Must not include special characters.")).toBeInTheDocument();
    });
    it('should correctly show an error message when the string is the wrong size', () => {
        fireEvent.change(screen.getByLabelText(labelText), {target: {value: 'g'}});
        expect(screen.queryByText("Must be between 2 and 49 characters long.")).toBeInTheDocument();
    });
    it('should not show an error message when no error is found', () => {
        fireEvent.change(screen.getByLabelText(labelText), {target: {value: 'planet'}});
        expect(screen.queryByText("Must not include special characters.")).not.toBeInTheDocument();
        expect(screen.queryByText("Must be between 2 and 49 characters long.")).not.toBeInTheDocument();
    });
})