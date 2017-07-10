import React from 'react'
import Screen from '../../../components/Screen'
import Paragraph from '../../../components/Paragraph'
import List from '../../../components/List'
import Teaser from '../../../components/Teaser'
import Anchor from '../../../components/Anchor'
import Button from '../../../components/Button'
import {posts} from '../'

const key = 'front-end-tooling-preferences'

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
        title: `The tooling holy wars`,
        component: (
          <div>
            <Paragraph>
              This is my current opinion. The list will be updated as I learn more and as the community and tools evolve. These options are also just a baseline for the typical types of projects I work on, but each project has its own unique needs where different options would be a better fit. Everything has tradeoffs and there is no "one true stack" of programming tools. Let's all be kind - avoid the hostile holy wars about "tool A destroys tool B"; we are all in this together and everything has pros and cons. I hope this list with my research and experience can be helpful in some way, but this list is by no means the "best" or "right" way to do things ;)
            </Paragraph>
          </div>
        ),
      },

      {
        title: `Version Control: Git`,
        component: (
          <Teaser 
            visual='git'
            description='Git for version control, because it is the standard and gives you fine-grained control over your code history.'
            links={[
              {
                description: 'Watch a video course on command line Git',
                href: 'https://egghead.io/courses/practical-git-for-everyday-professional-use'
              },
            ]}
          />
        )
      },

      {
        title: `Code hosting: GitHub`,
        component: (
          <Teaser 
            visual='github'
            description='GitHub for code hosting, because it is where the majority of open source code lives and has great features like protected branches, pull request reviews etc. My favorite approach for GitHub is to create small pull requests for each feature/bug and to submit them rebased on master once continuous integration runs and fellow team members have given an approved review.'
          />
        )
      },

      {
        title: `Language: JavaScript`,
        component: (
          <Teaser 
            visual='javascript'
            description='JavaScript as the primary language and ecosystem, because it is available everywhere, flexible, and in high demand. Although I like the idea of some of the new players like Elm, they are a little too immature and "all-in-one" solutions for me to feel comfortable adopting at the moment.'
          />
        ),
      },

      {
        title: `Package management: npm`,
        component: (
          <Teaser 
            visual='npm'
            description={`npm for package management, because it has the largest amount of JavaScript packages. Yarn is great too, but with npm 5 I don't know of a compelling reason for the extra dependency - vanilla npm is solid.`}
            links={[
              {
                description: 'Watch a video course on publishing your own npm packages',
                href: 'https://egghead.io/courses/publish-javascript-packages-on-npm'
              },
            ]}
          />
        )
      },

      {
        title: `Script running: npm`,
        component: (
          <Teaser 
            visual='npm'
            description='npm for script running, because it is easy to add scripts in a package.json and they have access to the binaries in node_modules.'
          />
        )
      },

      {
        title: `Scripts: Node`,
        component: (
          <Teaser 
            visual='node'
            description='Node for scripts, because it is available pretty much everywhere, has great packages through npm, and lets me write in the same language on client and server.'
          />
        )
      },

      {
        title: `Compilation: Babel`,
        component: (
          <Teaser 
            visual='babel'
            description='Babel for compilation, because it is modular and has tons of high quality plugins.'
          />
        )
      },

      {
        title: `UI rendering: React`,
        component: (
          <Teaser 
            visual='react'
            description='React for UI rendering, because of the separation of library from rendering environments (web, native, VR etc.), one way rendering from data (its like programming UI with composed functions), Functional Programming leanings while still being flexible, and a strong community.'
          />
        )
      },

      {
        title: `React app wire up: Next.js`,
        component: (
          <Teaser 
            visual='nextjs'
            description={`Next.js for React app wire up, because it gives you automatic routing, code splitting, static file serving, server rendering, page prefetching, and development hot module replacement for free. Using a library like this to abstract compilation and module bundling also gives you simple ecosystem updates for free without having to manage your own Webpack and Babel configs. There are other options in this space like react-scripts from create-react-app, but I prefer Next.js because it is more minimal/lightweight and can be extended using the library with a programmatic API without "ejecting".`}
          />
        )
      },

      {
        title: `Data management: Apollo`,
        component: (
          <Teaser 
            visual='apollo'
            description='Apollo for data management, because it provides a declarative approach to typical data fetching, storing, re-fetching, error handling, and the like for GraphQL APIs. I like Apollo better than Relay at the moment because it is less opinionated, driven by the community, and has better documentation + support. Redux is another great solution in this space and I really like it, but have found that I can write a lot less code with Apollo as it manages the typical data management pieces in a more declarative way - plus it can sync with Redux on top if needed as it uses Redux under-the-hood.'
            links={[
              {
                description: 'View a blog post on replacing Redux with Apollo',
                href: 'https://dev-blog.apollodata.com/reducing-our-redux-code-with-react-apollo-5091b9de9c2a'
              },
            ]}
          />
        )
      },

      {
        title: `Styling: Styled Components`,
        component: (
          <Teaser 
            visual='styledComponents'
            description={`Styled components for styling, because it is currently the CSS-in-JS library with the strongest community, has the best React platform target support (browser, server rendering, and React Native from one package), uses normal CSS syntax so there is less lock-in and it is more familiar for those with CSS experience, automatically vendor prefixes browser-based styles, and wraps your styles inside React components. The main benefits to any CSS-in-JS library over separate CSS based options is that your styles are not tied to the browser and you have access to all your JavaScript tooling and logic in your styles - it's just JavaScript! Because of this, your presentational components can become self-contained so they can be reused across platforms or published to npm without any extra files or module bundling needed. Inline styles work in a similiar way out of the box with React, but they don't support all of CSS and tie you more directly to React, so I prefer a CSS-in-JS library to them. I like to write the styles for these presentational components in an "additive", mobile-first way. Also, by using flexbox for layouts, it works across React platform targets (not tied to the browser).`}
          />
        )
      },

      {
        title: `Hosting: now`,
        component: (
          <Teaser 
            visual='zeit'
            description={`now for hosting, because it is simple, scales automatically, uses open source tech instead of lock-in, uses immutable deployments, has simple domain name registering, and has zero-config HTTPS included.`}
          />
        )
      },

      {
        title: `Linting: ESLint`,
        component: (
          <Teaser 
            visual='eslint'
            description='ESLint for linting, because it has a solid set of "recommended" rules for catching errors. I prefer only using linting to catch errors and leaving stylistic things to an automatic tool like Prettier.'
          />
        )
      },

      {
        title: `Testing: Jest`,
        component: (
          <Teaser 
            visual='jest'
            description='Jest for test running, because it uses minimal config, runs fast with parallel sandboxed tests, has git diff based test running, and includes snapshot testing.'
          />
        )
      },

      {
        title: `Type checking: Flow`,
        component: (
          <Teaser 
            visual='flow'
            description='Flow for type checking, because it works well with Babel and is just a type checker.'
          />
        )
      },

      {
        title: `Formatting: Prettier`,
        component: (
          <Teaser 
            visual='prettier'
            description='Prettier for code style formatting, because it is automatic so you can avoid thinking about or debating code style.'
          />
        )
      },

      {
        title: `Continuous Integration: Travis CI`,
        component: (
          <Teaser 
            visual='travisci'
            description='Travis CI for continuous integration, because it is free for open source, uses a project config file, and has first-class GitHub integration.'
          />
        )
      },

      {
        title: `Project structure: feature folders`,
        component: (
          <Teaser 
            visual='folder'
            description='Feature folders for project structure, because adding features or fixing bugs keeps related code in self-contained modules rather than spread out by file type. I like to use node-style index.js files as the entry point for each feature folder, with an optional sibling "utils" directory (for breaking up logic into utility modules) and an optional "components" directory (if the feature folder is UI based, for breaking up components into sub-components as needed). The root of the project contains a "pages" directory to map routes to top-level components.'
          />
        )
      },

      {
        title: `Putting all the pieces together`,
        component: (
          <div>
            <Paragraph>
              Phew! That is a lot of tooling. Note that not all tools are necessary when starting a project, but become more useful as the code and team size grow. The nice thing is that most of these tools don't require much effort after they are set up. Here is an example project with these tools in place so you can see how they fit together.
            </Paragraph>
            <Anchor href='https://github.com/trevordmiller/example-web-app'>
              <Button>
                View example project
              </Button>
            </Anchor>
            <Paragraph>
              I wrote a script that I use to scaffold new projects like this with all the tools mentioned in this post. I find it helps me create more projects without worrying about project setup, and then when my preferences change I just update the script for future projects to get the updates as well.
            </Paragraph>
            <Anchor href='https://github.com/trevordmiller/settings/tree/master/scripts/script-project'>
              <Button>
                View the script
              </Button>
            </Anchor>
          </div>
        ),
      },

      {
        title: `Principles`,
        component: (
          <div>
            <Paragraph>
              There are some underlying principles with each of these tooling choices:
            </Paragraph>
            <List
              items={[
                <span>I generally favor lightweight options that do one thing well and compose together with other things, rather than large "all-in-one" type solutions because it is easier to upgrade and swap out pieces as things change.</span>,
                <span>I try to stay more in "the middle" of the constant pendulum of technology options rather than swinging to extremes, because the pendulum always swings back.</span>,
                <span>I do lean a bit towards the Functional Programming camp because I've found that these patterns have helped me write code that has less bugs and is easier to change without breaking other things.</span>,
                <span>I favor composition over inheritance because it is easier for my brain to understand.</span>,
                <span>I use open source options wherever possible to avoid proprietary lock-in and support the community.</span>,
                <span>I favor battle-tested, more widely used options to avoid large amounts of early-adoption bugs.</span>,
                <span>I generally favor minimal configuration over strict setups because I believe that strictness deters innovation and adds extra complexity.</span>,
                <span>Many of these options are not needed to start out, or possibly ever. I like to start with only what is needed and only add other tools if they solve a problem that arises.</span>,
              ]}
            />
          </div>
        ),
      },

      {
        title: `Conclusion`,
        component: (
          <div>
            <Paragraph>
              Programming is a deep field. There are so many languages, tools, and options out there that making decisions on them can be intimidating. Although these are my current preferences, all of this is subject to change as I learn and progress and the community changes. I'm happy to use other tools and try new things as well. I strive to keep an open mind and always keep learning and hope the same for our community; let's all strive to lift and help each other and learn together, rather than getting caught up in antagonistic tech discussions and dogmatic attitudes. I am extremely grateful that I get to be a software engineer working in the front-end; yes, it can be a little complex and fast-paced at times, but I enjoy the challenge and chance to continually learn and grow!
            </Paragraph>
          </div>
        ),
      },

    ]}
  />
)
