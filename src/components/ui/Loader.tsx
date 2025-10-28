interface LoadingComponentProps {
  fullscreen?: boolean;
  isLoading?: boolean;
}

const Loader = ({ fullscreen, isLoading = true }: LoadingComponentProps) => {
  return (
    isLoading && (
      <div className={`loading-screen ${fullscreen ? "fullscreen" : ""}`}>
        <div className="spinner-border"></div>
        <div className="loading-text">Loading...</div>
      </div>
    )
  );
};

export default Loader;
