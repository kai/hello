// Auto-respond to new issues and pull requests
//on('issues.opened', 'pull_request.opened')
//  .comment('Thanks for your comment')

on('issue_comment.opened')
  .filter((event) => event.issue.body.match(/^Can I have some feedback, please\?$/))
  .comment(':+1: Looks great! :shipit:')

//on('issue_comment.opened')
//  .filter((event) => event.issue.body.match(/^@probot label @(\w+)$/))
//  .label($1);
