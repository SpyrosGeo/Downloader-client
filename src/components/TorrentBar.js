import {useState} from 'react'

export const TorrentBar = ({setSearch,postSearch}) => {
  const [searchInput,setSearchInput] = useState('')
  const [selectInput,setSelectInput]= useState('')

  const options = [
    {value:'movies',label:'Movies'},
    {value:'series',label:'Series'},
  ]


  const handleSumbit= (e)=>{
    e.preventDefault()
    setSearch(searchInput)
    postSearch(selectInput)
    setSearchInput('')
  } 

  const handlePathSelection =(e)=>{
    e.preventDefault()
    setSelectInput(e.target.value)
  }
  return (
    <form className='container' onSubmit={handleSumbit}>
      <label name='search'>Search</label>
        <input type='text' name='search' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
        <button type="submit">Add</button>
       <select value={selectInput} onChange={handlePathSelection}>
        {options.map(option =>(
          <option value={option.value} key={option.value}>{option.label}</option>
        ))}
        </select> 
    </form>
  )
}
