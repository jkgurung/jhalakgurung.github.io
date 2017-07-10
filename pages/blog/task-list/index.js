import React from 'react'
import Screen from '../../../components/Screen'
import Paragraph from '../../../components/Paragraph'
import Image from '../../../components/Image'
import Anchor from '../../../components/Anchor'
import Code from '../../../components/Code'
import List from '../../../components/List'
import {posts} from '../'

const key = 'task-list'

export default () => (
  <Screen
    baseRouteTitle='Blog'
    mainVisual={posts[key].mainVisual}
    pathname={`https://trevordmiller.com/blog/${key}`}
    title={posts[key].title}
    description={posts[key].description}
    showDescription
    sections={[
      {
        title: 'Task list',
        component: (
          <div>
            <Paragraph>
              My task list (currently Todoist) is my most important tool.
            </Paragraph>
            <Image
              src='/static/todoist.jpg'
              description='How I use Todoist for my tasks'
            />
            <Paragraph>
              I arrange my tasks into sections (red is morning, orange is during business hours, yellow is whenever, and gray is just before bed).
            </Paragraph>
            <Paragraph>
              I work on tasks one at a time (aka "single tasking") by closing all apps/websites other than what I need for the current task.
            </Paragraph>
            <Paragraph>
              I use many repeating tasks so that maintaining my task list is easy. For example, I have a daily “Journal” task that links to my journaling app, a weekly “Garbage cans to curb + get mail” task for Wednesday nights, a yearly “Get Anniversary gift” task on the last Saturday of April, and a “Renew passports” task that repeats every ten years.
            </Paragraph>
            <Paragraph>
              I like having all these types of repeating tasks and goals written out and automated so I don’t have to keep them in my head.
            </Paragraph>
            <Paragraph>
              I use my task list as my “single source of truth” (SSOT); by that I mean I use other tools, but not directly - they are linked to from tasks so that I keep everything organized in one place. Here are a few specific examples of how I use my task list as my SSOT to link to other things.
            </Paragraph>
          </div>
        ),
      },
      {
        title: 'Planning',
        component: (
          <div>
            <Paragraph>
              I have tasks for daily and weekly planning. I use these to review and groom my tasks and calendar.
            </Paragraph>
            <Image
              src='/static/todoist-planning-tasks.jpg'
              description='My todoist weekly and daily planning tasks'
            />
          </div>
        ),
      },
      {
        title: 'Scripts',
        component: (
          <div>
            <Paragraph>
              I keep <Anchor href='https://github.com/trevordmiller/settings'>all of my device settings in one place</Anchor>. This includes shell scripts I have created to automate some of my tasks.
            </Paragraph>
            <Image
              src='/static/scripts.jpg'
              description='My shell scripts'
            />
            <Paragraph>
              I have a task to run <Code>script-check</Code> a few times a day.
            </Paragraph>
            <Image
              src='/static/todoist-script-check-task.jpg'
              description='My todoist check shell script task'
            />
            <Paragraph>
              This opens up three tools I use to stay up to date:
            </Paragraph>
            <List items={[
              `Email: for task input. I have all of my other websites and apps send me emails so that I don’t have to check them individually. I also unsubscribe from anything that isn’t valuable, so that each email I get is valuable for me.`,
              `Calendar: to track time-specific events.`,
              `Texts: to communicate with family and friends.`,
            ]} />
            <Paragraph>
              I also have other scripts to automate things I do regularly; for example:
            </Paragraph>
            <List items={[
              <span>Starting a new project (<Code>script-project</Code>)</span>,
              <span>Working on existing projects (ie <Code>script-nova</Code>)</span>,
              <span>Killing processes on my computer (<Code>script-kill</Code>)</span>,
              <span>Cleaning up garbage files/directories (<Code>script-clean</Code>)</span>,
              <span>Upgrading my operating system/apps/packages/plugins (<Code>script-upgrade</Code>)</span>,
              <span>Quitting everything at the end of a work day (<Code>script-quit</Code>)</span>,
            ]} />
          </div>
        ),
      },
      {
        title: 'Knowledge',
        component: (
          <div>
            <Paragraph>
              I have study tasks to keep up my skills and learn new things I want to learn in programming, music, etc.
            </Paragraph>
            <Image
              src='/static/todoist-code-study-task.jpg'
              description='My todoist code study task'
            />
            <Image
              src='/static/todoist-music-study-task.jpg'
              description='My todoist music study task'
            />
            <Paragraph>
              As part of this I take notes on things I learn in Spaced Repetition Software (currently Anki) and then review the items that have surfaced to the top to remember them. I explained this in depth in my <Anchor href='/blog/spaced-repetition-software'>Retaining what I learn through spaced repetition software (SRS)</Anchor> post.
            </Paragraph>
          </div>
        ),
      },
      {
        title: 'Memories',
        component: (
          <div>
            <Paragraph>
              I have a task to journal every day.
            </Paragraph>
            <Image
              src='/static/todoist-journal-task.jpg'
              description='My todoist journal task'
            />
            <Paragraph>
              I add any new pictures/videos/experiences to my journal app (currently Day One); usually with just a couple sentences. But this helps me remember the happy and awesome things about life.
            </Paragraph>
          </div>
        ),
      },
      {
        title: 'Backups',
        component: (
          <div>
            <Paragraph>
              I have a task to back up all my data every six months.
            </Paragraph>
            <Image
              src='/static/todoist-backup-task.jpg'
              description='My todoist backup task'
            />
            <Paragraph>
              I use a terabyte cloud storage plan (currently Google Drive) to back up everything.
            </Paragraph>
          </div>
        ),
      },
      {
        title: 'Conclusion',
        component: (
          <div>
            <Paragraph>
              I use my task list as my single source of truth for things I want and need to do. This links to other tools I use. Some might see this as crazy, but it helps me let go of things swimming around my brain and ensures I don’t forget the things that matter most to me so that I make my life what I want it to be.
            </Paragraph>
          </div>
        ),
      },
    ]}
  />
)
