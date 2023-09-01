let btn = document.querySelector("button");
let inp2 = document.querySelector("#myInput2");
let list = document.querySelector(".list");
let url = "http://universities.hipolabs.com/search?country=";

btn.addEventListener("click", async () => {
  list.innerText = "";
  let country = document.querySelector("#myInput").value;
  let state = document.querySelector("#myInput2").value;
  // console.log(state);
  let ans = await getclg(country);

  showInfo(ans, state);
});

function showInfo(ans, state) {
  let idx = 0;
  console.log(state);
  for (let ele of ans) {
    let sp = "state-province";

    if (ele[sp] != null) {
      if (ele[sp] == state) {
        let li = document.createElement("li");
        li.innerHTML = ` Name : ${ele.name} ,</br> State : ${ele[sp]} }`;
        list.appendChild(li);
      }
    }

    if (state == "") {
      let li = document.createElement("li");
      li.innerHTML = ` Name : ${ele.name} ,</br> State : ${ele[sp]}`;
      list.appendChild(li);
    }
  }
}

async function getclg(country) {
  try {
    let clgdata = await axios.get(url + country);

    return clgdata.data;
  } catch (e) {
    console.log("error in api", e);
  }
}
