(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[94],{278:function(e,n){e.exports=function(e){var n="([\\w-]+|@{[\\w-]+})",a=[],t=[],s=function(e){return{className:"string",begin:"~?"+e+".*?"+e}},i=function(e,n,a){return{className:e,begin:n,relevance:a}},r={begin:"\\(",end:"\\)",contains:t,relevance:0};t.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s("'"),s('"'),e.CSS_NUMBER_MODE,{begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",excludeEnd:!0}},i("number","#[0-9A-Fa-f]+\\b"),r,i("variable","@@?[\\w-]+",10),i("variable","@{[\\w-]+}"),i("built_in","~?`[^`]*?`"),{className:"attribute",begin:"[\\w-]+\\s*:",end:":",returnBegin:!0,excludeEnd:!0},{className:"meta",begin:"!important"});var c=t.concat({begin:"{",end:"}",contains:a}),l={beginKeywords:"when",endsWithParent:!0,contains:[{beginKeywords:"and not"}].concat(t)},o={begin:n+"\\s*:",returnBegin:!0,end:"[;}]",relevance:0,contains:[{className:"attribute",begin:n,end:":",excludeEnd:!0,starts:{endsWithParent:!0,illegal:"[<=$]",relevance:0,contains:t}}]},d={className:"keyword",begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",starts:{end:"[;{}]",returnEnd:!0,contains:t,relevance:0}},b={className:"variable",variants:[{begin:"@[\\w-]+\\s*:",relevance:15},{begin:"@[\\w-]+"}],starts:{end:"[;}]",returnEnd:!0,contains:c}},g={variants:[{begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:n,end:"{"}],returnBegin:!0,returnEnd:!0,illegal:"[<='$\"]",relevance:0,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,l,i("keyword","all\\b"),i("variable","@{[\\w-]+}"),i("selector-tag",n+"%?",0),i("selector-id","#"+n),i("selector-class","\\."+n,0),i("selector-tag","&",0),{className:"selector-attr",begin:"\\[",end:"\\]"},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"\\(",end:"\\)",contains:c},{begin:"!important"}]};return a.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,d,b,o,g),{case_insensitive:!0,illegal:"[=>'/<($\"]",contains:a}}}}]);
//# sourceMappingURL=less.js.map?v=e8d55ef2698926b9eb5c