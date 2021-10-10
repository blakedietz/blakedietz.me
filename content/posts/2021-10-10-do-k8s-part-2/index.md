---
path: /blog/2021-10-10/do-k8s-part-2
title: "Digital ocean k8s part 2:"
description: From zero to a cluster managed by Argo CD and ssl certs.
tags:
  - tutorial
  - digital ocean
  - k8s
  - kubernetes
  - helm
  - argocd
draft: true
date: 2021-07-24T12:00:00.000Z
---

## Deploy your app of apps

### Understanding the app of apps pattern

### Generate ssh key

![](part-3/create-ssh-key.gif)

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

### Add to github

![](part-3/create-new-ssh-key.gif)

### Add the certificate to the app for the repository

```bash
# Ensure the argo ports are being forwarded
kubectl port-forward svc/argocd-server -n argocd 8080:443
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d | pbcopy
# user name is admin
# paste the password in
argocd login localhost:8080
# add the private key to pull from a private repo
argocd repo add git@github.com:blakedietz/k8s-argo.git --ssh-private-key-path ~/.ssh/argo_cd_gh_deploy```
```
![](part-3/prepare-for-adding-cert.gif)
![](part-3/add-cert.gif)

### Create your top level app

![](part-3/create-top-level-app.gif)
![](part-3/view-empty-app.gif)

### Add your first sub app


## References
