import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
test("Should render App component", async () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const app = await screen.findByTestId("appTestId");
  expect(app).toBeInTheDocument();
});
