// You do not need to change the constants
const CATEGORY_SELECTOR = 'categories-list';
const CATEGORY_FILTER = 'categories-list-filter';

let tasks = [];
let categories = [];

// REMOVE ME: SAMPLE FILLING
tasks = [
  { id: 0, title: 'Game of thrones', category: 'Movies', done: false },
  { id: 1, title: 'Toy Story 4', category: 'Movies', done: false },
];

categories = ['Movies', 'Groceries'];

renderScreen();

document.getElementById('filter-btn').onclick = function () {
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);
  renderTasks(filterTasks(tasks), 'tasks-list');
};

document.getElementById('task-btn').onclick = function () {
  addTask();
  renderScreen();
};
document.getElementById('category-btn').onclick = function () {
  addCategory();
  renderScreen();
};

function taskChecked(taskId, checked) {
  if (checked) {
    tasks[taskId].done = true;
  } else if (!checked) {
    tasks[taskId].done = false;
  }
  // console.log(`${checked ? '' : 'UN'}CHECKED TASK`, taskId);
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  tasks.push({
    id: tasks.length,
    title: getNewTaskText(),
    category: document.getElementById('categories-list').value,
    done: false,
  });
}

function addCategory() {
  const newCategory = getNewCategoryText();
  categories.push(getNewCategoryText());
}

function filterTasks(tasks) {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // continue the code here
  const filteredTasks = tasks.filter((e) => e.category == selectedCategory);

  // alert(`Category: ${selectedCategory} | done: ${done}`);
  return filteredTasks;
}

function renderScreen() {
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);
  renderTasks(tasks, 'tasks-list');
}
