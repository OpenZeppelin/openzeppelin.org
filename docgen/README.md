OpenZeppelin Documentation Generator
====================================

To generate documentation from scratch, first create a [Docusaurus](https://docusaurus.io) project. You can use the following commands as a guide:

```sh
cd docgen
mkdir docs
npm init -y
npm install docusaurus-init
docusaurus-init
mv docs-examples-from-docusaurus/ docs
mv website/blog-examples-from-docusaurus/ website/blog
```

Once the 