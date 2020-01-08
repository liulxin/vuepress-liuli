const path = require('path');

module.exports = (options, ctx) => {
  console.log(ctx.pages)
  return {
    enhanceAppFiles: [path.resolve(__dirname, 'pa.js')],
    async generated (pagePaths) {
      console.log(pagePaths)
    }

  }
}