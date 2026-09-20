# Configurador de Voltagem para Máquinas: guia do utilizador

O Configurador de Voltagem para Máquinas calcula intervalos empíricos de tensão inicial, mecânica de curso e fichas de bancada imprimíveis para tatuadores que utilizam máquinas rotativas e de bobinas.

## Para que serve

O Configurador de Voltagem para Máquinas estabelece uma base empírica inicial para a voltagem da máquina de tatuar, a extensão do curso do excêntrico e a calibração da fonte de alimentação. Os tatuadores podem associar a arquitetura do seu equipamento, o comprimento de curso e a técnica aplicada a uma faixa inicial testada, em vez de recorrer a palpites. A ferramenta também explica a mecânica do curso, verifica a compatibilidade elétrica entre cabos e fontes de alimentação, e guarda fichas de referência personalizadas para a bancada de trabalho.

## A quem se destina

Esta ferramenta foi desenvolvida para:

- Tatuadores profissionais que configuram máquinas rotativas pen, máquinas direct drive ou máquinas de bobinas.
- Aprendizes que estudam como a voltagem, a rotação do excêntrico e a inércia do agrupamento de agulhas afetam o tecido dérmico.
- Proprietários de estúdios que pretendem estabelecer padrões operacionais homogéneos em todas as bancadas de trabalho.
- Artistas convidados ou tatuadores em viagem que precisam de calibrar fontes de bancada ou baterias sem fios desconhecidas em convenções ou estúdios parceiros.

## Como utilizar

### Cálculo da tensão base e do curso

1. Clique em `Configurador de Voltagem e Curso` na barra de navegação.
2. Em `Parâmetros Mecânicos da Máquina`, selecione `Rotativa (Direct Drive, Slider ou Modelo Pen)` ou `Máquina de Bobinas (Batedor Eletromagnético)`.
3. Escolha o seu `Comprimento de Curso (Stroke Excêntrico)` entre `2,5 mm (Curto / Sombreamentos Muito Suaves e Camadas de Grey Wash)` e `4,5 mm (Extra Longo / Traços Grossos e Magnums Pesadas)`.
4. Selecione `Linha / Traço (Lining)`, `Sombreamento Suave (Shading)`, `Preenchimento de Cor Sólida (Color Packing)` ou `Pontilhismo / Chicote (Stippling)`.
5. Em `Janela de Tensão Sugerida`, consulte o `Intervalo Básico Inicial`, a `Velocidade Relativa da Agulha`, o `Impacto Mecânico Relativo (Punch)` e o `Ciclo de Trabalho (Duty Cycle)`.
6. Clique em `💾 Salvar na Ficha 'Minhas Máquinas'` para copiar esta configuração para os seus registos.

### Comparação de curso e velocidade

1. Clique em `Visualizador de Curso e Velocidade` na barra de navegação.
2. Em `Escolha o curso para comparar:`, selecione entre `2,5 mm (Curso Curto)` e `4,5 mm (Curso Pesado)`.
3. Em `Nível de tensão inicial para teste:`, alterne entre `Voltagem Baixa`, `Voltagem Média` ou `Voltagem Alta`.
4. Analise as saídas métricas: `Curso Excêntrico:`, `Frequência Relativa de Ciclo:`, `Energia de Batida / Punch:` e `Tempo de Permanência na Pele:`.
5. Observe o esquema dinâmico que ilustra o `Deslocamento da Roda Excêntrica`, a `Extensão de Entrada da Agulha` e a `Linha Limítrofe da Derme (Superfície Cutânea)`.

### Guardar e gerir máquinas pessoais

1. Clique em `Minhas Máquinas (Ficha de Bancada)` na barra de navegação.
2. No painel `Cadastrar Regulagem de Máquina e Procedimento`, introduza o identificador em `Identificação da Máquina / Modelo *`.
3. Selecione `Modelos Rotativos` ou `Modelos de Bobinas`, especifique o `Curso da Máquina (mm) *` e selecione a `Técnica Aplicada *`.
4. Indique a `Voltagem Testada na Prática (Volts) *` e especifique o grupo em `Agrupamento de Agulha e Afiação (Taper) *`.
5. Adicione notas em `Anotações da Sessão / Observações`, selecione `Desempenho Impecável`, `Fraco Demais / Perde Força` ou `Agressivo Demais / Mastiga a Pele`, e clique em `Salvar Regulagem da Máquina`.
6. Filtre as fichas em `Fichas de Ponto Salvas` com `Todas as Máquinas Cadastradas`, `Modelos Rotativos` ou `Modelos de Bobinas`, ou clique em `Excluir Registro` para remover uma entrada.

