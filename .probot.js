on('issue_comment.opened')
  .comment(':+1: Looks great! :shipit:')

on('issues.opened', 'pull_request.opened')
  .comment('Thanks for your contribution!')
  .label('test')

on('issues.labeled')
  .filter(event => event.payload.label.name == 'enhancement')
  .comment('Hey there, the `enhancement` label was added')

on('pull_request.labeled')
  .filter((event) => event.labeled(bug))
  .assign(random(file(OWNERS)));
