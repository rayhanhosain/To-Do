import './Tsk.css'
function Tsk(props) {
    

    return <div >
        <div className='nmAndDscription'><p className="task-name">{props.taskName}</p>
        <p className="description">{props.descriptionField}</p>
        <div className='dltAndCmplt'><button className='complt-btn' onClick= {() => props.cmpltd(props.id)} style={{backgroundColor: props.completed ? 'green' : 'grey'}}>&#10004; Completed</button>
        <button className='dlt-btn'onClick={() => props.dlt(props.id)}>&#10006; Delete</button></div></div>
        
    </div>
}
export default Tsk;