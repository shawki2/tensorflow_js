<html>
 <head>
 <!-- Load TensorFlow.js -->
 <!-- Get latest version at https://github.com/tensorflow/tfjs -->
 <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.11.2">   
 </script>
 </head>
 <body>
   <div id="output_field"></div>
 </body>
 <script>
 async function learnLinear(){
  const model = tf.sequential();
  model.add(tf.layers.dense({units: 1, inputShape: [1]}));
  model.compile({
   loss: 'meanSquaredError',
   optimizer: 'sgd'
  });
  
  const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
  const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);
  
  await model.fit(xs, ys, {epochs: 500});
  
  document.getElementById('output_field').innerText =
   model.predict(tf.tensor2d([10], [1, 1]));
 }
 learnLinear();
 </script>
<html>