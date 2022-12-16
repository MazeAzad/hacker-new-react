
import './App.css'
import { useGlobal } from './context/context-api'
import Search from './components/searchForm';
import Pagination from './components/pagination';
import Stories from './components/stories';
import Loading from './components/loading';
const App = () => {
  const { loading } = useGlobal();
  if (loading) {
    return (
      <div className="app">
        <Search />
        <Pagination />
        <Loading />
      </div>
    )
  }
  return (
    <div className="app">
      <Search />
      <Pagination />
      <Stories />
    </div>
  )
}

export default App
