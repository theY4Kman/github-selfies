var pageMod = require('sdk/page-mod');
var self = require('sdk/self');

pageMod.PageMod({
  include: new RegExp(".+github\.com.+/compare.+"),
  contentScriptFile: [self.data.url("jquery.min.js"),
                      self.data.url("selfie-base.js"),
                      self.data.url("compare.js")]
});

pageMod.PageMod({
  include: new RegExp(".+github\.com.+/pull/.*"),
  contentScriptFile: [self.data.url("jquery.min.js"),
                      self.data.url("selfie-base.js"),
                      self.data.url("pull.js")]
});

pageMod.PageMod({
  include: new RegExp(".+github\.com.+/issues/new"),
  contentScriptFile: [self.data.url("jquery.min.js"),
                      self.data.url("selfie-base.js"),
                      self.data.url("new-issue.js")]
});

pageMod.PageMod({
  include: new RegExp(".+github\.com.+/issues/.+"),
  contentScriptFile: [self.data.url("jquery.min.js"),
                      self.data.url("selfie-base.js"),
                      self.data.url("issues.js")]
});
