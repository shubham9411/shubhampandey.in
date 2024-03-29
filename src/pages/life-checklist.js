import React from 'react'
import * as styles from './life-checklist.module.css'
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
  '💸 Invest Money': true,
  '💳 Get a credit card': true,
  '🚘 Start driving': true,
  '🪂 Skydiving': false,
  '🚀 Rocket Launch at SHAR': true,
  '🪂 Parasailing': true,
  '🚀 Rocket Launch SpaceX': false,
  '🗺️ Go on a roadtrip': true,
  '🗾 Visit another country': {
    visited: ['Nepal'],
    pipeline: ['Netherlands', 'Singapore', 'Japan'],
  },
  '🎤 Give a speech': false,
  '🏫 Graduate high school': true,
  '🌐 Learn another language': true,
  '💸 Invest some money': true,
  '📷 Meet an idol': false,
  '😩 Make a terrible mistake': true,
  '🏆 Win a trophy': false,
  '⛰️ Climb a mountain': true,
  '🎽 Run a marathon': false,
  '🍳 Learn to cook': true,
  '🔦 Explore a cave': true,
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
        {Object.keys(checklist).map((key) => {
          let text = ''
          if (key.includes('Visit another country')) {
            text = checklist[key]['visited'].join(', ')
          }
          return (
            <div
              className={`
              ${checklist[key] ? styles.checklistItemActive : ''} 
              ${styles.checklistItem}
            `}
              key={key}
            >
              {key}
              {text !== '' ? <span className={styles.smallText}>{text}</span> : <></>}
            </div>
          )
        })}
      </>
    )
  }

  const countTotalChecked = () => {
    return Object.values(checklist).filter((val) => !!val).length
  }

  return (
    <Layout>
      <section>
        <h1>Life Checklist</h1>
        <p>
          Inspired and copied from{' '}
          <a
            href="https://neal.fun/life-checklist/"
            target="_blank"
            rel="noreferrer"
          >
            Neal.fun
          </a>{' '}
          Go make your own.
        </p>
        <br />
        <div>
          <progress
            value={countTotalChecked()}
            max={Object.keys(checklist).length}
          >
            {countTotalChecked()} / {Object.keys(checklist).length}
          </progress>
          <h3 className={styles.center}>
            Completed {countTotalChecked()} / {Object.keys(checklist).length}{' '}
            items
          </h3>
        </div>
        <br />
        <div className={styles.contentBlock}>{renderChecklist()}</div>
      </section>
    </Layout>
  )
}

export default LifeCheckList
