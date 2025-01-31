// function hide(){
//     let click=document.getElementsByClassName('click');
//     let elements=document.getElementsByClassName('elements');
//     if(elements.style.display != 'none'){
//         elements.style.display='none';
//     }
//     else{
//         elements.style.display='block';
//     }
// }


// function search_courses(){
//     let input = document.getElementById('searchbar').value;
//     input = input.toLowerCase();
//     let x=document.getElementsByClassName('course');
//     for(i=0; i<x.length; i++)
//     {
//         if(!x[i].innerHTML.toLowerCase().includes(input))
//         {
//             x[i].style.display="none"
//         }
//         else{
//             x[i].style.display="list-items"
//         }
//     }
// }


// function searchFunction() {
//     let input = document.getElementById('search-input').value.toLowerCase();
//     let items = document.querySelectorAll('#search-results li');
   
//     items.forEach(function(item) {
//         if (item.textContent.toLowerCase().includes(input)) {
//             item.classList.remove('hidden');
//         } else {
//             item.classList.add('hidden');
//         }
//     });
// }

// function clearSearch() {
//     document.getElementById('search-input').value = '';
//     searchFunction();
// }


// // Function to show the list when the input field is focused
// function showList() {
//     document.getElementById('itemList').classList.remove('hidden');
//   }
  
//   // Function to filter items based on input
//   function filterItems() {
//     let input = document.getElementById('searchInput').value.toLowerCase();
//     let items = document.getElementById('itemList').getElementsByTagName('li');

//     for (let i = 0; i < items.length; i++) {
//       let itemText = items[i].textContent.toLowerCase();
//       if (itemText.indexOf(input) > -1) {
//         items[i].style.display = '';
//       } else {
//         items[i].style.display = 'none';
//       }
//     }
//   }

//   // Function to handle the search button click (optional)
//   function searchItems() {
//     let inputValue = document.getElementById('searchInput').value;
//     alert('You searched for: ' + inputValue);
//   }


function showSuggestions() {
  document.getElementById('suggestionsList').style.display = 'block';
}

function filterSuggestions(event) {
  const filter = event.target.value.toLowerCase();
  const listItems = document.querySelectorAll('.suggestion-item');
 
  listItems.forEach(item => {
    if (item.textContent.toLowerCase().includes(filter)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function performSearch() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const listItems = document.querySelectorAll('.suggestion-item');

  listItems.forEach(item => {
    if (item.textContent.toLowerCase() === searchTerm) {
      window.location.href = item.href;
    }
  });
}

// Optional: Allow pressing Enter to trigger search
document.getElementById('searchInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    performSearch();
  }
});