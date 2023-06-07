<script>
  import 'carbon-components-svelte/css/g10.css';
</script>

<nav>
  <a href="/">dev+</a>
  <a href="/about">about</a>
  <a href="/todo">todo</a>
</nav>

<div class="main">
  <slot />
</div>

<footer>
  <span>dev+ v0.0.5</span>
</footer>

<style>
  nav {
    color: #777;
    display: flex;
    align-items: stretch;
    position: relative;
    gap: 20px;
    font-size: 14px;
    line-height: 20px;
    margin: 20px;
  }

  nav > :first-child {
    font-size: 18px;
  }

  nav a {
    color: inherit;
    text-decoration: none;
  }

  .main {
    margin: 0 20px;
    max-width: 960px;
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 14px;
    height: 20px;
    text-align: right;
    padding-right: 20px;
  }
</style>
