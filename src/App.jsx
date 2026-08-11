import ProductCard from "./components/ProductCard";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ProductCard name="iPhone 16 pro" price={799} Category="smartphone"
       Stock="In stock"/>
      <ProductCard name="Samsung s25 Ultra" price={899} />
      <ProductCard name="Macbook air m4" price={999} />
      <Counter/>
    </div>
  );
}

export default App;