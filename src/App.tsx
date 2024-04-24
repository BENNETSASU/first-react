import ListGroup from "./components/ListGroup";

function App() {
  let items = ["new york", "san franciso", "tokyo", "london", "ghana"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onselectItem={handleSelectItem}
      />
    </>
  );
}
export default App;
