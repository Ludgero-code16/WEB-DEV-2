
/* This component displays the website header */
function Header() {
  return (
    <header className="site-header">

      {/* Display the logo in the centre */}
      <img
        src="/assets/logo.webp"
        alt="Erased Tapes Records logo"
        className="site-logo"
      />

      {/* Three navigation links in equal columns */}
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#about">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#author">Our Story</a>
      </nav>

    </header>
  );
}

/* Export Header */
export default Header;
