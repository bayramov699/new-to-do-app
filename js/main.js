$(document).ready(() => {
  const input = $("#input");
  const submit = $("#submit");
  const listItems = $(".adds ul");

  let storedObj = localStorage.getItem("todos");

  if (storedObj) {
    const newObj = JSON.parse(storedObj);

    for (let task in newObj["datas"]) {
      let todo = `
          <li>
          <span id="todo-item">${newObj["datas"][task]}</span>
          <button type="button" onclick="ready(this)" class="btn btn-success">DONE</button><br>
          </li>`;
      $(todo).appendTo(listItems);
    }
  }

  submit.on("click", () => {
    let todoObj = {
      datas: [],
    };
    if (storedObj) {
      const newObj = JSON.parse(storedObj);
      newObj["datas"].push(input.val());
      localStorage.setItem("todos", JSON.stringify(newObj));
    } else {
      todoObj["datas"].push(input.val());
      localStorage.setItem("todos", JSON.stringify(todoObj));
    }
    let todo = `<li>
      <span>${input.val()}</span>
      <button type="button" onclick="ready(this)" class="btn btn-success">DONE</button><br>
      </li>`;
    $(todo).appendTo(listItems);
    input.val("");
  });
});

function ready(e) {
  let localArr = [];
  let storedObj = JSON.parse(localStorage.getItem("todos"));
  const data = $(e).parent().find("span").text();

  for (let task in storedObj["datas"]) {
    if (data !== storedObj["datas"][task]) {
      localArr.push(storedObj["datas"][task]);
    }
  }
  storedObj["datas"] = localArr;

  localStorage.setItem("todos", JSON.stringify(storedObj));

  $(e).parent().find("span").css("text-decoration", "line-through");
}

const slideshow = new Slideshow({
  tickInterval: 5000,
  transitionTime: 100,
  backgroundElementId: "background"
});

slideshow.setImages(
  ['https://source.unsplash.com/1200x700/?nature']
);
slideshow.run();