const Filter=({searchQuery,handleSerach})=>{
  return (
    <div>
        Filter shown with <input value={searchQuery} 
        onChange={handleSerach}/>
    </div>
  )
}
export default Filter