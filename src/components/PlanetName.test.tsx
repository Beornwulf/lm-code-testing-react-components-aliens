import {fireEvent, render, screen} from "@testing-library/react";
import {PlanetName} from "./PlanetName";

const onChangeMock = jest.fn();
beforeEach(() => {
    render(<PlanetName name={''} onChangeName={onChangeMock}/>);
})
test('renders test label', () => {
    const testTarget = screen.getByText("Planet Name");
    expect(testTarget).toBeInTheDocument();
})

test('renders input', () => {
    const testTarget = screen.getByLabelText("Planet Name");
    expect(testTarget).toBeInTheDocument();
})

test('calls change function when changed', () => {
    fireEvent.change(screen.getByLabelText("Planet Name"), {target: {value: ' '}});
    expect(onChangeMock).toHaveBeenCalled();
})