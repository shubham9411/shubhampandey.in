import React from 'react'

import * as styles from './learn.module.css'

import Layout from '../layout'

const Learn = () => (
  <Layout>
    <section className={styles.container}>
      <h1>Learning in Public</h1>
      <p>
        My current focus is on RoR, React and data structures + algorithms.
        Learning in public inspired by{' '}
        <a
          href="https://www.taniarascia.com/learn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tania Rascia
        </a>
        .
      </p>
      <div className={styles.meme}>
        <img alt="meme time" src="/learn-in-public.jpg" />
      </div>
      <h2>JavaScript</h2>
      <ul className={styles.ulContainers}>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          Fetch
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          Promises, async/await
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          Scope
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          closures, this
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          ES6+
        </li>
      </ul>

      <h2>
        React{' '}
        <small style={{ color: '#999', fontSize: '0.5em' }}>
          {' '}
          Current focus
        </small>
      </h2>
      <ul className={styles.ulContainers}>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          JSX
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Class vs functional components
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          State vs props
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Lifecycle Methods
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Hooks
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          React Router
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          Context
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          Redux
        </li>
      </ul>

      <h2>Designing & Testing</h2>
      <ul className={styles.ulContainers}>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          React testing library
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          Storybook
        </li>
      </ul>

      <h2>Tools/Frameworks</h2>
      <ul className={styles.ulContainers}>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Command Line
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Git
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Static Site Generators
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Deploying to Heroku
        </li>
      </ul>

      <h2>Algorithms</h2>
      <ul className={styles.ulContainers}>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Complexity (Big O notation)
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Size complexity
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Time complexity
        </li>

        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Searching
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Binary search
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          Recursion
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          Sorting
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          Bubble
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          Insertion
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          Selection
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          Merge
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          Heap
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          Quick
        </li>
      </ul>

      <h2>Data Structures</h2>
      <ul className={styles.ulContainers}>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Arrays
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Linked lists
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Singly linked lists
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Doubly linked lists
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Stack
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Queue
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Hash tables
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          Trees
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          Heap
        </li>
        <li>
          <input
            className={styles.taskListItem}
            checked
            type="checkbox"
            disabled
          />{' '}
          Graph
        </li>
        <li>
          <input className={styles.taskListItem} type="checkbox" disabled /> Cut
          Vortax
        </li>
        <li>
          <input className={styles.taskListItem} type="checkbox" disabled />{' '}
          Union FInd
        </li>
        <li>
          <input className={styles.taskListItem} type="checkbox" disabled />{' '}
          Articulation points Algos
        </li>
      </ul>
    </section>
  </Layout>
)

export default Learn
