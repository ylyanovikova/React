const Dog = ({dog})=>{
    return(
        <div>
            {dog.id} - {dog.name}
            <button>Delete</button>
        </div>
    )
};

export {Dog}