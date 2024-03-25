import { Provider } from "react-redux";
import { store } from ".";

type propsType = {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<propsType> = ({ children }) => {

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider;