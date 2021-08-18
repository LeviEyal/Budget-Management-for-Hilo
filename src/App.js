import Header from "./components/Header/Header";
import CategoryNav from "./components/CategoryNav/CategoryNav";
import EditFields from "./components/EditFields/EditFields";
import FieldForm from "./components/FieldForm/FieldForm";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <CategoryNav />
      <EditFields />
      <FieldForm />
    </div>
  );
}
