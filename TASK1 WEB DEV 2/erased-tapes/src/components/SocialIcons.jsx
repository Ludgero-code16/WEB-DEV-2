
/* Reusable component for social media links */
function SocialIcons() {
  return (
    <div className="social-icons">

      {/* Facebook opens in a new browser tab */}
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Facebook"
      >
        <img src="/assets/facebook.png" alt="Facebook" />
      </a>

      {/* Instagram opens in a new browser tab */}
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Instagram"
      >
        <img src="/assets/instagram.png" alt="Instagram" />
      </a>

      {/* X replaces the old Twitter icon */}
      <a
        href="https://x.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit X"
      >
        <img src="/assets/X.jpeg" alt="X" />
      </a>

    </div>
  );
}

/* Export SocialIcons */
export default SocialIcons;
