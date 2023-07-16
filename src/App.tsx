import ItemList from "./components/ItemList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col max-w-screen items-center justify-center bg-gray-900 p-8">
      <Navbar />
      <ItemList />
    </div>
  );
}

export default App;
