# ERP para gestão de prontuário médico

## Scripts disponíveis

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Telas
1. tela de login/cadastro de médico:
tela inicial do sistema, aqui o usuário preenche com suas informações
e loga no sistema, vendo inicialmente o dashboard. Ou se cadastra caso
não seja cadastrado.

2. dashboard geral do médico:
o dashboard mostrará cards com o número total de pacientes atendido por ele
quantos prontuários ele realizou e um card com o nome do paciente que ele mais
atendeu.

3. buscar paciente: por nome ou CPF:
Uma tela de busca de paciente, caso não seja encontrado nenhum paciente,
retornar a tela de criação de paciente. A alteração de informações de exames
só pode ser feita pelo médico que o criou.

4. informações do paciente (nome, cpf, e prontuários):
Uma tela com as informações do paciente. Mostra também uma lista de prontuários.
Tem que ter um botão para criar novo prontuário.

5. novo atendimento: criar prontuário:
inserir nome do paciente e cadastrar novo exame.

6. informações de um prontuário:
nome do paciente, nome do médico e uma lista de exames feitos. Não pode excluir
prontuário com exame!
