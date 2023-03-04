const bars = document.querySelectorAll('.bar')

// Fetch Data
let BARS = [];

const fetchData = async () => {
  const response = await fetch('js/data.json')
  const data = await response.json();
  BARS = data
   displayData();
}
fetchData()

function displayData(){
    BARS.forEach((bar) => {
        document.querySelector('.chart__bars').innerHTML += `
        <div class="bar">
        <span class="bar-amount">
        <small>$${bar.amount}</small>
      </span>
        <div class="bar-line" style='height:${bar.amount * 3}px'></div>
        <div class="bar-date">
         <p>${bar.day}</p>
        </div>`
    });
   findLargestBar()
}


    // Finding largest bar;
    // Traverse array elements from second and compare
    //  every element with current max.

const findLargestBar = () =>{ 
  // Initialize maximum element
  if(BARS !== []){
    let maxBar = BARS[0];
    BARS.forEach((bar,index) => {
     if(bar.amount > maxBar.amount){
     maxBar = BARS[index];
     }   
     }) 
    //  Get Index of maxbar
     const barNo = BARS.indexOf(maxBar)
     const bar_height = document.querySelectorAll('.bar-line');
     bar_height[barNo].style.backgroundColor = 'hsl(186, 34%, 60%)'
  }
}

// Select the node_list of elements that have the className bar and at the index
// of maxBar add the largest-bar class.
