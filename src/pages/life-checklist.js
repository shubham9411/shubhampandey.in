import React from 'react'
import styles from './life-checklist.module.css'
import Layout from '../layout'

const checklist = {
  '👶 Be born': true,
  '🚶‍ Take first steps': true,
  '📣 Say first words': true,
  '👨‍🏫 Learn to read': true,
  '🤗 Make a friend': true,
  '🚴‍ Learn to ride a bike': true,
  '📗 Read a book': true,
  '🏊‍ Learn to swim': false,
  '🏫 Finish elementary school': true,
  '⚽ Play a sport': true,
  '🛫 Fly in a plane': true,
  '🛥️ Ride a boat': true,
  '🚆 Ride in a train': true,
  '🚁 Ride a helicopter': false,
  '🌊 See the ocean': true,
  '❄️ See snow': true,
  '☃️ Make a snowman': true,
  '🏫 Finish middle school': true,
  '🎶 Go to a concert': true,
  '🏕️ Go camping': true,
  '🎢 Ride a rollercoaster': false,
  '🎻 Play an instrument': false,
  '💋 Get kissed': false,
  '💳 Get a credit card': true,
  '🚘 Start driving': false,
  '🗺️ Go on a roadtrip': true,
  '🗾 Visit another country': false,
  '🎤 Give a speech': false,
  '🏫 Graduate high school': true,
  '🌐 Learn another language': true,
  '💸 Invest some money': true,
  '📷 Meet an idol': false,
  '😩 Make a terrible mistake': true,
  '🏆 Win a trophy': false,
  '⛰️ Climb a mountain': false,
  '🎽 Run a marathon': false,
  '🍳 Learn to cook': true,
  '🔦 Explore a cave': false,
  '🌋 See a volcano': false,
  '🎓 Graduate college': true,
  '💕 Have a long relationship': false,
  '🗑️ Get dumped': false,
  '🖊️ Sign a contract': true,
  '🏢 Get a job': true,
  '☝️ Get promoted': true,
  '💵 Get a paycheck': true,
  '🔥 Get fired': false,
  '📰 Get in the news': false,
  '🗳️ Vote in an election': true,
  '🤡 Switch careers': true,
  '🏠 Buy a house': false,
  '💍 Get engaged': false,
  '👰 Get married': false,
  '👶 Have a kid': false,
  '🚶‍ Teach your kid to walk': false,
  '📣 Teach your kid to talk': false,
  '🎓 Watch your kid graduate': false,
  '👰 Watch your kid get married': false,
  '👴 Become a grandparent': false,
  '🏖️ Retire': false,
  '📔 Tell your grandkid a story': false,
  '🌑 See a solar eclipse': true,
  '🌷 Plant a garden': false,
  '🌎 Travel the world': false,
  '🎂 Turn 100': false,
  '✔️ Complete Life Checklist': false,
}

const LifeCheckList = () => {
  const renderChecklist = () => {
    return (
      <>
        {Object.keys(checklist).map(key => (
          <div
            className={`
              ${checklist[key] ? styles.checklistItemActive : ''} 
              ${styles.checklistItem}
            `}
            key={key}
          >
            {key}
          </div>
        ))}
      </>
    )
  }

  return (
    <Layout>
      <section className={styles.container}>
        <header className={styles.centerBlock}>
          <h1>Life Checklist</h1>
        </header>
        <br />
        <div className={styles.contentBlock}>{renderChecklist()}</div>
      </section>
    </Layout>
  )
}

export default LifeCheckList
