OpenZeppelin Documentation Generator
====================================

# Generating Docs

To generate documentation from scratch, run:

```sh
npm run gen-docs
```

After modifying styles, header links, footer, and static documents, you can automatically generate all OpenZeppelin API docs - one per contract in the codebase - by running:

```sh
npm run bump-docs -- <tag>
```

For example:

```sh
npm run bump-docs -- v1.7.0
```

This command will automatically:

* Run [soldoc](https://github.com/spalladino/solidity-docgen) on the OpenZeppelin codebase at the given tag.
* Generate a new Docusaurus version matching the OpenZeppelin release tag.
* Build the Docusaurus project, and copy the build products into the repository's root directory.
