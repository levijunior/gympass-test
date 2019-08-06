#### :construction: :construction: Project paused duo the API rate limit exceeded

# Front-end test assignment - GYMPASS
Repository created to host the files for the front-end test https://github.com/Gympass/front-end-coding-test

> An app that connect to the Github API, and list all public repositories from an user, and the last commits for the repositories.An app that connect to the Github API, and list all public repositories from an user, and the last commits for the repositories.

**Project created using:**
- [React.js](https://reactjs.org/ "React.js")
- [Next](https://nextjs.org/ "Next") with [create-next-app](https://open.segment.com/create-next-app/ "create-next-app") for server-rendered React applications
- [Sass](https://sass-lang.com/ "Sass") for styling
- [Context API](https://reactjs.org/docs/context.html "Context API")
and more to come



## How to use

`git clone https://github.com/levijunior/gympass-test.git`
`npm install`
`npm run dev`

#### nextjs helper
Install it:

`npm install --save next react react-dom`

and add a script to your package.json like this:

	{
	  "scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start"
	  }
	}
After that, the file-system is the main API. Every `.js` file becomes a route that gets automatically processed and rendered.

Populate `./pages/index.js` inside your project:

	function Home() {
	return <div>Welcome to Next.js!</div>
	}

	export default Home
and then just run `npm run dev` and go to `http://localhost:3000`. To use another port, you can `run npm run dev -- -p <your port here>`.

So far, we get:

- Automatic transpilation and bundling (with webpack and babel)
- Hot code reloading
- Server rendering and indexing of ./pages/
- Static file serving. ./static/ is mapped to /static/ (given you create a ./static/ directory inside your project)


------------

##### Some ES6+ features in the project
- **Template Literals** - expression interpolation for single-line and multi-line strings
- **Arrow functions** - shorter syntax that a regular function and, unlike normal functions, don’t rebind this
- **Spread operator** - explode an array into its individual items

------------

#### What's coming:
- Commits page search
- Endless scrolling for the pages
- Make it possible to change the order the repositories are shown (By stars, name, etc)
- Component Library with [Storybook.js](https://storybook.js.org/ "Storybook.js")
