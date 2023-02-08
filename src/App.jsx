import Header from "./components/Header";
import Card from "./components/Card";
import placesData from "./data";

function App() {
  const cardElements = placesData.map((card) => (
    <Card key={card.id} {...card} />
  ));

  return (
    <main className="container">
      <Header />
      <section className="section-cards">{cardElements}</section>
    </main>
  );
}

export default App;
