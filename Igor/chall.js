var vienna = [
    ['Vienna', ' ', ' ', ' ', ' '],
    [' ', 'is', ' ', ' ', ' '],
    [' ', ' ', 'a', ' ', ' '],
    [' ', ' ', ' ', 'nice', ' '],
    [' ', ' ', ' ', ' ', 'city']
]

console.table(vienna);
document.write(vienna)


// chapter 2

var s = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its$HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties$flow$down;$actions$flow$up";

var s2 = new Array();
s2 = s.split('$');


console.log(s2.join(' ') + '.')