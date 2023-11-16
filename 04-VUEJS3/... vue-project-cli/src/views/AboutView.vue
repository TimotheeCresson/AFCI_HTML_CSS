<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="documentation">
      <p>This page is designed for people who are searching for documentation</p>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .about h1 {
    font-size: 1.2em;
  }
  .documentation{
    color: black;
  }
}
</style>
