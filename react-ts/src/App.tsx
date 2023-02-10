import {Div}  from './styles'

import Card from './components/Card'
import New from './components/New'
import List from './components/List'
import { useEffect, useState } from 'react'

import { ValuesContext } from './contexts/ValuesContex'

type ListTypes = {
  name: string,
  quantity: number,
  type: string
}

function App() {

  const [earns, setEarns] = useState(0)
  const [bills, setBills] = useState(0)

  const [list, setList] = useState<any>([])




  return (
    <ValuesContext.Provider value={{earns: earns, bills: bills, setEarns: setEarns, setBills: setBills, setList: setList}}>
      <Div className="App">
      <main>
        
          <section id="card-section">

            <Card key={0} title={"Ganhos"} quantity={earns}></Card>
            <Card key={1} title={"Gastos"} quantity={bills}></Card>
            <Card key={2} title={"Economias"} quantity={earns-bills}></Card>

          </section>

          <section id='new-section'>
            <New></New>
          </section>

          <section id='list-section'>
            <List list={list} name='Nome' quantity='Quantidade' type='Tipo' key={0}></List>
          </section>
      </main>
    </Div>
    </ValuesContext.Provider>
  )
}

export default App
