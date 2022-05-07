console.log('Falando de crud');

//[crud]
const system = {
  users: [
    {
      id: 1,
      name: 'Jonh Doe',
    }
  ],
  actions: [
    {
      id: 1,
      owner: 1,
      content: 'Lorem ipsum dolor...',
    }
  ],
}

// create
function createAction ({ owner, content }) {
  system.actions.push({
    id: system.actions.length + 1,
    owner,
    content,
  })
}
createAction({ owner: 1, content: 'Other content' })
console.log(system.actions);

// read
function getAllAction () {
  return system.actions;
}
console.log(getAllAction());

// update
function updateTheActionContent (id, content) {
  const ContentOfTheActionThatWillBeUpdated =
    getAllAction()
      .find((
        action
      ) => {
        return action.id === id
      });

  console.log(ContentOfTheActionThatWillBeUpdated);

  ContentOfTheActionThatWillBeUpdated.content = content;
}
updateTheActionContent(1, 'New action content');
console.log(getAllAction());

// delete
function deleteTheAction (id) {
  const ListOfUpdatedActions =
    getAllAction()
      .filter((
        action
      ) => {
        return action.id !== id
      });
  system.actions = ListOfUpdatedActions;
}
deleteTheAction(1);
console.log(getAllAction());