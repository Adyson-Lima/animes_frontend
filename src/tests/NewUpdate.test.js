import { render, screen } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import NewUpdate from '../pages/NewUpdate';

describe('testes da tela NewUpdate', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <NewUpdate/>
      </BrowserRouter>
    );
  });

  it('Existe card em NewUpdate?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

  it('Existe link Home em NewUpdate?', () => {
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

});