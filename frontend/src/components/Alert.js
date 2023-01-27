import React from 'react'

export default function Alert(props) {

  const change =(word)=>{
    if(word==='danger'){
      word = "Error"
    }
    else if(word==='success'){
      word= 'Success'
    }
    else if(word==='warning'){
      word='Warning'
    }
    return word;
  }

  return (
    <div style={{height: '50px'}}>
    {props.alert && 
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{change(props.alert.type)}: </strong> {props.alert.message}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>}

    </div>
  )
}