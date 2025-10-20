import { render, screen, waitFor } from "@testing-library/react";
import Container from "../components/layout/Container";
import { vi } from "vitest";


describe("API", () => {
  it("shows an error message if the API fails", async () => {
    
    global.fetch = vi.fn(() =>
      Promise.reject(new Error("Failed to fetch"))
    ) as unknown as typeof fetch;

    render(<Container />);

    await waitFor(() => {
      expect(
        screen.getByText(/Failed to load tasks. Please try again later./i)
      ).toBeInTheDocument();
    });
  });
});
