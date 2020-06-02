import { remove } from 'lodash'

export default {
  namespaced: true,
  
  state: {
    items: [
      {
        id: '0',
        title: 'Task',
        status: false,
        group: 'Group 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam maiores numquam est eos consectetur voluptatem dolore nemo sequi, cupiditate reprehenderit voluptatibus eveniet. Sunt totam cumque sequi atque accusamus adipisci obcaecati soluta? Doloribus laborum ullam aperiam pariatur rerum facere perferendis obcaecati maiores. Quae illo magni fuga molestias voluptatem quis ipsam officia voluptatum error fugiat eveniet dolorum mollitia illum beatae cupiditate perspiciatis quisquam delectus nesciunt ullam ea voluptatibus neque, veniam voluptas? Enim sint deleniti, optio repellendus corporis, animi dolore culpa pariatur voluptatem cupiditate quo? Quos, quam quaerat officiis assumenda cumque tempore? Veritatis nihil aspernatur possimus tempora alias asperiores ipsam iusto quis?'
      },
      {
        id: '1',
        title: 'Lorem',
        status: true,
        group: 'Group 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod veritatis reprehenderit fugiat veniam molestiae.'
      },
      {
        id: '2',
        title: 'Ipsum',
        status: true,
        group: 'Group 1',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, sed consequuntur natus voluptate sapiente libero doloribus maxime provident expedita cum corporis illum quia modi earum laudantium reiciendis velit fuga deleniti reprehenderit neque consequatur quaerat facere soluta alias! Ab unde voluptate, nihil, aperiam architecto rerum molestiae corrupti explicabo minima illo sunt.'
      },
      {
        id: '3',
        title: 'Dolor',
        status: false,
        group: 'Group 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam maiores numquam est eos consectetur voluptatem dolore nemo sequi, cupiditate reprehenderit voluptatibus eveniet. Sunt totam cumque sequi atque accusamus adipisci obcaecati soluta? Doloribus laborum ullam aperiam pariatur rerum facere perferendis obcaecati maiores. Quae illo magni fuga molestias voluptatem quis ipsam officia voluptatum error fugiat eveniet dolorum mollitia illum beatae cupiditate perspiciatis quisquam delectus nesciunt ullam ea voluptatibus neque, veniam voluptas? Enim sint deleniti, optio repellendus corporis, animi dolore culpa pariatur voluptatem cupiditate quo? Quos, quam quaerat officiis assumenda cumque tempore? Veritatis nihil aspernatur possimus tempora alias asperiores ipsam iusto quis?'
      },
      {
        id: '4',
        title: 'Lorem',
        status: false,
        group: 'Group 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam maiores numquam est eos consectetur voluptatem dolore nemo sequi, cupiditate reprehenderit voluptatibus eveniet. Sunt totam cumque sequi atque accusamus adipisci obcaecati soluta? Doloribus laborum ullam aperiam pariatur rerum facere perferendis obcaecati maiores. Quae illo magni fuga molestias voluptatem quis ipsam officia voluptatum error fugiat eveniet dolorum mollitia illum beatae cupiditate perspiciatis quisquam delectus nesciunt ullam ea voluptatibus neque, veniam voluptas? Enim sint deleniti, optio repellendus corporis, animi dolore culpa pariatur voluptatem cupiditate quo? Quos, quam quaerat officiis assumenda cumque tempore? Veritatis nihil aspernatur possimus tempora alias asperiores ipsam iusto quis?'
      }
    ],
    primaryKeyCount: 4
  },

  mutations: {
    addTask(state, task) {
      const newTask = task

      console.log(task)

      state.primaryKeyCount = state.primaryKeyCount + 1

      newTask.id = state.primaryKeyCount

      state.items.push(newTask)
    },
    updateTask(state, newTaskData) {
      const taskId = state.items.findIndex(task => task.id == newTaskData.id)
      const updatedTask = { ...state.items[taskId], ...newTaskData }
      state.items.splice(taskId, 1, updatedTask)
    },
    removeTask(state, taskId) {
      state.items = remove(state.items, task => task.id != taskId)
    }
  }
}
