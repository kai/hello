on('issues.opened', 'pull_request.opened')
  .comment('Thanks for your contribution!')
  .label('test')

on('issue_comment.opened')
 +  .filter((event) => event.issue.body.match(/^Can I have some feedback, please\?$/))
    .comment(':+1: Looks great! :shipit:')

on('issues.labeled')
  .filter(event => event.payload.label.name == 'enhancement')
  .comment('Hey there, the `enhancement` label was added')
