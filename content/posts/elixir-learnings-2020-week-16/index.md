---
title: Elixir learnings - 2020 week 16
date: "2020-04-13T00:00:00.000Z"
description: What I learned about Elixir during week 16 of 2020
path: "/blog/2020-04-13/elixir-learnings-week-16"
tags: ["elixir", "programming", "learnings"]
---

## Elixir

### Environment variable use in config.exs vs application code

#### tl;dr

`config.exs` is executed at compile time. Any calls to `System.get_env/1` will be executed in your build environment, not your runtime environment. If you have references to some environment variable in `config.exs` and in your app code, make sure that the environment variables that are referenced are set in both your runtime and build environments.

During this last week I found a bug related to using environment variables in elixir and docker. We had a `dockerfile` that set an environment variable during build. This variable was utilized in `config.exs` and was also being used in application code.

We had found that the build was working as expected and configurations inside of `config.exs` were being used per each environment properly. But when pulling the configurations from the environment while the application was running `System.get_env("SOME_VAR")` the applicaiton was returning `nil`.

It turns out that `config.exs` is only used during build time and thus any environment variables that are used will come from your build environment. Our runtime environment didn't have these variables, which is how configurations that were dependent upon being set from the environment in `config.exs` were working just fine, but the application at runtime wasn't working. The fix is simple, either set the environment variable that you're dependent upon in both your build and runtime environments or derive another variable at build time from the environment variable and set that for use during runtime.

elixir school's [Configuration Demystified][elixir-school] is a nice reference that explains how configuration in elixir works. Here's the section that helped me figure out the issue:

> Our application’s configuration, defined in config.exs and friends, is compiled when we generate build artifacts, like those produced by Distillery. That means those System.get_env/1 functions need to be resolved at compile time. See the problem? Our application’s compiled code is coupled to the configuration of the system where it was compiled.

### Copying function output to your clipboard for macOS

While iterating on code, it can be helpful to copy output directly to your clipboard. Here's a code snippet that I modified from [here][clipboard]. It utilizes `pbcopy` to copy function output to your clipboard. Add this function to the bottom of your `.iex.exs`.

```elixir
# file: .iex.exs

# open a module called `H` as we can't have functions outside modules
defmodule H do
  # copy function takes the input and converts it into a string before copying
  # it to the OS clipboard.
  def copy(text) do
    # convert input argument to a string
    text = to_s(text)

    # spawn a new xclip process configured to copy the stdin to the OS's primary
    # clipboard
    port = Port.open({:spawn, "pbcopy"}, [])
    # send the input text as stdin to the xclip process
    Port.command(port, text)
    # close the port
    Port.close(port)

    # print out an informational message to signal that the text has been copied
    # to the OS's clipboard"
    IO.puts("copied to clipboard: #{String.slice(text, 0, 10)}...")
  end

  # to_s converts an elixir term to a string if it implements the `String.Chars`
  # protocol otherwise it uses `inspect` to convert it into a string.
  defp to_s(text) do
    to_string(text)
  rescue
    _ -> inspect(text)
  end
end
```

Here's what it looks like while using it.

```bash
iex> some_fun() |> H.copy()
```

## Sources

[clipboard]: https://minhajuddin.com/2019/06/03/how-to-copy-output-of-a-function-to-your-clipboard-in-elixir-or-ruby/
[elixir-school]: https://elixirschool.com/blog/configuration-demystified/

1. [How to copy output of a function to your clipboard in Elixir or Ruby][clipboard]
1. [Configuration demystified][elixir-school]
