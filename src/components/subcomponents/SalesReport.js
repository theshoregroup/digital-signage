let sales = "123,000"; //Make own component and editable from backend
export default function SalesReport() {
  return (
    <div>
        <h2 className="text-2xl text-center">Sales this week</h2>
      <h1 className="font-semibold text-6xl  ">£{sales}</h1>
      
    </div>
  );
}
