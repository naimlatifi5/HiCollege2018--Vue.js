<template>
  <div id="app">
    <nav>
        <ul>
           <li><router-link to="/dataBinding">Two way data binding</router-link></li>
           <li><router-link to="/listConditionalRendering">List & conditional rendering</router-link></li>
           <li><router-link to="/bindingAttributes">Binding attributes&style</router-link></li>
           <li><router-link to="/instanceProperties">Data, methods, watchers, filters</router-link></li>
           <li><router-link to="/eventHandling">Event Handling</router-link></li>
           <li><router-link to="/components">Components</router-link></li>
           <li><router-link to="/props">Props</router-link></li>
           <li><router-link to="/slots">Slots</router-link></li>
        </ul>
     </nav>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111111;
}
</style>
