import{useState} from 'react'
function AddTask({onAdd}) {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)

    const onSubmit = (e)=>{
        e.preventDefault()


            if(!text){
                alert('please')
return
            }

            onAdd ({text,day,reminder})
            
            setText('')
            setDay('')
            setReminder(false)

        
    }
    return (
        <>
        <form className="formAddTask" onSubmit={onSubmit}>
            <div>
            <labal>Add text</labal>
            <input type='text' placeholder='add Text' value={text} onChange={(e)=>{setText(e.target.value)}}/>
            </div>
            <div>
            <labal>Add day</labal>
            <input type='text' placeholder='add Day' value={day} onChange={(e)=>{setDay(e.target.value)}}/>
            </div>
           <div>
           <labal>Add reminder</labal>
            <input type='checkbox'checked={reminder} value={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}}/>
          </div>
            <input  type='submit' value='save Task'/>
        </form>
        </>
    )
}

export default AddTask
