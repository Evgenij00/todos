import React from 'react'

import './StatusesTodos.scss'

export const StatusesTodos = ({ done, inProcess }) => {

  return (
    <div className="statuses">
      <span>выполнено</span>&nbsp;
      <span className="statuses__done">{done}</span>&nbsp;
      <span>/ в процессе</span>&nbsp;
      <span className="statuses__in-process">{inProcess}</span>
    </div> 
  )
}