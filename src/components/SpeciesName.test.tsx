import {fireEvent, render, screen} from "@testing-library/react";
import {SpeciesName} from "./SpeciesName";

const onChangeMock = jest.fn();
beforeEach(() => {
    render(<SpeciesName name={''} onChangeName={onChangeMock}/>);
})
test('renders test label', () => {
    const testTarget = screen.getByText("Species Name");
    expect(testTarget).toBeInTheDocument();
})

test('renders input', () => {
    const testTarget = screen.getByLabelText("Species Name");
    expect(testTarget).toBeInTheDocument();
})

test('calls change function when changed', () => {
    fireEvent.change(screen.getByLabelText("Species Name"), {target: {value: ' '}});
    expect(onChangeMock).toHaveBeenCalled();
})