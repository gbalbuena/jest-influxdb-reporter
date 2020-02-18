i = 0
class InfluxDBReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }
  
  onRunStart(results, options) {
    console.log(`[${i++}]`,'onRunStart');
  }

  onRunComplete(contexts, results) {
    console.log(`[${i++}]`,'onRunComplete');
    //   console.log('Custom reporter output:');
    //   console.log('GlobalConfig: ', this._globalConfig);
    //   console.log('Options: ', this._options);
  }

  onTestStart(test){
    console.log(`[${i++}]`,'onTestStart');
  }

  onTestResult(test, testResult, aggregatedResult) {
    console.log(`[${i++}]`,'onTestResult');
    // Catch console logs per test
    // console.log(`[${i++}]`,'test', test);
    // console.log(`[${i}]`, 'testResult', testResult);
    // console.log(`[${i}]`, 'aggregatedResult', aggregatedResult);

    // console.log('testResult', testResult.testResults.map((r) => {
    //   return {
    //     title: r.fullName,
    //     status: r.status,
    //     duration: r.duration,
    //     numPassingAsserts: r.numPassingAsserts
    //   };
    // }));
  };

  // getLastError
}
  
  module.exports = MyCustomReporter;
  // or export default MyCustomReporter;