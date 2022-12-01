//create 'containers'

let frame = document.querySelector('.frame')
let calArr = [];
let updatedCalArr = [];
let checkArr = [];

function Calendar(name, score) {
  this.name = name;
  this.score = score;

}

let familyArr = ["Doris", "Ernie", "Kenda", "Steven", "Annie", "Jeff", "Chris", "Brian", "Jonah", "Ethan", "Darrah", "Elliot", "Hannah", "Oliver"];




setInterval(
  function () {

    let pills = document.querySelectorAll('.pill')
    for (let i = 0; i < pills.length; i++) {
      var bgColor = Math.floor(Math.random() * 16777215).toString(16);
      pills[i].style.backgroundColor = "#" + bgColor;
    }
  }, 1000);

//create Ratings grid


let jellyArr = [{ name: "Fig with Cardamom", id: "fig" }, { name: "Apricot and Mango Spread", id: "Apricot" }]

for (let i = 0; i < jellyArr.length; i++) {
  let familyList = document.createElement("div");
  familyList.classList.add('family-list');
  familyList.setAttribute("ondrop", "drop(event)");
  familyList.setAttribute("ondragover", "allowDrop(event)");
  frame.appendChild(familyList)
  for (let j = 0; j < familyArr.length; j++) {
    let familyPill = document.createElement("a")
    familyPill.draggable = "true";
    familyPill.setAttribute("ondragstart", "drag(event)");
    familyPill.setAttribute("name", `${familyArr[j]}-${i}`);
    familyPill.id = `drag${j}-${i}`
    familyPill.classList.add('pill');
    let bgColor = Math.floor(Math.random() * 16777215).toString(16)
    familyPill.style.backgroundColor = `#${bgColor}`;
    familyPill.classList.add(`${familyArr[j]}-${i}`)
    familyPill.innerHTML = `${familyArr[j]}`
    familyList.appendChild(familyPill)
  }
  let jellyTable = document.createElement("table");
  jellyTable.classList.add('ratingsgrid');
  jellyTable.setAttribute("ondrop", "drop(event)");
  jellyTable.setAttribute("ondragover", "allowDrop(event)");
  jellyTable.innerHTML = `
  <tr class="ratings">
  <th></th>
  <th> 0</th>
  <th>.5</th>
  <th> 1</th>
  <th>1.5</th>
  <th>2</th>
  <th>2.5</th>
  <th>3</th>
  <th>3.5</th>
  <th>4</th>
  <th>4.5</th>
  <th>5</th>
  <th>5.5</th>
  <th>6</th>
  <th>6.5</th>
  <th>7</th>
  <th>7.5</th>
  <th>8</th>
  <th>8.5</th>
  <th>9</th>
  <th>9.5</th>
  <th>10</th>
  </tr>
  <tr>

  
  <th class="jelly">${jellyArr[i].name}</th>
  <td id="${jellyArr[i].id}-aa"></td>
  <td id="${jellyArr[i].id}-bb"></td>
  <td id="${jellyArr[i].id}-a"></td>
  <td id="${jellyArr[i].id}-b"></td>
  <td id="${jellyArr[i].id}-c"></td>
  <td id="${jellyArr[i].id}-d"></td>
  <td id="${jellyArr[i].id}-f"></td>
  <td id="${jellyArr[i].id}-g"></td>
  <td id="${jellyArr[i].id}-h"></td>
  <td id="${jellyArr[i].id}-i"></td>
  <td id="${jellyArr[i].id}-j"></td>
  <td id="${jellyArr[i].id}-k"></td>
  <td id="${jellyArr[i].id}-l"></td>
  <td id="${jellyArr[i].id}-m"></td>
  <td id="${jellyArr[i].id}-n"></td>
  <td id="${jellyArr[i].id}-o"></td>
  <td id="${jellyArr[i].id}-p"></td>
  <td id="${jellyArr[i].id}-q"></td>
  <td id="${jellyArr[i].id}-r"></td>
  <td id="${jellyArr[i].id}-s"</td>
  <td id="${jellyArr[i].id}-t"></td>
  </tr>
  
  `

  frame.appendChild(jellyTable)




}


// drag and drop functions
function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {

  e.dataTransfer.setData("text", e.target.id);
  e.dataTransfer.setData("name", e.target.name);
  console.log(e.target)
}

function drop(e) {
  e.preventDefault();
  pillDrop(e);
}


//place pill
let pillDrop = (e) => {
  let data = e.dataTransfer.getData("text");
  let family = e.dataTransfer.getData("name");
  if (e.target.tagName !== "A") {

    e.target.appendChild(document.getElementById(data));

  }
  let slot = e.target.id
  let cal = `${family}Calendar`
  cal = new Calendar(family, slot)

  if (e.target.tagName !== "DIV") {

    calArr.push(cal)
  }

  else {

    calArr.pop(cal)
  }
  console.log(calArr)
  calendarUpload();

}




//file upload/download

const calendarDownload = () => {
  fetch("https://daysofjelly-default-rtdb.firebaseio.com/calendar.json")
    .then(response => response.json())
    .then(data => {
      setCalendar(data)
      calArr = updatedCalArr
    }
    )
}

const dbTest = () => {
  fetch("https://daysofjelly-default-rtdb.firebaseio.com/calendar.json")
      .then(response => response.json())
      .then(data => {
            console.log(data)
          }
      )
}

const calendarUpload = () => {
  calArr = updatedCalArr
  fetch("https://daysofjelly-default-rtdb.firebaseio.com/calendar.json", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(calArr)
  })
}

const familyUpload = () => {
  fetch("https://daysofjelly-default-rtdb.firebaseio.com/familyList.json", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(familyArr)
  })
}

const resetCalendar = () => {
  calArr = updatedCalArr
  fetch("https://daysofjelly-default-rtdb.firebaseio.com/calendar.json", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}



let setCalendar = (data) => {
  updatedCalArr = (data);

  for (let i = 0; i < updatedCalArr.length; i++) {
    let familyName = document.querySelector(`.${updatedCalArr[i].name}`)
    let timeSlot = document.querySelector(`#${updatedCalArr[i].score}`)
    console.log(updatedCalArr[i].score)
    timeSlot.appendChild(familyName)
  }
}
const init = () => {
  calendarDownload()
  dbTest()

}

init();
