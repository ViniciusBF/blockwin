# 🔆 <strong>Boas vindas ao repositório do Hackathon T22!</strong>

![Hackaton T22](./readmeImg/06-LOGO.png)

## 🛑 <strong>Termos de uso</strong>
​
Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.
​<br>


## 🚫 <strong>Regras </strong>
> 01 - <br>
> 02 - <br>
> 03 - <br>
> 04 - <br>
> 05 - <br>
> 06 - <br>
> 07 - <br>
> 08 - <br>
> 09 - <br>
> 10 - <br>

<br>

# <strong>📗 Sumário</strong>
- ## ☑️ [Entregáveis](#entregáveis)
  * [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  * [A Klever Extension](#a-klever-extension)
  * [Demonstração de conexão com extensão](#demonstracao-de-conexao-com-extensão)
  * [Data de entrega](#data-de-entrega)
​<br><br>
- ## ☑️ [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  * [Durante o desenvolvimento](#durante-o-desenvolvimento)
​<br><br>
- ## ☑️ [Como desenvolver](#como-desenvolver)
  * [Sugestões de aplicações](#sugestões-de-aplicações)
​<br><br>
- ## ☑️ [Perguntas Frequentes](#perguntas-frequentes)
​
# 📝 Entregáveis
​
Para desenvolver este projeto, esperamos que vocês criem uma branch principal para o grupo, e abram um Pull Request neste repositório a partir dela.
​<br>
Sugerimos que inclua o número ou nome do grupo no nome da branch, para facilitar identificação. 
```bash
Exemplo: "grupo-1-branch-main".
```
​
## `O que deverá ser desenvolvido`
<details>
<summary><strong>O desafio é desenvolver uma aplicação que utilize a Klever Browser Extension:</strong></summary>
​

- A extensão permite que os usuários listem suas transações, recebam fundos, gerenciem 
várias contas, gerem e redefinam suas contas e, mais importante, integrem-no ao
KleverChain Explorer para visualizar cada transação.
​
- Devido as facilidades que a Klever Extension nos entrega, o objetivo é utilizar a criatividade
para desenvolver soluções para nosso dia-a-dia em que o usuário possa utilizar a
extension.
<br>

​
### `A Klever Extention`
​
Para efetuar o download da Klever extension:
```bash
1. Acesse a url: https://chrome.google.com/webstore/detail/klever-wallet/lmbifcmbofehdpolpdpnlcnanolnlkec
2. Certifique-se que está logado na conta gmail que você forneceu durante a inscrição para o Hackathon.
3. Crie seu login seguindo os comandos da extensão.
```

</details>
​

# Demonstração de conexão com extensão
​
Esta demonstração serve para mostrar de forma prática como se conectar aos provedores suportados pela Extensão Klever 
```bash
https://github.com/klever-io/klever-extension-demo
​
```

# Imagens da extensão
![Hackaton T22 - Wallet01](./readmeImg/walletImg.jpg) <br>

![Hackaton T22 - Wallet02](./readmeImg/walletImg2.jpg)

### 📆 `Data de entrega`
- Data para entrega será no domingo (11/12) até as 14:59 horas.<br>
- As apresentações do projeto iniciarão às 15:00 do domingo. Serão aceitas apenas submissões feitas até às 14:59.
​
# Instruções para entregar seu projeto
​<details>
<summary><strong>‼ Antes de começar a desenvolver</strong></summary>

1. Faça um clone do projeto
​
2. Crie uma branch principal para o grupo, a partir da main.
​
 * Sugerimos a utilização do nome ou número do grupo na branch principal para facilitar a identificação.
​
3. Faça alterações separadas por novas branchs criadas a partir da branch `branch-main-do-grupo`, criando uma nova branch para cada demanda
  * Verifique que você está na branch `branch-main-do-grupo`
    * Exemplo: `git branch`
    
  * Se não estiver, mude para a branch `branch-main-do-grupo`
    * Exemplo: `git checkout branch-main-do-grupo && git pull`
  * Agora, crie uma branch para a demanda que você vai desenvolver do seu projeto
    * Você deve criar uma branch com uma breve descrição da demanda a ser desenvolvida
    * Exemplo: `git checkout -b branch-main-do-grupo-cria-campo-de-input`
​
4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listadas as novas alterações em vermelho)
  * Adicione o arquivo alterado ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listadas as novas alterações em verde)
  * Faça seus `commit`
      * Exemplo:
        * `git commit -m 'cria componente de input`
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )
​
5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin branch-main-do-grupo-cria-campo-de-input`
​
6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub]
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a branch do grupo, `branch-main-do-grupo`, e a sua branch **com atenção**
  * Coloque um título para a sua _Pull Request_
    * Exemplo: _"[GRUPO XX] Cria tela de busca"_
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório] e confira que o seu _Pull Request_ está criado
​
7. Assim que aprovado por pelo menos duas pessoas do seu grupo e o _Linter_ estiver adereçado, acesse **SEU** _Pull Request_ e clique no botão _"Merge pull request"_
</details>
<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary>

* Faça `commits` das alterações que você fizer no código regularmente
​
* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto
​
* Os comandos que você utilizará com mais frequência são:
​
1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
​
2. `git add` _(para adicionar arquivos ao stage do Git)_
​
3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
​
4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
​
        * `git commit -m 'cria componente de input`
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )
​
5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin branch-main-do-grupo-cria-campo-de-input`
​
6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub]
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a branch do grupo, `branch-main-do-grupo`, e a sua branch **com atenção**
  * Coloque um título para a sua _Pull Request_
    * Exemplo: _"[branch-main-do-grupo] Cria tela de busca"_
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório] e confira que o seu _Pull Request_ está criado
  </details>


<details>
  <summary><strong>📊 Durante o desenvolvimento </strong></summary><br />

* Faça `commits` das alterações que você fizer no código regularmente
​
* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto
​
* Os comandos que você utilizará com mais frequência são:
​
1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
​
2. `git add` _(para adicionar arquivos ao stage do Git)_
​
3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
​
4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
​
5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_
</details>​

# 🛠 Como desenvolver
​
Este repositório não conta com branches para cada grupo, então cada um será responsável por criar a branch principal do grupo e abrir o Pull Request a partir dela.
​
- Recomendamos que utilize o nome ou número do grupo na branch, para facilitar a identificação dos responsáveis. 
```bash
Exemplo: "grupo-1-hackathon".
```
# Sugestões de aplicações
​
## ⚽️ Jogos

<details>
  <summary><strong>🤑 Mega-Sena </strong></summary><br />

- O jogador deve escolher 6 números dentre 60
- Deve ser feita uma transação para confirmar a aposta
- Com a aposta confirmada, exibir os números selecionados e executar o sorteio
- O usuário ganha se sair seus 6 números sorteados dentre os 60
- Caso tenha ganho, exibir para o usuário quanto ele ganhou e que uma
transação será feita com o valor
- Caso não ganhe exibir uma mensagem e uma opção para tentar novamente
</details>
<details>

  <summary><strong>🔖 Raspadinha </strong></summary><br />

- O jogador deve comprar uma raspadinha
- cada raspadinha possui 5 estrelas cinzas
- Deve ser feita uma transação para confirmar a compra
- Com a aposta confirmada, executar o sorteio
- O usuário ganha se sair 3 estrelas da mesma cor, teremos 3 possíveis cores
(azul, verde e amarelo)
- Caso tenha ganho, exibir para o usuário quanto ele ganhou e que uma
transação será feita com o valor
- Caso não ganhe exibir uma mensagem e uma opção para tentar novamente
</details>

<details>
  <summary><strong>🩳 Loja Virtual </strong></summary><br />

- Criar uma página com listagem de produtos
- Ao clicar em um produto deve ir para a página de detalhe do produto
- nome, images, descrição, valor, botão de compra
- Quando o usuário clicar para comprar, deve ser feita uma transação para confirmar a
compra
- Ao confirmar a transação deve exibir uma mensagem de confirmação de compra
</details>

<details>
  <summary><strong>🙏 Doação </strong></summary><br />

- Criar uma página para uma causa social instituição receber doação para uma causa
social
- imagens
- descrição e ações da causa
- quem apoia
- valor total já foi doado
- exibir últimas doações
- botão de doação
- O usuário pode doar através de uma transação
- Exibir uma mensagem de agradecimento
</details>


