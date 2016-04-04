var suite = Benchmark.Suite()

var arr_1MB = new Uint8Array(1000 * 1000)
var arr_100MB = new Uint8Array(100 * 1000 * 1000)

var subtle = crypto.subtle || crypto.webkitSubtle

suite
  .add('SHA-1 1MB', function (deferred) {
    var count = 0

    for (var i = 0; i < 4; i++) {
      subtle.digest({ name: 'sha-1' }, arr_1MB)
        .then(function (result) {
          count += 1
          if (count === 4) {
            deferred.resolve()
          }
        },
        function (error) {
          console.error(error)
        })
    }
  }, { defer: true })
  .add('SHA-1 100MB', function (deferred) {
    var count = 0

    for (var i = 0; i < 4; i++) {
      subtle.digest({ name: 'sha-1' }, arr_100MB)
        .then(function (result) {
          count += 1
          if (count === 4) {
            deferred.resolve()
          }
        },
        function (error) {
          console.error(error)
        })
    }
  }, { defer: true })
  .on('error', function (event) {
    console.error(event.target.error.stack)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .run({ async: true })
