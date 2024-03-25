type propsType = {
  isBanner?: boolean;
}

const Header: React.FC<propsType> = ({ isBanner }) => {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}

export default Header;