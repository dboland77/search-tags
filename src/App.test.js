import { render } from '@testing-library/react';
import App from './App';

//This will also render Home
describe("App Component", () => {
  test("renders", () => {
    render(<App/>);
  });
});