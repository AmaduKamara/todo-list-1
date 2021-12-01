const items = [
  {
    description: 'Doctor appointment at 10AM',
    completed: false,
    index: 0,
  },
  {
    description: 'Visit friends home at 12PM',
    completed: false,
    index: 1,
  },
  {
    description: 'Complete project for Microverse',
    completed: false,
    index: 2,
  },
  {
    description: 'Take programming tutorials on udemy',
    completed: false,
    index: 3,
  },
  {
    description: 'Dinner plan with family at hotel',
    completed: false,
    index: 4,
  },
];

export default function displayTask() {
  const container = document.querySelector('.list-container');
  const list = document.createElement('ul');

  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `<div class="item-conatiner"><i class="far fa-square"></i><p>${item.description}</p></div><hr>`;
    list.appendChild(listItem);
  }

  container.appendChild(list);
  const clearElement = document.createElement('p');
  clearElement.className = 'clear';
  clearElement.innerText = 'Clear all completed';
  container.appendChild(clearElement);
}