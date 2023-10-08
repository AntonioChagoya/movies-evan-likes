const { useState } = React;

import { formatDecimalAsPercentage } from '../utils/formatDecimalAsPercentage.js'

const { css } = emotion;

const list = css`
  padding: 0.5rem;
  border-radius: 0.5rem;
  
  &:hover {
    background-color: rgba(1, 156, 225, 0.2);
    transition-duration: 0.2s;
  }
`;
const link = css`
  &:hover {
    color: #FE8001;
    transition-duration: 0.2s;
    opacity: 0.8;
  }
`;

const article = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
`;

const coverImage = css`
  border-radius: 0.3rem;
`;

export const ListElement = ({ movie, review }) => {
  const [isActive, setIsActive] = useState(false);

  if (!movie) {
    return html`<li></li>`
  }

  const handleAnchorClick = (e) => {
    e.stopPropagation();
  };

  return html`
    <li onClick=${(()=> setIsActive((isActive)=> !isActive))} className=${list}>
      <span>
      (${formatDecimalAsPercentage(parseFloat(movie.score))}) ${" "}
      </span>
      <a 
        className=${link}
        href=${movie.url} 
        onClick=${handleAnchorClick}
        alt=${movie.title + " " + movie.director}
        target="_blank"
      >
        ${movie.title}
      </a>
      <span>
      (${movie.year})
      </span>

      ${isActive && 
        html`
        <article className=${article}>
          <img className=${coverImage} src=${movie['cover-url']} alt=${movie.title} />
          <p>
          ${review.review}
          </p>
        </article>
        `
      }
    </li>
  `
}
