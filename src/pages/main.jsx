import React from 'react'
import { Home } from '../components'
import ReactFullpage from '@fullpage/react-fullpage';
import { NavigationBar } from '../components/components'

export const Main = () => {


  return (
    <main>
    <NavigationBar/>
      <ReactFullpage
        scrollingSpeed={1000}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <section className="section">
                <Home></Home>
              </section>
              <section className="section">
                <h1>Section2</h1>
              </section>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </main>
  )
}

