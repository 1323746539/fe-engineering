module.exports = {
  tabWidth: 4,
  printWidth: 180,
  singleQuote: true,
  useTabs: false, //使用空格代替tab缩进
  semi: true, //句末使用分号
  quoteProps: 'as-needed', //仅在必需时为对象的key添加引号
  jsxSingleQuote: false, // jsx中使用单引号
  trailingComma: 'es5', //多行时尽可能打印尾随逗号
  bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
  bracketSameLine: false, //多属性html标签的‘>’折行放置
  arrowParens: 'avoid', //单参数箭头函数参数周围使用圆括号-eg: (x) => x
  requirePragma: false, //无需顶部注释即可格式化
  insertPragma: false, //在已被preitter格式化的文件顶部加上标注
  proseWrap: 'always', //markdown 语法配置
  htmlWhitespaceSensitivity: 'css', //对HTML全局空白默认
  endOfLine: 'lf', //结束行形式 \n 默认
  embeddedLanguageFormatting: 'auto', //对引用代码进行格式化
  singleAttributePerLine: false, //不要每行强制执行单个属性
};