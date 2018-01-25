# FEISN: fix enter in Service Now

When adding a comment to an issue, Mozilla's Service Now binds the Enter key
to posting the comment. When doing one-line comments, that's fine. However,
there are a plethora of very common cases where that's not fine. For example,
using multiple lines to enter a postal address, using multiple paragraphs to
answer multiple questions, and so on. Service Now's comment box suggests you
do Shift-Enter to add a new line for these common scenarios.

Further, if you hit the Enter key twice in rapid succession because you
forgot that Enter posts the comment, it posts your half-written comment
twice.

I think that's terrible and I'd rather the whole Enter-to-post thing wasn't
a thing. This extension alleviates that.

**Note: I only use Mozilla's Service Now instance--I have no idea if this
is true of all Service Now instances so this only applies to the Mozilla
one.**


## Features

* Creates a second form that you can type your comment into that doesn't
  post the comment for you
* Mediocre web extension name
* Released under the MPLv2 as Open Source so you can fix the issues that
  bother you


## Contributors

* Will Kahn-Greene
* you could be here!


## Issues, PRs, and maintenance

If you have a problem, write up an issue at:
https://github.com/willkg/feisn/issues

If you can fix something, please submit a PR.

If you can help someone, please comment on their issue.

I'll merge PRs and do releases, but probably won't do anything else.


## Acknowledgements

Thank you to MDN contributors and webextension developers who wrote up the
documentation for webextensions, related APIs, and all the code samples!

[Install it on AMO](https://addons.mozilla.org/en-US/firefox/addon/feisn/)
