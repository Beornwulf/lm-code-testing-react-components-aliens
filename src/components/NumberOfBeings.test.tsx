import {fireEvent, render, screen} from "@testing-library/react";
import {NumberOfBeings} from "./NumberOfBeings";

const onChangeMock = jest.fn();
beforeEach(() => {
    render(<NumberOfBeings number={''} onChangeNumber={onChangeMock}/>);
})
test('renders test label', () => {
    const testTarget = screen.getByText("Number of Beings");
    expect(testTarget).toBeInTheDocument();
})

test('renders input', () => {
    const testTarget = screen.getByLabelText("Number of Beings");
    expect(testTarget).toBeInTheDocument();
})

test('calls change function when changed', () => {
    fireEvent.change(screen.getByLabelText("Number of Beings"), {target: {value: ' '}});
    expect(onChangeMock).toHaveBeenCalled();
})