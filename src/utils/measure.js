export default function getMeasure(foodDetail) {
  const MEASURE_NUMBER = 20;
  const measure = [];
  for (let i = 1; i < MEASURE_NUMBER; i += 1) {
    if (foodDetail[`strMeasure${i}`] !== ' ') {
      measure.push(foodDetail[`strMeasure${i}`]);
    }
  }
  return measure;
}
