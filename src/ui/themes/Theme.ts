type Theme = {
  backgroundColor: string;
  color: string;
  hyperlink: {
    color: string;
    active: string;
    hover: string;
  };
  nav: {
    backgroundColor: string;
    hyperlink: {
      color: string;
      hover: string;
    };
  };
  section: {
    borderColor: string;
  };
  card: {
    backgroundColor: string;
  };
};

export default Theme;
