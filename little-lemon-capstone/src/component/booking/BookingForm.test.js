import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByLabelText(/Choose date/i);
    expect(headingElement).toBeInTheDocument();
})

describe("BookingForm - validation", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it("keeps the submit button disabled if time is not selected", () => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatchTimes={mockDispatch}
      />
    );

    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: "2025-08-20" },
    });
    
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: "3" },
    });

    const submitButton = screen.getByRole("button", {
      name: /Make Your reservation/i,
    });

    expect(submitButton).toBeDisabled();

    const timeSelect = screen.getByLabelText(/Choose time/i);
    fireEvent.blur(timeSelect); // trigger touched for time
    expect(
      screen.getByText(/Please select a time\./i)
    ).toBeInTheDocument();
  });
});