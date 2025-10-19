import { render, screen, waitFor } from "@testing-library/react";
import Main from "../components/main/Main";
import { vi } from "vitest";

describe("API", () => {
  it("shows an error message if the API fails", async () => {
    
    global.fetch = vi.fn(() =>
      Promise.reject(new Error("Failed to fetch"))
    ) as any;

    render(<Main />);

    await waitFor(() => {
      expect(
        screen.getByText(/Failed to load tasks. Please try again later./i)
      ).toBeInTheDocument();
    });
  });
});
