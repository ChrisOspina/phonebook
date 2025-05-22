const Filter=({searchQuery,handleSearch})=>{
  return (
    <div className="filter-container">
        Filter shown with <input value={searchQuery} 
        onChange={handleSearch}/>
    </div>
  )
} 

export default Filter