<template>
  <div class="layout">
    <app-header>
      <app-navigation
        :links='[
          { url: "/task-groups", label: "Группы задач"}
        ]'
      ></app-navigation>
    </app-header>

    <main class="page container">
      <slot></slot>
    </main>

    <!-- Modals -->
    <confirm-delete-task></confirm-delete-task>
    <edit-task></edit-task>
  </div>
</template>
