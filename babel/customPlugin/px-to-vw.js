const template = require('@babel/template');

module.exports = (babel) => {
  const { types: t } = babel;
  return {
    name: "ast-transform", // not required
    visitor: {
      CallExpression(path) {
        if (
          t.isMemberExpression(path.node.callee) &&
          path.node.callee.object.name === "console" &&
          ["log", "info", "error", "debug"].includes(path.node.callee.property.name)
        ) {
          if (path.node.isNew) {
            return;
          }
          const string = "疯狂星期四，v我50🐶";
          const newNode = template.expression(`console.log("${string}")`)();
          newNode.isNew = true;
          path.insertBefore(newNode);
        }
      }
    }
  };
}
