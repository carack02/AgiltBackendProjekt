import { getCollections } from './helperFunctions.js';

collectionsOptionInit();

async function collectionsOptionInit() {
  collectionsSelect.innerHTML = '';
  collections = await getCollections('quiz');
  if (collections) {
    const option = document.createElement('option');
    option.value = 'Välj samling';
    option.textContent = 'Välj samling';
    collectionsSelect.appendChild(option);
    for (const collection of collections) {
      const option = document.createElement('option');
      option.value = collection.collectionId;

      option.textContent = collection.collectionName;
      option.name = collection.collectionName;
      console.log(collection.collectionName);
      collectionsSelect.appendChild(option);
      selectedCollectionName = collection.collectionName;
    }
  }
  console.log(collections);
  clearQuizFields();
}
