<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="button">Button</router-link></li>
      <li><router-link to="checkbox">Checkbox</router-link></li>
      <li><router-link to="modal">Modal</router-link></li>
      <li><router-link to="tooltip">Tooltip</router-link></li>
      <br>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Компоненты',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #355b99;
    text-decoration: none;
  }

  a:hover {
    color: #ee7230;
  }
</style>
