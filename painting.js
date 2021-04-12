
function createRoad(size) {
  const road = new Array(size).fill(0);

  return {
    paint: function(from, to) {
      for (let i = from; i < to; i++) {
        road[i] = 1;
      }
    },

    getPaintedSections: function() {
      return road.reduce((acc, x) => {
        return acc + x
      }, 0);
    },

    getSections: function() {
      return road.length;
    }
  };
}

const Actions = {
  PAINT: 1,
  STOP: 0,
  MOVE: 2
};

function createAction(step) {
  return {
    type: step[0],
    position: step[1]
  };
}

function paintingPercentage(size, actionList) {
  console.log('size: ' + size);
  console.log('actions: ' + actionList);
  console.log('actions.length: ' + actionList.length);
  console.log('actions[0].length: ' + actionList[0].length);
  console.log('actions[1].length: ' + actionList[1].length);
  const road = createRoad(size);
  let painting = false;
  let currentPosition = 0;
  actionList.forEach(step => {
    const action = createAction(step);

    if (painting) {
      road.paint(currentPosition, action.position);
    }

    if (action.type == Actions.PAINT) {
      painting = true;
    } else if (action.type == Actions.STOP) {
      painting = false;
    }

    currentPosition = action.position;
  });

  return road.getPaintedSections() / road.getSections();
}

