
const FeedbackOptions = ({ children, onFeedback }) => {
  return (
    <>
      {children.map(child => {
        return (
          <button
            onClick={() => {
              onFeedback(child);
            }}
            type="button"
            name={child}
            key={child}
          >
            {child}
          </button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;
