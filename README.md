openshift-nodejs
================


xxxSourceCodeOpenShift: Source Code ssh url, check in application -> Source Code
xxxRepository: name of the repository

`Add OpenShift Repository as remote`
git remote add xxxRepository  xxxSourceCodeOpenShift

`Fetch and Merge with Openshift Repository`
git pull xxxRepository master

Resolve merge:
`git checkout --ours .`

Add changes
`git add .`

Add commit
`git commit -m"Link repo local with remote OpenShift "`

Push to Open Shift Repository and Wait the Deploy
`git push xxxRepository master`


msg success: remote: Deployment completed with status: success


check server log
rhc tail -a appName
