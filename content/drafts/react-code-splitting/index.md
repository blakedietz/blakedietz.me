---
title: Improving your React application performance with Lighthouse, dead code removal and code splitting
date: "2020-08-23T00:00:00.000Z"
description: Follow along as I tweak https://pencyclopedia.ink's page load performance.
path: "/blog/2020-08-23/react-code-splitting"
tags: ["React", "Lighthouse", "bundle size", "code splitting"]
---

## One size does not fit all

Application requirements vary tremendously from one application to another. This guide is not meant to be a prescriptive
set of steps that anyone can apply to any single page application. This is a high level guide that gives you a few
helpful tips and some starting points to guide you along your own journey to a more performant application.

For this guide we'll be analyzing performance for https://pencyclopedia.ink. This is a personal SaaS project that I've
launched, so it's a little more real world than your usual tutorial. You'll learn about using [Lighthouse][lighthouse]
to analyze application performance along with a couple of practices for improving React application performance.

### Make your production build

First we'll need to make sure that the application binary is as close to the production build as possible. We don't want
development scripts to impact performance analysis. To do so, we'll use the `build`
command that was seeded by [CRA][cra] for this project. This creates a production ready asset that you can then
distribute.

```bash
# from the project root
# note: this assumes that application dependencies have already been installed via npm already
npm run build
# Install a static file server locally
npm i -g serve
# Serve your production assets locally
serve -s build
```

![](terminal-start.png)

Above, we first run the build command to create the assets. We then install [serve](https://www.npmjs.com/package/serve)
which is a local static file server. From there the static file server is run locally to serve the built assets. This is
what Lighthouse is going to be running the analysis against. Of course, you could always run this against your
production site, but that makes iterating more cumbersome.

### Use Lighthouse to find bottlenecks

First of all, you need to identify if your application has any performance issues. Chrome has a built in tool called
Lighthouse that you can leverage to identify specific performance bottlenecks. To use Lighthouse, open Google Chrome
and do the following:

1. Navigate to the local file server's address
1. Open Chrome dev tools
1. Look for the Lighthouse tab

![](lighthouse.png)

Lighthouse is ridiculously powerful. Learn more about what it does and how to use it [here](lighthouse). The simplest
way to get started is to click "Generate report". Once the report is generated, you'll see a high level
breakdown of your app performance at the top of the window.

![](report-after-dev-tools.png)

Lighthouse is so powerful that it even picks up on project frameworks and gives you smart recommendations. Here's a
section from the report detailing unused code as a performance bottleneck for the home page and how you can address
the problem in React.

![](report-unused-js.png)

So, why is unused code considered a performance bottleneck and why is there unused code being reported for this page?
Well, when building an application, you can logically divide source code into views. Whenever a view is using code
Well, any code that's not being used in the current view should be considered "dead weight" for your bundle. That's because web app
source is text, and that text translates to bytes sent to the client over the wire. Anything sent over the wire to your
client takes time. Add up enough bytes being sent to a network constrained client and you have a poor user experience.
Thus, bundle sizes should be reduced to the bare minimum to improve time until . This is especially important in scenarios where the client is network
constrained. In this context, while although Lighthouse is reporting that there is dead code for the current page, it
may very well be that the code is used somewhere else later on at application run time.

This is where code splitting comes in. Code splitting allows your application bundle to be split into multiple
independent bundles called chunks. You can think of chunks as asynchronous modules that are only requested by the
client when they are required. So, how does this help solve the unused code bottleneck?

After doing some reading I found that the React docs recommend starting at the [route level](route-level) to leverage
code splitting. This turned out to work well with my project because I'm utilizing `react-router-dom` for the routing
mechanism anyway. The documentation recommends leveraging `suspense` along with `lazy` and dynamic `import` to
implement code splitting.

Here's what the code looks like before and after:

![](lazy-route-refactor.png)

Anything that was a top level route component was converted from the ESmodule `import` to use `lazy` and dynamic `import`
instead.

You'll also need to wrap all of your router routes in the `Suspense` component as well.

![](suspense-component.png)

Running `npm run build` now shows a different output from before.

![](terminal-after-lazy.png)

Previously there were 3 different chunks. As you can see there's quite a few more after this change, and this is exactly
what we want. Leveraging code splitting, the application is able to separate parts of our application into separate
assets. These assets are only loaded when the application requires them at runtime. This allows for reducing overall
asset sizes which helps to improve load times for network constrained clients.

So, what's our new score?

![](report-after-split.png)

89! It's not perfect, but we're getting there! Leveraging code splitting, our score jumped 46 points in total, which
is pretty impressive considering the amount of effort that was required to do so. This change puts the application on
the edge of a good rating.

And for now, we'll leave it at that. It should be noted, that although the changes made in this walkthrough do impact
site wide load times, you'll need to run Lighthouse for each page in your application and assess the root cause of
performance issues accordingly.

## References

[lighthouse]: https://developers.google.com/web/tools/lighthouse
[gh-191]: https://github.com/facebook/react-devtools/issues/191
[react-suspense]: https://web.dev/code-splitting-suspense/?utm_source=lighthouse&utm_medium=devtools
[route-level]: https://reactjs.org/docs/code-splitting.html#route-based-code-splitting
[cra]: https://reactjs.org/docs/create-a-new-react-app.html

1. [Lighthouse](lighthouse)
1. [Removing dev tools issue](gh-191)
1. [React.lazy()](react-suspense)
1. [Route based code splitting](route-level)
1. [Create react app][cra]