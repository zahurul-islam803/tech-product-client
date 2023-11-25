import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className={`w-full max-w-screen-2xl px-[25px] my-10 mx-auto`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

export default Container;