### Verificação de ligações elétricas e fontes de alimentação

1. Clique em `Verificador de Conexão e Fonte` na barra de navegação.
2. Em `1. Conector Presente na Máquina`, escolha `Entrada Fêmea RCA (Rotativas atuais e máquinas tipo pen)` ou `Pinos para Clipcord (Máquinas tradicionais de bobinas)`.
3. Em `2. Modelo da Fonte e Amperagem Contínua`, selecione uma fonte como `Fonte Digital de Bancada (2,0 A – 3,0 A contínuos, com função jumpstart)` ou `Bateria Portátil de Lítio (Íon de lítio modular, 1500–2000 mAh)`.
4. Em `3. Cabo de Alimentação Utilizado`, escolha `Cabo RCA de Alta Condutibilidade` ou `Cabo Clipcord Convencional de Aço Mola`.
5. Clique em `Checar Compatibilidade Elétrica` para rever alertas de diagnóstico como `Cabo Desnecessário Detectado`, `Incompatibilidade Mecânica` ou `Partida com Amperagem Limitada`.

### Calibração prática pela sensibilidade e ajuste de bobinas

1. Clique em `Calibração por Sensibilidade e Guia de Bobinas / Baterias` na barra de navegação.
2. Siga os passos de teste em pele sintética: `1. Fique Atento ao Som do Motor`, `2. Analise o Fluxo do Pigmento` e `3. Mude a Tensão em Intervalos Sutis`.
3. Ajuste as máquinas de bobinas por sequência mecânica: `1. Geometria Mecânica: Haste de agulhas, grommet e biqueira devem correr centralizados sem roçar lateralmente.`, `2. Distância de Contato: Rosquear o parafuso de contato (aprox. espessura de moeda de dez centavos para traço, cinquenta centavos para sombra).`, `3. Curvatura da Mola Traseira: Ajustar a inclinação da mola para calibrar o retorno do batedor antes de mexer na fonte.` e `4. Ajuste Fino de Tensão: Acionar o botão da fonte apenas quando molas e contatos mecânicos estiverem em plena harmonia.`.
4. Considere as características das baterias sem fios: `1. Queda de Tensão sob Esforço (Voltage Sag)`, `2. Impulso Auxiliar de Partida (Jumpstart)` e `3. Instabilidade com Pouca Carga`.

### Incorporar a ferramenta no site do estúdio

1. Clique em `Código de Incorporação` na barra de navegação.
2. Localize o código sob `Copie o código iframe abaixo (aponta para o domínio oficial da Poli International):`.
3. Clique em `📋 Copiar Código de Incorporação` para copiar a tag iframe HTML.

## O que não faz

O Configurador de Voltagem para Máquinas foca-se estritamente na voltagem inicial, na dinâmica de curso e na compatibilidade de alimentação. Não disponibiliza:

- Seleção de afiação de agulhas (taper), diâmetros de cartuchos ou geometria de agrupamentos. Utilize o Seletor de Agulhas em https://poliinternational.com/needle-selector/.
- Diagnóstico elétrico de falhas de hardware em pedais avariados, fios partidos ou transformadores queimados. Utilize o Guia de Resolução de Problemas de Alimentação em https://poliinternational.com/power-supply-troubleshooter/.
- Cronogramas de manutenção preventiva, registo de substituição de molas, controlo de autoclave ou relatórios de revisão técnica. Utilize o Registo de Manutenção de Máquinas em https://poliinternational.com/machine-maintenance-logbook/.

## Onde residem os seus dados

Todos os registos de máquinas, notas de voltagem e configurações de bancada criados nesta ferramenta são guardados exclusivamente no navegador local deste dispositivo. Os dados são preservados através de `localStorage` sob a chave `poli_tattoo_machines`.

Nenhum registo, nome ou configuração de equipamento é transmitido para um servidor externo ou base de dados na nuvem. Os seus dados permanecem armazenados de sessão para sessão até que clique deliberadamente em `Excluir Registro` num cartão individual ou limpe os dados de navegação do site no seu navegador.

## Impressão e exportação

Para gerar uma ficha de bancada física para a sua estação de trabalho:

