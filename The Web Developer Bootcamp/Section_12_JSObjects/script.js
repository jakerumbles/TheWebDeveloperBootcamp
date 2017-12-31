var someObject = {
   friends: [
      {name: "Malfoy"},
      {name: "Crabbe"},
      {name: "Goyle"}
   ],
   color: "baby blue",
   isEvil: true
};

console.log(someObject.friends[0].name);

var movieDB = {
   movies: [
      {
         name: "Star Wars",
         rating: "5 stars",
         watched: true
      },
      {
         name: "Ratotoullie",
         rating: "4.5 stars",
         watched: true
      },
      {
         name: "Sahara",
         rating: "4 stars",
         watched: false
      }
   ]
};

for (var i = 0; i < movieDB.movies.length; i++) {
   if (movieDB.movies[i].watched) {
      console.log("You watched " + movieDB.movies[i].name + " - " + movieDB.movies[i].rating);
   } else {
      console.log("You have not seen " + movieDB.movies[i].name + " - " + movieDB.movies[i].rating);
   }
}
