<template>
  <div class="layout">
    <app-header>
      <app-navigation
        :links='[
          { url: "/task-groups", label: "Все задания"}
        ]'
      ></app-navigation>
    </app-header>

    <main>
      <div class="container">
        <slot></slot>
      </div>
    </main>
  </div>
</template>
