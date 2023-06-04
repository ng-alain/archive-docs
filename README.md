# 如何获取 `11.x` 之前的文档

线上文档将只保留最近三个主版本号的数据，若是低版本可以通过本地部署来查看：

```bash
git clone --depth 1 -b full https://github.com/ng-alain/archive-docs.git ng-alain-doc
cd ng-alain-doc
yarn
yarn start
```