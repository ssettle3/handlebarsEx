(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['guns'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <h1> "
    + escapeExpression(((helper = (helper = helpers.gun || (depth0 != null ? depth0.gun : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gun","hash":{},"data":data}) : helper)))
    + " </h1>\n  <h2> Caliber: "
    + escapeExpression(((helper = (helper = helpers.caliber || (depth0 != null ? depth0.caliber : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"caliber","hash":{},"data":data}) : helper)))
    + " </h2>\n  <p> Description: "
    + escapeExpression(((helper = (helper = helpers.des || (depth0 != null ? depth0.des : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"des","hash":{},"data":data}) : helper)))
    + " </p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.glockData : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
})();