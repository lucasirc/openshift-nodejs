openshift-nodejs
================

Source Code:

git remote add xxxRepository  xxxSourceCodeOpenShift

git pull xxxRepository master

git checkout --ours .

git add .

git commit -m"Link repo local with remote OpenShift "

git push xxxRepository master

#msg success: remote: Deployment completed with status: success


#check server log
rhc tail -a appName
