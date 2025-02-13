<p  align="center"><img  src="src/Images/logo.png"  height="50"></p>

<h1  align="center"> FaceRecall</h1>
<p  align="center">Bem vindo ao Face Recall!<br/>Sistema básico para simulação de reconhecimento facial. Desenvolvido como atividade avaliativa da disciplina de <b>Programação para Web II.</b></p>


## 📄 Estrutura dos Formulários 
Todas as telas de formulários podem ser acessadas através do menu lateral.
<p>
  A funcionalidade do menu lateral será alterada para comportar a utilização de <b>rotas</b>, conteúdo da próxima aula!
</p>

### Formulário 1: Cadastro de Faces 
- **Objetivo:** Este formulário permite o cadastro de novas pessoas para o sistema de reconhecimento facial. Ele oferece a possibilidade de capturar a imagem diretamente pela câmera, realizando o mapeamento do rosto e armazenando as informações para futuras análises. 
- **Desenvolvido:** Atualmente, a funcionalidade está implementada como um formulário estático que permite o upload de uma imagem ou foto da câmera e a inserção de informações básicas da pessoa.

### Formulário 2: Reconhecimento por Upload 
- **Objetivo:** Identificação de uma ou mais faces a partir de uma imagem enviada pelo usuário. O sistema processa a imagem e verifica quais das pessoas cadastradas ou selecionadas pelo usuário estão presentes nela. 
- **Desenvolvido:** Implementado como um formulário estático que permite o upload da imagem e a seleção manual de quais pessoas devem ser analisadas (lista estática).

### Formulário 3: Reconhecimento por Câmera ao Vivo 
- **Objetivo:** Ativar a câmera do dispositivo para capturar e analisar o rosto em tempo real. A câmera permanece ativa até que o rosto seja reconhecido, momento em que é fechada automaticamente, e o resultado é enviado ao sistema. 
- **Desenvolvido:** A câmera é configurada para abrir por 3 segundos, salvando um frame a cada 0.5 segundos e salva esses frames para ação posterior.

## 🚀 Instalação e Execução
Para instalar essa aplicação o <b>Node.js</b> e o <b>npm</b> devem estar corretamente instalados em sua máquina
### 1. Instalar as dependências
```bash
npm  install
```
### 3. Rodar o sistema localmente
```bash
npm  run  dev
``` 
 Após esse comando o sistema irá iniciar em: http://localhos:5173