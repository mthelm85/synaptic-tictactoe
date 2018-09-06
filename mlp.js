const { Layer, Network } = require('synaptic')

const data = require('./data.js')

const inputLayer = new Layer(9)
const hiddenLayer = new Layer(8)
const outputLayer = new Layer(1)

inputLayer.project(hiddenLayer)
hiddenLayer.project(outputLayer)

const myNetwork = new Network({
  input: inputLayer,
  hidden: [hiddenLayer],
  output: outputLayer
})

let learningRate = .3

for (let i = 0; i < 20000; i++) {

  // TL, TM, TR, ML, MM, MR, BL, BM, BR, 1 is X, 0 is O, 0.5 is blank
  // 1 is a win for X, 0 is a win for O
  for (let i = 0; i < data.results.length; i++) {
    myNetwork.activate(data.results[i])
    myNetwork.propagate(learningRate, [data.wins[i]])
  }

}

const t3 = myNetwork.standalone()

module.exports = {
  t3
}
