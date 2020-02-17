---
title: How to hijack a webpage
date: "2016-09-24T12:00:00.169Z"
description: Learn about the target=_blank security vulnerability
path: "/blog/target-blank-vulnerability"
---

In this post I'm going to teach you how to hijack a webpage using the `target="_blank"` browser vulnerability. I'll also teach you how to defend yourself against hijacking by using a couple of simple fixes.

The `target="_blank"` vulnerability allows a document that was launched from a document effected by the bug to take control of the document that launched it. This allows for malicious parties to hijack a browser tab or window to force it to navigate to an insecure domain that has a similar look and feel of the original website. This can lead to phishing opportunities wherein a user could unknowingly expose their credentials on the webpage at an insecure domain in the hijacked document.

Any website that allows user input which contains anchor tags could be effected by this bug.

I presented about about the target="\_blank" vulnerability at the [Boise Front-end Meetup](http://www.meetup.com/frontend-devs/) and thought that I would add some more information about it here. The slides from that presentation are [here](http://slides.com/blakeadietz/target-blank).

#### What does the vulnerability do?

Clicking on an effected anchor tag or executing the equivalent Javascript which opens a new document allows the new document to hijack the document responsible for opening it. Check out the following link for an example.

<a href="https://s3-us-west-2.amazonaws.com/target-blank-vuln/index.html" target="_blank">Click here for a demo!</a>

If you're still following along, you'll see that when you navigated to the picture of the Shiba Inu, this tab navigated to my StackOverflow account page.

#### How does the vulnerability work?

Setting `target="_blank"` on an anchor tag (`<a>`) or using the corresponding Javascript API is how the vulnerability is exposed.

For example:

```html
<a href="https://www.foo.com" target="_blank">Hello click me</a>
```

Here's the Equivalent Javascript API:

```javascript
var w = window.open("https://foo.com")
```

The problem arises when the newly opened document that was linked to from the anchor tag or Javascript executed with the vulnerability is able to access the document that was responsible for linking to it. The vulnerability allows the newly opened document to gain access to the opening document via the `window.opener` property.

Here's a rough diagram of what's happening.

![target="_blank" vulnerability](https://docs.google.com/drawings/d/1NYNUFMMUBXZqnDwgC3G5NGpHHLuz6ryQLgDeQe4XQKY/pub?w=574&h=943)

```javascript
/**
* Refer to the image above for A and B.
*
* This is executed from document B, so window
* is document B's global name space.
* window.opener is a reference to document A.
*/
if (window.opener) {
  /**
   * Here is where document B accesses
   * document A and forces document A to
   * navigate to a new document (C).
   */
  window.opener.location = "https://f00.com;
}
```

### How do you prevent the vulnerability?

In order to prevent the bug add the `rel` attribute with a value of "noopener".

> The keyword indicates that any newly created browsing context which results from following the hyperlink will not have an opener browsing context, which means that its window.opener property will be null.

```html
<a href="http://www.foo.com" rel="noopener" target="_blank">Hello click me</a>
```

This works for all browsers except firefox which does not support `"noopener"`. To account for firefox add the `"noreferrer"` value to the `rel` attribute.

> It indicates that no referrer information is to be leaked when following the link.
> If a user agent follows a link defined by an a or area element that has the noreferrer keyword, the user agent must set their request's referrer to "no-referrer".
> For historical reasons, the noreferrer keyword implies the behavior associated with the noopener keyword when present on a hyperlink that creates a new browsing context. That is, `<a href="..." rel="noreferrer" target="_blank">` has the same behavior as `<a href="..." rel="noreferrer noopener" target="_blank">`.

So your final fix in markup would look like this:

```html
<a href="https://www.foo.com" rel="noopener noreferrer" target="_blank"
  >Hello click me</a
>
```

The equivalent fix for the Javascript API is the following:

```javascript
  var w = window.open("https://foo.com", , "noopener noreferrer");

  // Or
  var w = window.open();
  w.opener = null;
  w.location = "https://foo.com";
```

Here's an example of a link with the fix:

<a href="https://s3-us-west-2.amazonaws.com/target-blank-vuln/index.html" target="_blank" rel="noopener noreferrer">Click here for a demo!</a>

#### Is this worth fixing?

Funny enough, it doesn't even seem like Google thinks that this bug is that serious.

> Unfortunately, we believe that this class of attacks is inherent to the current design of web browsers and can't be meaningfully mitigated by any single website; in particular, clobbering the window.opener property limits one of the vectors, but still makes it easy to exploit the remaining ones.

However, from my perspective I would say that it probably would be worth fixing the bug. Considering that the fix would allow for a pretty powerful attack vector and considering that it's such a simple fix that doesn't require much of a workaround.

### Sources

1. [http://www.w3schools.com/tags/att_a_target.asp](http://www.w3schools.com/tags/attatarget.asp)
1. https://www.w3.org/TR/secure-contexts/#examples-top-level
1. https://mathiasbynens.github.io/rel-noopener/
1. https://dev.to/ben/the-targetblank-vulnerability-by-example
1. https://html.spec.whatwg.org/multipage/semantics.html#link-type-noopener
1. https://www.w3.org/TR/html51/browsers.html#browsing-context
1. https://sites.google.com/site/bughunteruniversity/nonvuln/phishing-with-window-opener
1. https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
