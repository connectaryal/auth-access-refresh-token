import { errorToast } from "@/components/libs/react-hot-toast";

const Footer = () => {
  return (
    <footer>
      <p>Footer</p>
      <button onClick={() => errorToast()}>Error</button>
    </footer>
  );
}

export default Footer;