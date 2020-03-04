const configure = (config) => {
  config.addPassthroughCopy("img");
  config.addPassthroughCopy("files");
  config.addPassthroughCopy("css");

  return {
    templateFormats: [
      'html',
      'njk'
    ],
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  }
}

module.exports = configure;
