import { useState } from "react";
// styles for the container that holds the star rating component

const containerStyles = {
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  gap: "16px",
  justifyContent: "center",
};

// styles for the wrapper that holds the stars

const starsWrapperStyles = {
  display: "flex",
  alignitems: "center",
  justifyContent: "center",
};

// styles for each star

const starsStyles = {
  width: "20px",
  height: "20px",
  display: "inline-block",
  cursor: "pointer",
};

// Additional styles for focused stars to make them visible when focused

const starFocusStyles = {
  ...starsStyles,
  outline: "1px solid yellow",
};

function Rating() {
  const initialRating = 0; // Initial rating value
  const [currentRating, setCurrentRating] = useState(initialRating); // state to store the selected rating
  const [hoverRating, setHoverRating] = useState(initialRating); // state to store the rating when hovering
  const [focusedStar, setFocusedStar] = useState(null); // state to store focused stars

  // function to handle the selection of a rating
  function handleRatingSelection(currentRating) {
    setCurrentRating(currentRating);
    setHoverRating(currentRating);
    setFocusedStar(currentRating - 1);
  }

  // function to handle mouse enter event on a star
  function handleMouseEnter(currentRating) {
    setHoverRating(currentRating);
  }

  // function to handle mouse leave event on a star

  function handleMouseLeave() {
    setHoverRating(currentRating);
  }

  // function to hanlde keyboard navigation and selection of stars
  function handleKeyDown(event, index) {
    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      event.preventDefault();
      const newIndex = Math.min(index + 1, 4);
      handleRatingSelection(newIndex + 1);
      setFocusedStar(newIndex);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      event.preventDefault();
      const newIndex = Math.max(index - 1, 0);
      handleRatingSelection(newIndex + 1);
      setFocusedStar(newIndex);
    } else if (event.key === "Enter" || event.key === "") {
      event.preventDefault();
      handleRatingSelection(index + 1); // select rating
      setFocusedStar(index);
    }
  }

  return (
    <section style={containerStyles} aria-label="Star Rating">
      <ul style={starsWrapperStyles} role="list" aria-label="Star Rating">
        {Array.from({ length: 5 }, (_, index) => (
          <li key={index} style={{ position: "relative", listStyle: "none" }}>
            <Star
              index={index}
              isFilled={
                hoverRating
                  ? hoverRating >= index + 1
                  : currentRating >= index + 1
              } // Determine if the star should be filled
              onMouseEnter={() => handleMouseEnter(index + 1)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => handleRatingSelection(index + 1)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              onFocus={() => setFocusedStar(focusedStar)}
              onBlur={() => setFocusedStar(null)}
              isFocused={focusedStar === index}
              ariaLabel={`Rate ${index + 1} star`} // aria label for accessibility
              ariaPressed={currentRating >= index + 1} //aria pressed state for accessiblity
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Rating;

function Star({
  isFilled,
  onMouseEnter,
  onMouseLeave,
  onClick,
  onKeyDown,
  onFocus,
  onBlur,
  isFocused,
  ariaLabel,
  ariaPressed,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      style={isFocused ? starFocusStyles : starsStyles}
      onMouseEnter={onMouseEnter} // Mouse enter event handler
      onMouseLeave={onMouseLeave} // Mouse leave event handler
      onClick={onClick} // Click event handler
      onKeyDown={onKeyDown} // Key down event handler
      onFocus={onFocus} // focus event handler
      onBlur={onBlur} // Blur event handler
      tabIndex="0" // Make the star focusable
      role="button" // ARIA role for accessibility
      aria-label={ariaLabel} // ARIA label for accessibility
      aria-pressed={ariaPressed} // ARIA pressed state for accessibility
      focusable="true" // Ensure the star is focusable
    >
      <path
        fill={isFilled ? "yellow" : "none"} // Fill the star if it's selected
        stroke="yellow"
        strokeWidth="2"
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      />
    </svg>
  );
}
