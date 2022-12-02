let data=[
  {
    name:"Jose Joyal Shaji",
    score:70,
    uid:"663"
    
  },
  {
    name:"Alan S",
    score:50,
    uid:"680"
  },
  
  {
    name:"Rahesh Rajappan",
    score:0,
    uid:"543"
  },
  {
    name:"Franio Sonilal",
    score:0,
    uid:"570"
  },
  {
    name:"Sabin Shajan",
    score:0,
    uid:"476"
  },
  
  
  {
    name:"Alan Shaji",
    score:80,
    uid:"677"
  },{
    name:"Richa Sara Kuruvilla",
    score:40,
    uid:"466"
  },{
    name:"Parvathy V",
    score:30,
    uid:"467"
  },{
    name:"Aswin Sreenivas",
    score:30,
    uid:"676"
  },{
    name:"Jevin K Mathew",
    score:0,
    uid:"580"
  },{
    name:"Abel Benny",
    score:0,
    uid:"572"
  },{
    name:"VISHNU MANOJKUMAR A V",
    score:0,
    uid:"576"
  }
]
function bblSort(arr){
	
  for(var i = 0; i < arr.length; i++){
  for(var j = 0; j < ( arr.length - i -1 ); j++){
    if(arr[j].score < arr[j+1].score){
    var temp = arr[j]
    arr[j] = arr[j + 1]
    arr[j+1] = temp
    }
  }
  }
  }
  bblSort(data);
  box=document.getElementById("board");
  count=0;

  
  data.forEach(element => {
    count++;
    count<=5?style="width:100%;background-color:rgba(255, 255, 255, 1)":style="width:100%;background-color:rgba(255, 255, 255, 0.6);";
    box.innerHTML+=`<div class="mb-2 col-12 d-flex justify-content-center">
    <div id="ec-card" class="card card-branch" style="${style}">
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <h5 id="uuid" class="ms-3">${element.uid}</h5><br>
                </div>
                <div class="col text-end">
                    <h5 id="score" class="mt-0 me-3 mb-2">${element.score}</h5>
                </div>
            </div>
        </div>
    </div>
</div>`
  });
  