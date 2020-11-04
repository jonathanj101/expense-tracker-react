import './App.css';
import ExpensesTable from './Components/ExpensesTable'
import UserInput from './Components/UserInput'

function App() {
  return (
    <div className="App">
      <UserInput />
      <ExpensesTable />
    </div>
  );
}

export default App;

