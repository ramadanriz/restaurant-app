class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <a href="#mainContent" class="skip-link">Skip to Content</a>
        <div class="app-bar-menu">
          <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar-brand">
          <h1>The Kitchen</h1>
        </div>
        <nav id="navigationDrawer" class="app-bar-navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#/favorit">Favourite</a></li>
            <li><a href="https://github.com/ramadanriz" target="_blank">About</a></li>
          </ul>
        </nav>
    `
  }
}

customElements.define('app-bar', AppBar)
