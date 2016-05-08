var x = 10,
    y = 10,
    element = document.getElementById('game-of-life'),
    world = new GameOfLife.World(x, y),
    hasChanged = false;

  element.style.height = (y * 10) + 'px';
  element.style.width = (x * 10) + 'px';

  function renderWorld(element, world) {
    var i, j, node, className, child,
      fragment = document.createDocumentFragment();

    while (child = element.firstChild) {
      element.removeChild(child);
    }
    for (i = 1; i <= y; i++) {
      for (j = 1; j <= x; j++) {
        node = document.createElement('span');
        className = 'cell cell-' + j + '-' + i;
        if (world.getCoordinateAt(j, i).hasLiveCell()) {
          className += ' active';
        }
        node.className = className;
        fragment.appendChild(node);
      }
    }
    element.appendChild(fragment);
  }

  function updateWorld(element, world) {
    var hasChanged = false;
    for (i = 1; i <= y; i++) {
      for (j = 1; j <= x; j++) {
        var className = 'cell cell-' + j + '-' + i;

        var cell = document.getElementsByClassName(className)[0];
        var previousClassName = cell.className;

        if (world.getCoordinateAt(j, i).hasLiveCell()) {
          className += ' active';
        } 
        if (className !== previousClassName) {
          hasChanged = true;
        }
        cell.className = className;
      }
    }
    return hasChanged;
  }

renderWorld(element, world);
setInterval(function() {
  world.tick();
  hasChanged = updateWorld(element, world);
  if (hasChanged === false) {
    world = new GameOfLife.World(x, y);
    renderWorld(element, world);
  }
}, 2000);