import {fireEvent, render, screen} from "@testing-library/react";
import {ReasonForSparing} from "./ReasonForSparing";

const onChangeMock = jest.fn();
beforeEach(() => {
    render(<ReasonForSparing reason={''} onChangeReason={onChangeMock}/>);
})
test('renders test label', () => {
    const testTarget = screen.getByText("Reason For Sparing");
    expect(testTarget).toBeInTheDocument();
})

test('renders input', () => {
    const testTarget = screen.getByLabelText("Reason For Sparing");
    expect(testTarget).toBeInTheDocument();
})

test('calls change function when changed', () => {
    fireEvent.change(screen.getByLabelText("Reason For Sparing"), {target: {value: ' '}});
    expect(onChangeMock).toHaveBeenCalled();
})