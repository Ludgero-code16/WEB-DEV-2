
/* Import React hooks */
import { useEffect, useState } from "react";

/* Import ReactMarkdown to display the article */
import ReactMarkdown from "react-markdown";

/* Import the social media icons */
import SocialIcons from "./SocialIcons";

/* Comments from the assignment */
const comments = [
  {
    name: "soundseeker92",
    text: "This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work. I wonder what you think about their older stuff?"
  },
  {
    name: "Ted Baker",
    text: "I've been following the label for years—so glad someone's finally writing about their impact."
  },
  {
    name: "Queen_of_noise",
    text: "I discovered Erased Tapes through Ólafur Arnalds—this article brought back memories of me and my friends listening together. A bit too poetic for my taste, but still compelling."
  }
];

/* Main body component */
function Body() {

  // Store the introduction
  const [introduction, setIntroduction] = useState("");

  // Store the article text
  const [article, setArticle] = useState("");

  // Store the author biography
  const [authorText, setAuthorText] = useState("");

  // Store loading errors
  const [error, setError] = useState("");

  // Load the Markdown file when the page opens
  useEffect(() => {
    fetch("/content/text-content.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Markdown file not found");
        }

        return response.text();
      })
      .then((text) => {

        // Remove bold formatting around headings
        const cleaned = text.replace(
          /^\s*\*\*(#{1,6}\s+.*?)\*\*\s*$/gm,
          "$1"
        );

        // Find the author heading
        const authorMatch = cleaned.match(
          /^#{1,6}\s+The Author\s*$/im
        );

        // Find the comments heading
        const commentsMatch = cleaned.match(
          /^#{1,6}\s+Comments\s*$/im
        );

        // Keep the article before the author section
        let articlePart = cleaned;

        if (authorMatch) {
          articlePart = cleaned.slice(0, authorMatch.index);
        } else if (commentsMatch) {
          articlePart = cleaned.slice(0, commentsMatch.index);
        }

        // Remove the original title and subtitle
        articlePart = articlePart
          .replace(/^#{1,6}\s+Erased Tapes:.*$/im, "")
          .replace(
            /^#{1,6}\s+Exploring the Sonic Frontier\s*$/im,
            ""
          )
          .replace(
            /^Exploring the Sonic Frontier\s*$/im,
            ""
          )
          .trim();

        // Find the first Heading section
        const headingPosition = articlePart.search(
          /^#{1,6}\s+Heading\s*$/im
        );

        // Separate the introduction from the columns
        if (headingPosition !== -1) {
          setIntroduction(
            articlePart.slice(0, headingPosition).trim()
          );

          setArticle(
            articlePart.slice(headingPosition).trim()
          );
        } else {
          setIntroduction(articlePart);
          setArticle("");
        }

        // Extract the original author biography
        if (authorMatch) {
          const authorStart =
            authorMatch.index + authorMatch[0].length;

          const authorEnd = commentsMatch
            ? commentsMatch.index
            : cleaned.length;

          const biography = cleaned
            .slice(authorStart, authorEnd)
            .replace(/^Copyright.*$/gim, "")
            .trim();

          setAuthorText(biography);
        }

      })
      .catch(() => {
        setError("Unable to load the article.");
      });
  }, []);

  return (
    <main className="main-content">

      {/* Main blog article */}
      <article id="about" className="blog-article">

        {/* Main title */}
        <h1>Erased Tapes:</h1>

        {/* Article subtitle */}
        <h2 className="article-subtitle">
          Exploring the Sonic Frontier
        </h2>

        {/* Introduction spans the full article width */}
        <div className="article-introduction">
          <ReactMarkdown>{introduction}</ReactMarkdown>
        </div>

        {/* Remaining article in three columns */}
        <div className="article-text">
          <ReactMarkdown>{article}</ReactMarkdown>
        </div>

        {/* Display errors if content fails to load */}
        {error && <p>{error}</p>}

      </article>

      {/* Album gallery section */}
      <section
        id="artists"
        className="album-gallery"
        aria-label="Album gallery"
      >

        {/* Large image on the left */}
        <img
          src="/assets/album1.png"
          alt="Featured album"
          className="album-large"
        />

        {/* Four smaller images on the right */}
        <div className="album-small-grid">
          <img src="/assets/album2.png" alt="Album 2" />
          <img src="/assets/album3.png" alt="Album 3" />
          <img src="/assets/album4.png" alt="Album 4" />
          <img src="/assets/album5.png" alt="Album 5" />
        </div>

      </section>

      {/* Author section */}
      <section id="author" className="author-section">

        {/* Author biography */}
        <div className="author-text">
          <h2>The Author</h2>
          <ReactMarkdown>{authorText}</ReactMarkdown>
        </div>

        {/* Circular author photograph */}
        <img
          src="/assets/author.png"
          alt="Blog author"
          className="author-image"
        />

        {/* Vertical social media icons */}
        <SocialIcons />

      </section>

      {/* Comments section */}
      <section id="contact" className="comments-section">

        <h2>Comments</h2>

        {/* Display all three comments */}
        {comments.map((comment) => (
          <div className="comment" key={comment.name}>
            <h3>{comment.name}</h3>
            <p>{comment.text}</p>
          </div>
        ))}

      </section>

    </main>
  );
}

/* Export Body */
export default Body;
