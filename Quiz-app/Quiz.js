let ques = [
  {
    que: 'What is a correct syntax to output "Hello World" in Python?',
    options: {
      a: 'echo("Hello World")',
      b: 'echo"Hello World"',
      c: 'print("Hello World")',
      d: 'p("Hello World")',
    },
    correct: "c",
  },
  {
    que: "How do you insert COMMENTS in Python code?",
    options: {
      a: " #This is a comment",
      b: "/*This is a comment*/",
      c: "//This is a comment",
      d: "||This is a comment",
    },
    correct: "a",
  },
  {
    que: "Which one is NOT a legal variable name?",
    options: {
      a: "my_var",
      b: "_myvar",
      c: "my-var",
      d: "myvar",
    },
    correct: "c",
  },
  {
    que: "How do you create a variable with the numeric value 5?",
    options: {
      a: "x==5",
      b: "x=int(5)",
      c: 'x="5"',
      d: "x:5",
    },
    correct: "b",
  },
  {
    que: "What is the correct way to create a function in Python?",
    options: {
      a: "create myFunction():",
      b: "def myFunction():",
      c: "function myFunction():",
      d: "let myFunction=()=>{}",
    },
    correct: "b",
  },
  {
    que: "What is a correct syntax to return the first character in a string?",
    options: {
      a: ' x = sub("Hello", 0, 1)',
      b: ' x = "Hello".sub(0, 1)',
      c: ' x = "Hello"[0]',
      d: ' x = "Hello"=>sub(0, 1)',
    },
    correct: "c",
  },
];
let pnt = 0;
let points = document.querySelector("#pts"),
  question = document.querySelector(".que"),
  option = document.querySelector(".options"),
  que_no = 0,
  form = document.querySelector(".form");
points.innerHTML = pnt;

let restartbnt = document.querySelector("#restart"),
  resultbox = document.querySelector(".result"),
  result = document.querySelector("#result");
const sleep = (sec) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, sec);
  });
};

const init_que = () => {
  console.log(que_no);
  // question.innerHTML = `<p id='que'>${ques[que_no].que}</p>`;
  let qtext = document.querySelector("#que");
  qtext.innerHTML = ques[que_no].que;
  for (const opt in ques[que_no].options) {
    let btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = ques[que_no].options[opt];
    btn.value = opt;
    option.append(btn);
  }
  get_result(ques[que_no].correct);
};

const add_pnt = () => {
  pnt++;
  points.innerHTML = pnt;
  console.log(pnt);
};
const get_result = (crtans) => {
  let val = null,
    btns = document.querySelectorAll(".btn");
  console.log(btns);
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      val = e.target.value;
      if (val == crtans) {
        console.log(val);
        add_pnt();
        next_que();
        return true;
      } else {
        next_que();
        return false;
      }
    });
  });
};

const next_que = () => {
  option.innerHTML = "";
  if (que_no < ques.length - 1) {
    que_no++;
    init_que();
  } else {
    show_result();
  }
};

const show_result = () => {
  question.classList.toggle("blank");
  option.classList.toggle("blank");
  resultbox.classList.toggle("blank");
  result.innerHTML = `Yours points is : ${pnt}`;
};
restartbnt.addEventListener("click", () => {
  form.classList.toggle("blank");
  resultbox.classList.toggle("blank");
  document.querySelector("#name").innerHTML = '';
  document.querySelector("#USN").innerHTML = '';
  document.querySelector("#roll_no").innerHTML = '';
  que_no = 0;
  pnt = 0;
});

const start = () => {
  points.innerHTML = pnt;
  let name = document.querySelector("#iname"),
    usn = document.querySelector("#iUSN"),
    roll_no = document.querySelector("#iroll_no");
  document.querySelector("#name").innerHTML = name.value;
  document.querySelector("#USN").innerHTML = usn.value;
  document.querySelector("#roll_no").innerHTML = roll_no.value;
  form.classList.toggle("blank");
  question.classList.toggle("blank");
  option.classList.toggle("blank");

  init_que();
};
