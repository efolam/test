<template>
  <layout>
    <div class="page__title">Все задачи</div>

    <div class="items-list">
      <card-task
        :data="{
          id: '0',
          title: 'Task 1',
          status: false,
          group: 'Group 1',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam maiores numquam est eos consectetur voluptatem dolore nemo sequi, cupiditate reprehenderit voluptatibus eveniet. Sunt totam cumque sequi atque accusamus adipisci obcaecati soluta? Doloribus laborum ullam aperiam pariatur rerum facere perferendis obcaecati maiores. Quae illo magni fuga molestias voluptatem quis ipsam officia voluptatum error fugiat eveniet dolorum mollitia illum beatae cupiditate perspiciatis quisquam delectus nesciunt ullam ea voluptatibus neque, veniam voluptas? Enim sint deleniti, optio repellendus corporis, animi dolore culpa pariatur voluptatem cupiditate quo? Quos, quam quaerat officiis assumenda cumque tempore? Veritatis nihil aspernatur possimus tempora alias asperiores ipsam iusto quis?'
        }"
      ></card-task>

      <card-task
        :data="{
          id: '1',
          title: 'Task 2',
          status: false,
          group: 'Group 1',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod veritatis reprehenderit fugiat veniam molestiae, minima adipisci temporibus harum deserunt officia expedita tempora exercitationem nobis praesentium beatae possimus illo? Saepe magni eum velit voluptate atque, excepturi quo fugiat alias voluptas mollitia iusto nam, unde, aspernatur placeat repellat ipsam beatae similique!'
        }"
      ></card-task>
    </div>
  </layout>
</template>

<script>
import Layout from '@layouts/Default'

export default {
  components: {
    Layout
  }
}
</script>
