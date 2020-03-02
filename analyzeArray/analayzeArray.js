const analyzeArray = array => {
  const arrayAnalysisObject = {};

  arrayAnalysisObject.max = Math.max.apply(null, array);
  arrayAnalysisObject.min = Math.min.apply(null, array);
  arrayAnalysisObject.length = array.length;
  arrayAnalysisObject.average =
    array.reduce((a, b) => a + b, 0) / arrayAnalysisObject.length;

  return arrayAnalysisObject;
};

module.exports = analyzeArray;
