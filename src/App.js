import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import WindowOne from "./Component/WindowOne";
import WindowTwo from "./Component/WindowTwo";
import WindowThree from "./Component/WindowThree";
function App() {
  return (
    <SplitterLayout primaryIndex={1} secondaryInitialSize={250}>
      <SplitterLayout vertical secondaryInitialSize={250}>
        <SplitterLayout secondaryInitialSize={850}>
          <WindowOne />
          <WindowTwo />
        </SplitterLayout>
        <WindowThree />
      </SplitterLayout>
    </SplitterLayout>
  );
}

export default App;
