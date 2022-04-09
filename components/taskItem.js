function tasksItemComponent(task) {
  // You are going to add your HTML design here.
  // Do the option design in HTML page, test it, and replace it if you need instead of this code.
  // For any variables, just use the interpolation operation ${} and pass the variable
  const checked = task.done ? 'checked' : '';
  return `
              <div class="todo-item">
              <label class="container">
                <input 
                  class="checkbox" 
                  type="checkbox"
                  ${checked} 
                  onchange="taskChecked(${task.id}, this.checked)"
                />
                <span class="checkmark"></span>
                </label>
                <div class="movie-details">
                  <p class="item-category">${task.category}</p>
                  <p class="item-title">${task.title}</p>
                </div>
                
              </div>
      `;
}
