//your JS code here. If required.
const form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
	e.preventDefault()
	const title=e.target.title.value
	const author=e.target.author.value
	const isbn=e.target.isbn.value
	
const tr=document.createElement("tr");
	tr.innerHTML=`<td>${title}</td><td>${author}</td><td>${isbn}</td><td><button class="delete">X</button></td>`
	const tbody=document.querySelector("#book-list");
	tbody.appendChild(tr);
	e.target.reset();
	
})


const tbody = document.getElementById("book-list");
tbody.addEventListener('click', (e) => {
	if(e.target.classList.contains("delete")){
		const deleteBtn = e.target;
		deleteBtn.closest("tr").remove();
	}
})
