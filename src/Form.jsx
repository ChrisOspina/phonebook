const Form =({addInfo, newName, handleNewName,
    newNum, handleNewNum}) =>{

        return(
            <form onSubmit={addInfo}>

                <div>
                    <h3>Add a new Number</h3>
                    <h4>name: 
                        <input 
                        value={newName}
                        onChange={handleNewName}/>
                    </h4>
                </div>
                <div>
                    <h4>Number: <input
                    value={newNum}
                    onChange={handleNewNum}/>
                    </h4>
                </div>

                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        )}
        export default Form