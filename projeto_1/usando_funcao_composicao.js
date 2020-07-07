const path = require('path');
const fn = require('./funcoes');

const caminho = path.join(__dirname, '..', 'legendas');

const simbolos = [
  '.',
  '?',
  '!',
  '-',
  ',',
  '"',
  '♪',
  '_',
  '<i>',
  '</i>',
  '\r',
  '[',
  ']',
  '(',
  ')',
];

const palavrasMaisUsadas = fn.composicao(
  fn.lerDiretorio,
  fn.elementosTerminadosCom('.srt'),
  fn.lerArquivosSRT,
  fn.mesclarElementos,
  fn.separarTextoPor('\n'),
  fn.removerElementosSeVazio,
  fn.removerElementosSeIncluir('-->'),
  fn.removerElementosSeApenasNumero,
  fn.removerSimbolos(simbolos),
  fn.mesclarElementos,
  fn.separarTextoPor(' '),
  fn.removerElementosSeVazio,
  fn.removerElementosSeApenasNumero,
  fn.agruparElementos,
  fn.ordenarPorAtributoNumerico('quantidade', 'desc')
);

palavrasMaisUsadas(caminho).then(console.log);
