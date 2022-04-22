import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import { TorrentList } from './components/TorrentList';
import { TorrentBar } from './components/TorrentBar'

function App() {
  const [movies, setMovies] = useState([])
  const [downloadPath,setDownloadPath]=useState('')

  const fetchData = async () => {
    const response = await axios.get('http://localhost:8000/movies')
    setMovies(response.data.files)
  }
  const postSearch = async (selection) =>{
    setDownloadPath(selection)
    console.log(downloadPath)
    // const response = await axios.post('hptt://localhost:8000/search',{downloadPath})
    // console.log(response)
  }

  const handleSearch= (newMovie)=>{
    
    setMovies([...movies,newMovie])
  }
  
  
  useEffect(() => {
    fetchData()
  },[])
  return (
    <div className='App'>
      <TorrentBar setSearch={handleSearch} postSearch={postSearch} />
      {movies.map(movie => (
        <TorrentList key={movie} movie={movie} />
      ))}
    </div>
  );
}

export default App;
