import { Provider } from "react-redux";
import { store } from "../lib/redux";
import { Routers } from "./routers";

export function Redux() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}
