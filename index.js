// You do not need to change the constants
const CATEGORY_SELECTOR = 'categories-list';
const CATEGORY_FILTER = 'categories-list-filter';

const tasks = [];
const categories = [];

document.getElementById('filter-btn').onclick = function () {
  renderScreen(filterTasks(tasks));
};

document.getElementById('task-btn').onclick = function () {
  addTask();
  renderScreen(tasks);
};
document.getElementById('category-btn').onclick = function () {
  addCategory();
  renderScreen(tasks);
};

function taskChecked(taskId, checked) {
  if (checked) {
    tasks[taskId].done = true;
  } else if (!checked) {
    tasks[taskId].done = false;
  }
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  tasks.push({
    id: tasks.length,
    title: taskTitle,
    category: selectedCategory,
    done: false,
  });
}

function addCategory() {
  const newCategory = getNewCategoryText();
  categories.push(newCategory);
}

function filterTasks(tasks) {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();

  if (done) {
    return tasks.filter(
      (e) => e.category == selectedCategory && e.done == true
    );
  } else {
    return tasks.filter((e) => e.category == selectedCategory);
  }
}

function renderScreen(tasks) {
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);
  renderTasks(tasks, 'tasks-list');
}
