export const apiURL = () => {
  if (process.env.NODE_ENV === "development" || process.NODE_ENV === "test") {
      return "http://localhost:3001";
  }
  
  return "https://powerful-hamlet-79400.herokuapp.com";
};
