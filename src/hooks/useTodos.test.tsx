import { render, screen, waitFor } from "@testing-library/react";
import MainContent from "../components/main/MainContent";
import { vi } from "vitest";

describe("API", () => {
  it("shows an error message if the API fails", async () => {
    
    global.fetch = vi.fn(() =>
      Promise.reject(new Error("Failed to fetch"))
    ) as any;

    render(<MainContent />);

    await waitFor(() => {
      expect(
        screen.getByText(/Failed to load tasks. Please try again later./i)
      ).toBeInTheDocument();
    });
  });
});
