ace.define("ace/theme/xcode",["require","exports","module","ace/lib/dom"],function(e,t,n){t.isDark=!1,t.cssClass="ace-xcode",t.cssText="
.ace-xcode .ace_gutter {background: #282A36;color: #565A6D} <done>
.ace-xcode .ace_print-margin {width: 1px;background: #30DC23} <testing as green>
.ace-xcode {background-color: #282A36;color: #72B3EC} <done - main text in light blue, gets a little too much though>
.ace-xcode .ace_cursor {color: #FFFFFF} <done>
.ace-xcode .ace_marker-layer .ace_selection {background: #424556} <done>
.ace-xcode.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #FFCC68;}
.ace-xcode .ace_marker-layer .ace_step {background: #30DC23} <testing as green ok>
removed -> .ace-xcode .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #FFCC68} <done - bracket when highlighting, a little annoying>
.ace-xcode .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.071)}
.ace-xcode .ace_gutter-active-line {background-color: rgba(0, 0, 0, 0.071)} <**removed**>
.ace-xcode .ace_marker-layer .ace_selected-word {border: 1px solid #FFCC68} <done>

.ace-xcode .ace_constant.ace_language {color: #9B76CE} <done - super, true, no>
.ace-xcode .ace_keyword {color: #9B76CE} <done - class, let, get>
.ace-xcode .ace_keyword.ace_operator {color: #C1C1C1;} <done - =-> >
.ace-xcode .ace_meta,.ace-xcode .ace_variable.ace_language {color: #C1C1C1} <done - parameter names>

.ace-xcode .ace_invisible {color: #343744} <done>
.ace-xcode .ace_constant.ace_character,.ace-xcode .ace_constant.ace_other {color: #275A5E}
.ace-xcode .ace_constant.ace_numeric {font-weight: 600;color: #59C29C} <done>

.ace-xcode .ace_entity.ace_other.ace_attribute-name {color: #30DC23} <testing as green - ok not sure where>
.ace-xcode .ace_support.ace_constant {color: #59C29C} <string green ok - css inline-block, solid, table-cell>
.ace-xcode .ace_support.ace_function {color: #2B74CC} <done - could breakup more - subscript, print, (return), (func calls)>
added -> .ace-xcode .ace_punctuation.ace_operator {color: #C1C1C1} < does nothing so far??)>
added -> .ace-xcode .ace_paren {color: #C1C1C1} < done! ()>
added -> .ace-xcode .ace_function.ace_buildin {color: #30DC23} <testing as green - ok not sure where>
added -> .ace-xcode .ace_support {color: #30DC23} <testing as green - ok not sure where>
added -> .ace-xcode .ace_definition,.ace-xcode .ace_type {color: #30DC23} <testing as green - ok not sure where>

.ace-xcode .ace_fold {background-color: #565A6D;border-color: #7F7F7F} <done - folding icon>
.ace-xcode .ace_entity.ace_name.ace_tag,.ace-xcode .ace_support.ace_class,.ace-xcode .ace_support.ace_type {color: #EE87C5} <fine pink in CSS -> attributes>
.ace-xcode .ace_storage {color: #2B74CC} <done - Int, String>
.ace-xcode .ace_string {color: #59C29C} <done>
.ace-xcode .ace_string.ace_regexp {color: #30DC23;} <testing as green - not sure where>
.ace-xcode .ace_comment {font-style: italic;color: #7F7F7F} <done>
.ace-xcode .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==) right repeat-y}";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)})