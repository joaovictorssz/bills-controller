import {Div}  from './styles'

import Card from './components/Card'
import New from './components/New'
import List from './components/List'

function App() {
  return (
    <Div className="App">
      <main>
        
          <section id="card-section">
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </section>

          <section id='new-section'>
            <New></New>
          </section>

          <section id='list-section'>
            <List></List>
          </section>
      </main>
    </Div>
  )
}

export default App
