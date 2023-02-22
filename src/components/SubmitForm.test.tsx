import {fireEvent, render, screen} from "@testing-library/react";
import {SubmitForm} from "./SubmitForm";
const submitForm = require("./SubmitForm")

beforeEach(() => {
    render(<SubmitForm speciesName={"Species Name"}
                       planetName={"Planet Name"}
                       numberOfBeings={"Number of Beings"}
                       arithmetic={"Answer"}
                       reasonForSparing={"Reason for Sparing"}/>);
})
test('renders button', () => {
    const testTarget = screen.getByText("Submit");
    expect(testTarget).toBeInTheDocument();
})

test.todo('calls submit function when clicked') // apparently you can't trivially do this.

