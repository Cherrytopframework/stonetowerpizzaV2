import './App.css';


const App = (
  // destructure the store needed to render less code
    { stores: { utilityStore } }:
    { stores?: any }
) => (
<div className="content">
    {console.log("App.stores: ", utilityStore) as any}
    <h1>Stonetower Pizza</h1>
    <p>Start building amazing things with Rsbuild.</p>
</div>
);

export default App;
