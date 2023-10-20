import './App.css'
import DataList from './DataList';

function App() {
  const data = [
    { id: 1, name: 'Alice', age: 25 },
    // { id: 2, name: 'Bob', age: 30 },
    // { id: 3, name: 'Charlie', age: 28 },
    // { id: 4, name: 'David', age: 35 },
    // { id: 5, name: 'Eve', age: 22 }
  ];
      return (
        <div className="App">
            <DataList  title="Veri Listesi" data={data} text="Merhaba, React!" number={42} />
        </div>
    );
}


export default App
