
angular.module('gallery')
  .component('galleryComponent', {
    templateUrl: 'app/components/gallery/gallery.html',
    controller: GalleryController,
    controllerAs: 'gc'
 })

function GalleryController(GalleryService){
  let gs = GalleryService;

  let gc = this;

  gc.gallery = gs.getGallery()

  this.addPiece  = function(newPiece,addAnother){
    if (!addAnother) {
      gc.toggleForm = !gc.toggleForm
    }
    gs.addPiece(newPiece)
    this.newPiece = null
  }

}