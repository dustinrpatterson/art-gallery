angular.module('gallery')
  .service('GalleryService', function($http){

  let baseUrl = 'https://adventures-in-music.herokuapp.com/api/playlists'


  this.getGallery = function(cb){
    // $http.get(baseUrl).then(cb)
    return gallery
  }

  this.addPiece = function(newPiece){
    gallery.push(newPiece)
  }


    let gallery =[
  {
    artist: 'Van Gogh',
    title: 'Stary Night',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
    year: 1889
  },{
    artist: 'Leonardo da Vinci',
    title: 'Mona Lisa',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg/687px-Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg',
    year: 1503
  },{
    artist: 'Bosch',
    title: 'The Garden of Earthly Delights',
    url: 'http://www.artinthepicture.com/artists/Hieronymus_Bosch/earthly_delights.jpeg',
    year: 1515 
  }
];
  })