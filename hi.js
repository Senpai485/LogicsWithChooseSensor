let leds = 0;
let SOS = 0;
let messagesToDisplay = [];

const sensorActions = {
  sensorgas: {
    0: () => {
      console.log("Sensor de gas funcionando e nada de erro!");
    },
    1: () => {
      leds += 4;
      messagesToDisplay.push(ledMessages[4]);
    },
  },
  giroscopio: {
    1: () => {
      console.log("Queda detetada!");
      leds += 2;
      messagesToDisplay.push(ledMessages[6]);
    },
  },
  sensorpir: {
    1: () => {
      leds += 1;
      messagesToDisplay.push(ledMessages[1]);
    },
  },
  sensorpeso: {
    1: () => {
      console.log("Peso detetado");
      leds += 3;
      SOS += 1;
      messagesToDisplay.push(ledMessages[3]);
    },
  },
};

function processSensor(sensorName, value) {
  if (sensorName === "sensorpeso" && giroscopio !== 1) {
    return; 
  }
  const action = sensorActions[sensorName] && sensorActions[sensorName][value];
  if (action) action();
}

let ledMessages = {
  4: "Luzes de SOS Gas ligando!",
  6: "Luzes de queda Ativas!",
  1: "Luzes automaticas ligadas",
  3: "Leds de SOS Ligadas",
};

function displayAllMessages() {
  for (let message of messagesToDisplay) {
    console.log(message);
  }
}

let sensorgas = 0;
let giroscopio = 0;
let sensorpir = 0;
let sensorpeso = 1;

processSensor("sensorgas", sensorgas);
processSensor("giroscopio", giroscopio);
processSensor("sensorpir", sensorpir);
processSensor("sensorpeso", sensorpeso);

if (SOS === 1) {
  console.log("empresa sendo informada!");
}
displayAllMessages();
