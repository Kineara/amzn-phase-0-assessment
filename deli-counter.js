const deliQueue = [];

function line(queue) {
  if (queue.length === 0) {
    console.log("The line is currently empty.");
  } else {
    const linePositions = queue.map(person => ` ${deliQueue.indexOf(person) + 1}. ${person}`);
    console.log(`The line is currently:${linePositions}.`);
  }
}

function takeANumber(queue, name) {
  queue.push(name);
  console.log(`Welcome, ${name}. You are number ${deliQueue.indexOf(name) + 1} in line.`);
}

function nowServing(queue) {
  if (queue.length === 0) {
    console.log("There is nobody waiting to be served!");
  } else {
    const serving = queue.shift();
    console.log(`Currently serving ${serving}.`);
  }
}

function personLeft(queue, name) {
  queue.splice((queue.indexOf(name)), 1);
  console.log(`${name} has lost their place in line!`);
}

function fireAlarm(queue) {
  console.log(`${queue.join(', ')}! The fire alarm's been pulled, everyone out!`);
}
