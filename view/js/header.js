var app = new Vue({
  el: '#header',
  template: `
<div class="navbar-fixed">
    <nav>
        <div class="nav-wrapper blue darken-4" style="padding-left: 20px; padding-right: 20px">
            <a href="#" class="brand-logo">Eel sample app</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a>Page1</a></li>
                <li><a>Page2</a></li>
            </ul>
        </div>
    </nav>
</div>`,
  mounted () {
    eel.print_hello_from_header();
  }
})