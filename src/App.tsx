// import ButtonBase from "./components/ButtonBase/ButtonBase";
// return <ButtonBase />;

const App: React.FC = () => {
  return (
    <>
      <div className="bg-blue-500 sm:bg-red-500 lg:bg-amber-900">
        <div className="card rounded-none">
          <h1 className="text-3xl font-bold  outline-dashed text-blue-500">
            Hello world!
          </h1>
          <ul>
            <li>I am first </li>
            <li>I am second</li>
            <li>I am third</li>
          </ul>
          <p>this a simle text with new fonts</p>
          <p>this a simle text with two fonts</p>

          <button className="bg-emerald-400  rounded-4xl w-50">Click me</button>
          <button className="my-custom-button"> No Click </button>
        </div>
      </div>
    </>
  );
};

export default App;
