function MyList (props){
    return(
        
        <div>
            {
                props.list.map((lists) =>{
                    return <div className="wrapper box">{lists}</div>;})
            }
            
        </div>
    
    );
}

export default MyList;