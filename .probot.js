on('issues.opened', 'pull_request.opened')
  .comment('Thanks for your contribution!')
  .label('test')

on('issues.labeled')
  .filter(event => event.payload.label.name == 'enhancement')
  .comment('Hey there, the `enhancement` label was added')
