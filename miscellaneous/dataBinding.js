function createData(object) {
  return new Proxy(object, {
    set(obj, prop, value) {
      obj[prop] = value;
      render();
    },
  });
}

let state = createData({ firstName: "", lastName: "" });

let listeners = document.querySelectorAll("[data-model]");
listeners.forEach((l) => {
  let boundPropName = l.dataset.model;
  l.addEventListener("keyup", () => {
    state[boundPropName] = l.value;
  });
});

function render() {
  let bindings = Array.from(document.querySelectorAll("[data-bind]")).map(
    (el) => el.dataset.bind
  );
  bindings.forEach((b) => {
    let elements = document.querySelectorAll(`[data-bind=${b}]`);
    elements.forEach((el) => {
      el.innerHTML = state[b];
    });
  });
}
