---
path: /blog/2022-01-15/phoenix-web-path
title: Using Phoenix's `schema.web_path` account for web namespaces in your templates
description: Reference the path of the web namespace passed to your custom generators
tags:
  - elixir
  - phoenix
  - generators
draft: false
date: 2022-01-15T12:00:00.000-07:00
---
For a personal project I have some generators for live views. They handle most of the boilerplate of starting a live view based feature and create components, as well as their concomitant test files. These are a custom set of generators that work similarly to `phx.gen.live` but have more application specific styling and functionality.

The application referenced above is using [Phoenix web namespaces](https://hexdocs.pm/phoenix/Mix.Tasks.Phx.Gen.Html.html#module-web-namespace) to better segregate the codebase per each functionality. For example, there is an admin and app namespace, each with specific authorisation and view logic. Namespaces are passed to the generator via the `--web` flag. So for example

```bash
mix phx.gen.pretty_live Foo Bar bars name:string description:text --web App
```

Would be put under the following in your Phoenix `router.ex` file:

```elixir
#router.ex
#...
  scope "/app", MyAppWeb.App, as: :app do
  # ...
  end
#...

I was running into an issue with live view test generation where tests depending on `render_click` usages needed to account for the `/app` prefix when using query selectors for finding a button in the generated live view to click. More specifically the line of code of interest was

```elixir
assert index_live |> element("a[href=\"/<%= schema.plural %>/new\"]") |> render_click() =~
               "New <%= schema.human_singular %>"
```
where the element in the page actually had a generated href of `/app/example_model/new`.

After doing some digging. [I was able to find the exact name of the variable that's passed to the `eex` templates for `phx.gen.live`](https://github.com/phoenixframework/phoenix/blob/41435470bc414b859497cd03a5b39e08da659368/lib/mix/tasks/phx.gen.html.ex#L146). It was a bit more of a pain in the ass than I had expected because there were quite a few different names that were very similar to `schema.web_path`, some being file paths, others being elixir module names.

Here's the final code added to the template along with a little bit more code for some context.

```elixir
# priv/templates/phx.gen.custom_live/live_test.exs
#...
    test "saves new <%= schema.singular %>", %{conn: conn} do
      {:ok, index_live, _html} = live(conn, Routes.<%= schema.route_helper %>_index_path(conn, :index))

      assert index_live |> element("a[href=\"<%= if schema.web_path != nil, do: "/#{schema.web_path}", else: "" %>/<%= schema.plural %>/new\"]") |> render_click() =~
               "New <%= schema.human_singular %>"

      assert_patch(index_live, Routes.<%= schema.route_helper %>_index_path(conn, :new))

      assert index_live
             |> form("#<%= schema.singular %>-form", <%= schema.singular %>: @invalid_attrs)
             |> render_change() =~ "can&#39;t be blank"

      {:ok, _, html} =
        index_live
        |> form("#<%= schema.singular %>-form", <%= schema.singular %>: @create_attrs)
        |> render_submit()
        |> follow_redirect(conn, Routes.<%= schema.route_helper %>_index_path(conn, :index))

      assert html =~ "<%= schema.human_singular %> created successfully"<%= if schema.string_attr do %>
      assert html =~ "some <%= schema.string_attr %>"<% end %>
    end
#...
```

## Possible better solutions

Reflecting on this some more, I'm wondering if there are better solutions than querying directly against the href in the element. Part of me is wondering if it would be better to use a `data-automationId` attribute or a `data-testId` attribute a la the `react-testing-library`. I may noodle on this some more and look into a better solution. Until then, this is "good enough™".