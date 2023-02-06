// get the details of the issues of the project in json
let allIssuesJson = document.getElementById('issue-data').getAttribute('data');
// parse the data
let allIssues = JSON.parse(allIssuesJson);
// get element where filtered issues will be shown
let allIssueList = document.getElementById('issues-list');

let showAllBtn = document.getElementById('showAllBtn');

showAll();
showAllBtn.addEventListener("click" , showAll)

function showAll(){
    for (let issue of allIssues) {
        let Div = document.createElement('div');
        Div.style = 'none';
        Div.innerHTML = `
          <div class="card w-100" >
        <div class="card-body" >
          <h4 class="card-title">Title : ${issue.title} </h4>
          <h5 class="card-title">Author : ${issue.author}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Description : ${issue.description}
          </h6>
        </div>
      </div>
      `;
      allIssueList.appendChild(Div);
    }
    

}

