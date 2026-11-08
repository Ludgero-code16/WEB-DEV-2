
function Header() {
  return (
    <header className="site-header">
      <h1 className="site-logo">watch.it</h1>

      <nav className="site-nav" aria-label="Movie genres">
        <a href="#movies">Action</a>
        <a href="#movies">Comedy</a>
        <a href="#movies">Romance</a>
        <a href="#movies">Drama</a>
      </nav>

      <button className="search-button" type="button">
        SEARCH
      </button>
    </header>
  );
}

export default Header;
