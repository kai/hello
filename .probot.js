on('issues.opened', 'pull_request.opened')
  .comment('Thanks for your contribution!')
  .label('test')

on('issues.labeled')
  .filter(event => event.payload.label.name == 'enhancement')
  .comment('Hey there, the `enhancement` label was added')

on('issue_comment.opened')
  .filter((event) => event.issue.body.match(/^@peter-robot assign @(\w+)$/))
  .assign({{ matches[0] }});

on('issue_comment.opened')
  .filter((event) => event.issue.body.match(/^@peter-robot label @(\w+)$/))
  .label($1);
