import React from 'react'
import tags from '../../utils/tags'
import Screen from '../../components/Screen'
import Teaser from '../../components/Teaser'

export const posts = {

  'front-end-tooling-preferences': {
    tags: [tags.git, tags.npm, tags.react, tags.node, tags.graphQl],
    mainVisual: '/static/front-end-tooling-preferences.jpg',
    title: `My current front-end tooling preferences`,
    description: `An opinionated list of my current favorite options for front-end code projects. This includes the reasoning behind why I picked each option and an example project to show how they can all fit together.`,
    date: 'June 21, 2017',
  },

  'raspberry-pi-button': {
    tags: [tags.unix, tags.node, tags.hardware],
    mainVisual: '/static/dog-bathroom-button.jpg',
    title: `Running a Node server on a Raspberry Pi with a physical button`,
    description: `All the pieces needed to set up a Raspberry Pi with a physical button. Covers buying hardware, running a Raspberry Pi, wiring up a physical button, using the latest Node and npm, and creating a Node server to send a text message when the button is pressed.`,
    date: 'June 1, 2017',
  },

  'color-scheme-building': {
    tags: [tags.npm],
    mainVisual: '/static/nova-example-code-screenshot.png',
    title: `Building the Nova color scheme`,
    description: `By using an npm module for color values, we were able to generate color schemes for multiple editors and tools from one source.`,
    date: 'May 1, 2017',
  },

  'task-list': {
    tags: [tags.general],
    mainVisual: '/static/todoist.jpg',
    title: `Using my task list as my single source of truth`,
    description: `I like to stay organized with an automated task list so that I don’t forget to do the things I want and need to do, and so I can keep my brain free from remembering it all.`,
    date: 'April 1, 2017',
  },

  'minimal-office': {
    tags: [tags.general],
    mainVisual: '/static/minimal-office-first-person.jpg',
    title: `My minimal office set up`,
    description: `For years I had a cheap office: a $30 plastic folding desk and an external monitor I'd plug into and that was it. But recently, I took the plunge and set up my dream office and I'm ecstatic with how it turned out.`,
    date: 'March 1, 2017',
  },

  'spaced-repetition-software': {
    tags: [tags.general],
    mainVisual: '/static/anki-card-question.jpg',
    title: `Retaining what I learn through Spaced Repetition Software (SRS)`,
    description: `When I learn something new, I add it to my SRS. Then, each morning I review what my SRS suggests I\'m about to forget, to ingrain it in my long-term memory.`,
    date: 'February 1, 2017',
  },

  'wholesome-media': {
    tags: [tags.hardware],
    mainVisual: '/static/opendns.jpg',
    title: `Configuring devices for wholesome media`,
    description: `I use a combination of filters and settings to help keep media in my home wholesome.`,
    date: 'January 1, 2017',
  },

  'rebuilding-my-website': {
    tags: [tags.react, tags.node],
    mainVisual: '/static/trevordmiller-website.jpg',
    title: `Rebuilding my website to aggregate all my stuff`,
    description: `Since I started programming in high school, I've accumulated personal domains, websites, and apps spread across the internet. I decided I wanted to consolidate these into a single app with a shared set of components, so that it is easier to maintain. So now all my web projects live under https://trevordmiller.com; this includes my portfolio, open source project documentation, guitar lessons, blog etc.`,
    date: 'December 1, 2016',
  },
}

const postKeys = Object.keys(posts)

export default () => (
  <Screen
    baseRouteTitle='Blog'
    mainVisual={posts[postKeys[0]].mainVisual}
    pathname='https://trevordmiller.com/blog'
    title='Blog'
    description='Writings from Trevor D. Miller on programming, organization, music, and other thoughts.'
    sections={postKeys.map(postKey => {
      const post = posts[postKey]
      return ({
        title: post.title,
        component: (
          <Teaser 
            tags={post.tags}
            visual={post.mainVisual}
            description={post.description}
            links={[
              {
                description: 'View',
                href: `/blog/${postKey}`
              },
            ]}
          />
        ),
      })
    })}
  />
)
