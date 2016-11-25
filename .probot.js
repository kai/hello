on('issue_comment.opened')
  .comment(':+1: Looks great! :shipit:')

on('issues.opened', 'pull_request.opened')
  .comment('Thanks for your contribution!')
  .label('test')
