let data =[
  {
    name:"akash",
    score:45,
    uid:"uhfew"
  },
  {
    name:"tomin",
    score:56,
    uid:"5386"
  },
  {
    name:"dona",
    score:34,
    uid:"djkhhd"
  },
  
  {
    name:"rese",
    score:30,
    uid:"djkhhd"
  },
  {
    name:"mathews",
    score:50,
    uid:"3435"
  }
]
function bblSort(arr){
	
  for(var i = 0; i < arr.length; i++){
  for(var j = 0; j < ( arr.length - i -1 ); j++){
    if(arr[j].score > arr[j+1].score){
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
    count<3?style="width:100%;background-color:green":style="width:100%;background-color:red";
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
  