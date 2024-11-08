const mainData = () => {
  fetch("https://anime--template-default-rtdb.firebaseio.com/anime.json")
    .then((respons) => {
        return respons.json();
  })
    .then((data) => {
        console.log(data)
    })
};
mainData();