1. Clique em `Minhas Máquinas (Ficha de Bancada)` e consulte as configurações guardadas.
2. Clique em `🖨️ Imprimir Ficha de Bancada para a Estação`.
3. O navegador abre a janela de impressão com uma formatação de alto contraste adaptada que omite barras de navegação e botões interativos.
4. Imprima a tabela em papel normal A4 ou carta, plastifique a folha e fixe-a junto da sua fonte de alimentação para consulta imediata.

## Perguntas e respostas

### Que voltagem devo usar para traçar com uma máquina de tatuar rotativa?
A maioria das máquinas rotativas funciona entre 6,5 V e 8,5 V para traço, dependendo do curso do excêntrico e do binário do motor. Comece na extremidade inferior da faixa recomendada e aumente em incrementos de 0,2 V até que as linhas fiquem nítidas e saturadas numa única passagem contínua.

### Como é que o comprimento de curso influencia a voltagem da máquina de tatuar?
Um curso curto (2,5 mm a 3,0 mm) opera com ciclos rápidos e batida suave, exigindo uma voltagem ligeiramente superior para vencer a resistência da membrana dos cartuchos. Um curso longo (4,0 mm a 4,5 mm) transporta maior inércia mecânica, deslocando grupos de agulhas volumosos com voltagem moderada, embora exija uma mão mais rápida.

### Por que razão a minha máquina abranda quando a agulha toca na pele?
A resistência do tecido dérmico e a tensão da membrana do cartucho aumentam o esforço mecânico sobre o motor, provocando uma queda de tensão em fontes pequenas. Se o tom do motor cair audivelmente ao contactar com a pele, aumente a tensão entre 0,2 V e 0,4 V ou utilize uma fonte de bancada que forneça pelo menos 2,0 A contínuos.

### Posso utilizar uma máquina de bobinas com uma bateria sem fios?
As máquinas de bobinas tradicionais só devem ser ligadas a baterias sem fios concebidas especificamente para suportar cargas indutivas. As baterias comuns para máquinas rotativas não possuem amortecimento contra picos de força contraeletromotriz gerados pela faísca do parafuso de contato, o que pode sobreaquecer as células ou acionar circuitos internos de proteção.

### Qual é a diferença entre um curso de 3,5 mm e um de 4,0 mm?
Um curso de 3,5 mm equilibra velocidade de ciclo com um impacto moderado, ideal para sombreamentos suaves, degradês de wash e traços intermédios. Um curso de 4,0 mm proporciona uma oscilação de agulha mais longa e uma batida mais firme, destacando-se em linhas grossas consistentes e preenchimento sólido com magnums grandes.

### Por que motivo a minha máquina de cartuchos não arranca com baixa voltagem?
Os cartuchos contêm membranas internas de borracha que exercem resistência ao avanço do motor. Os motores rotativos sem escovas não possuem frequentemente binário de arranque suficiente para vencer essa tensão abaixo de 6,5 V sem um impulso de arranque assistido automático de 9 V a 12 V.

### Como ajusto a abertura do parafuso de contato numa máquina de bobinas?
Desaperte o parafuso de travamento e ajuste o parafuso de contato até tocar levemente na mola dianteira com o batedor em repouso. Defina uma abertura de 1,0 mm (espessura de uma moeda de dez centavos) para traço rápido, ou abra entre 1,5 mm e 2,0 mm para sombreamento mais macio.

### Aumentar a voltagem faz a máquina bater com mais força?
Numa máquina rotativa, uma voltagem superior aumenta a frequência de rotação por segundo e não a força do golpe, que é determinada pelo comprimento de curso do excêntrico. Numa máquina de bobinas, uma tensão mais alta amplia a atração magnética, aumentando a velocidade e a firmeza da batida até ao limite mecânico da mola.

## Limites

O Configurador de Voltagem para Máquinas disponibiliza valores de partida empíricos baseados em testes padrão de bancada e princípios mecânicos. Não mede a resistência interna do enrolamento do motor, o atrito do rolamento do excêntrico, a fadiga das lâminas de mola nem a rigidez particular da membrana de cada cartucho.

Além disso, esta ferramenta não avalia a elasticidade, espessura ou hidratação da pele de cada cliente individual. O tatuador permanece o único responsável por avaliar a resposta do tecido cutâneo, controlar a profundidade da agulha, escutar o som do motor e manter a voltagem de trabalho dentro dos limites estipulados pelo fabricante.
