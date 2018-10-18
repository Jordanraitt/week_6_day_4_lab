document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#delete-all');
  button.addEventListener('click', handleButtonClick);
});

const handleFormSubmit = function (event){
  event.preventDefault();
  // const newListItem = document.createElement('h2'), document.createElement('h3'), document.createElement('p');
  // const newList = document.createElement('li');
  const title = document.createElement('h2');
  const author = document.createElement('h3');
  const category = document.createElement('p');

  title.textContent = `${this.title.value}`;
  author.textContent = `${this.author.value}`;
  category.textContent = `${this.category.value}`;


  const result = document.querySelector('#reading-list');
  result.appendChild(title);
  result.appendChild(author);
  result.appendChild(category);
  document.getElementById('new-item-form').reset();
};

const handleButtonClick = function (){
  const result = document.getElementById('reading-list').textContent = ''
}
