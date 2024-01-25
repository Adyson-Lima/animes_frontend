import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Animes from '../pages/Animes';

describe('Testes da tela Animes', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Animes/>
      </BrowserRouter>
    );
  });

  it('Existe card em Animes?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

  it('Existe link Novo em Animes?', () => {
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

  it('Existe tabela em Animes?', () => {
    expect(screen.getByTestId('mytable')).toBeInTheDocument();
  });

  it('Existe botão editar em Animes?', () => {
    expect(screen.getByTestId('mybtn1')).toBeInTheDocument();
  });

});