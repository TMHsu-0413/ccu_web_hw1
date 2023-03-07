const Header = document.createElement('Header');
Header.innerHTML = `
    <header class="header">
      <h2 class="Slogan">ZooTopia</h2>
      <div class="Menu">
        <a href="./index.html" class="Header_a">
          <div class="dropdown">
              <span>Home</span>
          </div>
        </a>

        <div class="dropdown">
          <span>Animals</span>
          <div class="dropdown-content">
            <a class="Header_a" href="./panda.html"><div class="items">Panda</div></a>
            <a class="Header_a" href="./cat.html"><div class="items">Cat</div></a>
          </div>
        </div>

        <div class="dropdown">
          <div>Information</div>
        </div>

        <div class="dropdown">
          <div>Email us</div>
        </div>

        <div class="dropdown">
          <span>Homework</span>
          <div class="dropdown-content">
            <a class="Header_a" href="./index.html"><div class="items">hw1</div></a>
            <div class="items">hw2</div>
            <div class="items">hw3</div>
            <div class="items">hw4</div>
            <div class="items">hw5</div>
          </div>
        </div>
      </div>
    </header>
`
return Header.innerHTML
