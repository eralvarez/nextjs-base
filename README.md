# Nextjs base

Base config for nextjs projects

## Submodules

[nextjs-shared](https://github.com/eralvarez/nextjs-shared) as submodule

On fresh clone

```shell
git clone <repository_URL>

git submodule init

git submodule update
```

Get latest commits from submodule

```shell
git submodule update
```

## Update base in projects

```shell
git remote add template git@github.com:eralvarez/nextjs-base.git
git fetch --all
git merge template/master --allow-unrelated-histories
```
