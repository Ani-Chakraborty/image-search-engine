 const accesskey = "4m5TNp_P2qMbjUeWVZQ75ehVaSolNyvvovL-34TqB4g"
 let searchForm = document.getElementById("search-form");
 let searchPlace= document.getElementById("search-place");
 let searchResult= document.getElementById("search-result");
 let showMore= document.getElementById("show-more");
 let keyword = "";
 let page =1;
 async function searchImages(){
    keyword=searchPlace.value;
   let url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
   &client_id=${accesskey}&per_page=12`;
   const response = await fetch(url);
   const data = await response.json();
   console.log(data);
   if (page ===1){
      searchResult.innerHTML="";
   }

   const results = data.results;

   results.map((result)=>{
      const image = document.createElement("img") ;
      image.src = result.urls.small;
      const imageLink =  document.createElement("a");
      imageLink.href= result.links.html;
     imageLink.target="_blank";
     imageLink.appendChild(image);
     searchResult.appendChild(imageLink);

   })
   showMore.style.display="block"
 }
 searchForm.addEventListener("submit",(e)=>{
e.preventDefault();
 page=1;
   searchImages()
 })      
 showMore.addEventListener("click",function(){
   page++;
   searchImages();
 }) 