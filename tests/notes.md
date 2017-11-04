Its taking a long time to compile

```
/home/aaron/devel/groups/mine/sibilant/maps/src/macros/lambda.sibilant:174
     (sibilant.docs.record 'function (first sibilant.macros.search-path) name node)
                     ^
RangeError: Maximum call stack size exceeded
    at /home/aaron/devel/groups/mine/sibilant/maps/include/functional.sibilant:80:20
    at Array.reduce (native)
    at /home/aaron/devel/groups/mine/sibilant/maps/include/functional.sibilant:19:6
    at inject$ (/home/aaron/devel/groups/mine/sibilant/maps/src/macros/lambda.sibilant:174:22)
    at /home/aaron/devel/groups/mine/sibilant/maps/include/functional.sibilant:80:20
    at flatten$ (/home/aaron/devel/groups/mine/sibilant/maps/src/macros/lambda.sibilant:174:22)
    at /home/aaron/devel/groups/mine/sibilant/maps/include/functional.sibilant:77:6
    at /home/aaron/devel/groups/mine/sibilant/maps/src/macros/lambda.sibilant:174:22
    at /home/aaron/devel/groups/mine/sibilant/maps/include/functional.sibilant:90:21
    at Array.reduce (native)

```
