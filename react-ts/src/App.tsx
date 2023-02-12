import {Div}  from './styles'

import Card from './components/Card'
import New from './components/New'
import List from './components/List'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ValuesContext } from './contexts/ValuesContex'

type ListTypes = {
  name: string,
  quantity: number,
  type: string
}

function App() {

  const [earns, setEarns] = useState(`${parseFloat('0').toFixed(2)}`)
  const [bills, setBills] = useState(`${parseFloat('0').toFixed(2)}`)

  const [list, setList] = useState<any>([])




  return (
    <ValuesContext.Provider value={{earns: earns, bills: bills, setEarns: setEarns, setBills: setBills, setList: setList}}>
      
          <Div className="App">
          <ToastContainer/>
            <main>
              
                <section id="card-section">

                  <Card key={0} title={"Ganhos"} quantity={earns}></Card>
                  <Card key={1} title={"Gastos"} quantity={bills}></Card>
                  <Card key={2} title={"Economias"} quantity={`${(parseFloat(earns)-parseFloat(bills)).toFixed(2)}`}></Card>

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
