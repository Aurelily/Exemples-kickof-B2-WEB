
import './App.css'

import Heading from './Heading'
import Section from './Section'

export default function App() {



  return (

// INITIALEMENT : Plutot que de devoir faire passer la props level dans chaque enfant, on va créer un context : LevelContext.jsx
//-------------------------------------------------------------------------------------------------------
/*    <Section>
        <Heading level={1}>Title</Heading>
       <Section>
        <Heading level={2}>Heading</Heading>
        <Heading level={2}>Heading</Heading>
        <Heading level={2}>Heading</Heading>
        <Section>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <Section>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section> */

// DEMO 1 : On utilise le context dans Section afin de diffuser le props level dans tous les enfants des Sections
//-------------------------------------------------------------------------------------------------------
 <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>

// DEMO 2 : On peut faire encore mieux en intégrant l'opération "level +1" dans la value du Provider pour incrémenter level automatiquement dans les enfants de Section sans avoir à le faire à la main comme précédemment
//-------------------------------------------------------------------------------------------------------
/*     <Section>
    <Heading>Title</Heading>
    <Section>
      <Heading>Heading</Heading>
      <Heading>Heading</Heading>
      <Heading>Heading</Heading>
      <Section>
        <Heading>Sub-heading</Heading>
        <Heading>Sub-heading</Heading>
        <Heading>Sub-heading</Heading>
        <Section>
          <Heading>Sub-sub-heading</Heading>
          <Heading>Sub-sub-heading</Heading>
          <Heading>Sub-sub-heading</Heading>
        </Section>
      </Section>
    </Section>
  </Section> */
  )
}


