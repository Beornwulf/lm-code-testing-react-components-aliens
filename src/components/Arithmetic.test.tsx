import {fireEvent, render, screen} from "@testing-library/react";
import {Arithmetic} from "./Arithmetic";

const onChangeMock = jest.fn();
beforeEach(() => {
    render(<Arithmetic value={''} onChangeValue={onChangeMock}/>);
})
test('renders test label', () => {
    const testTarget = screen.getByText("What is 2 \+ 2");
    expect(testTarget).toBeInTheDocument();
})

test('renders select input', () => {
    const testTarget = screen.getByDisplayValue("4");
    expect(testTarget).toBeInTheDocument();
})

test('calls change function when changed', () => {
    fireEvent.change(screen.getByLabelText("What is 2 \+ 2"));
    expect(onChangeMock).toHaveBeenCalled();
})