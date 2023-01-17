import React from 'react'

function Form({todo,change,addTodo,error}) {
  return (
    <form onSubmit={addTodo} className='py-3 px-4'>
        <div className='form-group row'>
            <div className='col-4'>
                <button type="submit" className='btn btn-primary'>افزودن کار</button>
            </div>
            <div className='col-8'>
                <input className='form-control-plaintext mb-2 border-bottom'
                 type="text"
                 value={todo}
                 onChange={change} />
            </div>

            {error && <small className='text-danger'>{error}</small>}
        </div>
        
    </form>
  )
}

export default Form