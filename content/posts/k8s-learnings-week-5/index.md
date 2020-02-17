---
title: K8s learnings - 2020 week 5
date: "2020-01-31T12:00:00.000Z"
description: What I learned about k8s during week 5 of 2020
path: "/blog/k8s-learnings-week-5"
---

## K8s

### Deleting a persistent volume claim

```bash
kubectl patch pv <pvc-ID> -p '{"metadata":{"finalizers":null}}'
kubectl patch pvc <pvc-ID> -p '{"metadata":{"finalizers":null}}'

kubectl delete pv <ID>
kubectl delete pvc <ID>
```

### Listing storageclasses

```bash
kubectl get storageclass
```

### Enum.reduce_while

## Sources

[delete-pvc]: https://www.digitalocean.com/community/questions/unable-to-delete-pvc-volume
[nfs]: https://medium.com/@Sushil_Kumar/readwritemany-persistent-volumes-in-google-kubernetes-engine-a0b93e203180