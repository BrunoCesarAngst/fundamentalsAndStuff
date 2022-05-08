//[crud]
console.log('Talking about crud');
// Primeiramente, CRUD é um acrônimo de Create(criar), Read(ler), Update(atualizar), Delete(apagar).

// Como exemplo, vamos criar um objeto que representa um app.
const app = {
  // Dentro do app, criamos arrays que são os identificadores como uma "lista" de outros objetos que a representam.
  // Como o exemplo a seguir, onde o identificador anyUsers é um array de objetos que representam usuários do app,
  anyUsers: [
    {
      id: 1,
      name: 'Jonh Doe',
    },
    // ...outros usuários
  ],
  // E o identificador anyContents que é um array de objetos que representam as inserções que os usuários fazem no app.
  anyContents: [
    {
      id: 1,
      userId: 1,
      content: 'Lorem ipsum dolor...',
    },
    // ...outras conteúdos
  ],
  // ... outros identificadores
}

// [Crud]
// Create
// Este é o método que recebe o id do usuário e um conteúdo e cria um novo conteúdo, que é mais um objeto dentro de anyContents.
function createContent ({ userId, content }) {
  // Aqui, com o método push(), vamos "empurrar" um novo objeto dentro do identificador de conteúdos.
  app.anyContents.push({
    // Aqui, vamos definir o id do novo conteúdo, pegando quantos existem mais um.
    id: app.anyContents.length + 1,
    userId,
    content,
  })
}
createContent({ userId: 1, content: 'Other content' })
console.log(app.anyContents);

// read
// Este é o método que retorna todos os conteúdos do app.
function getTheContents () {
  // Aqui, vamos retornar todos os conteúdos do app.
  return app.anyContents;
}
console.log(getTheContents());

// update
// Este é o método que recebe um id de um conteúdo e um novo conteúdo e atualiza o conteúdo.
function updateTheContent (id, content) {
  // Aqui, vamos atualizar o conteúdo que tem o id que foi passado como parâmetro.
  // O método filter() retorna um novo array com todos os elementos que passaram no teste.
  const ContentOfTheContentsThatWillBeUpdated =
    getTheContents()
      .find((
        content
      ) => {
        return content.id === id
      });

  console.log(ContentOfTheContentsThatWillBeUpdated);

  ContentOfTheContentsThatWillBeUpdated.content = content;
}
updateTheContent(1, 'New content ...');
console.log(getTheContents());

// delete
// Este é o método que recebe um id do conteúdo que vai apagado.
function deleteTheContent (id) {
  // Aqui, vamos remover o conteúdo que tem o id que foi passado como parâmetro.
  // O método filter() retorna um novo array com todos os elementos que passaram no teste.
  const ListOfUpdatedContents =
    getTheContents()
      .filter((
        content
      ) => {
        // Aqui, vamos verificar se o id do conteúdo que vai ser removido é diferente do id que foi passado como parâmetro.
        // Se for diferente, o conteúdo será retornado.
        // Se não for, o conteúdo não será retornado.
        return content.id !== id
      });
  app.anyContents = ListOfUpdatedContents;
}
deleteTheContent(1);
console.log(getTheContents());