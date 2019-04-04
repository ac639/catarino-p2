// requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  

// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

animate();

var mLastFrameTime = 0;
var mWaitTime = 5000; //time in ms
function animate() {
    requestAnimFrame( animate );
	var currentTime = new Date().getTime();
	if (mLastFrameTime === 0) {
		mLastFrameTime = currentTime;
	}

	if ((currentTime - mLastFrameTime) > mWaitTime) {
		swapPhoto();
		mLastFrameTime = currentTime;
	}
}

/************* DO NOT TOUCH CODE ABOVE THIS LINE ***************/

function swapPhoto() {
	//Add code here to access the #slideShow element.
	//Access the img element and replace its source
	//with a new image from your images array which is loaded 
	//from the JSON string
	console.log('swap photo');
}






// Counter for the mImages array
var mCurrentIndex = 0;


	// XMLHttpRequest variable
	var mRequest = new XMLHttpRequest();

	var file = "images.json"; /** File locaiton of images.json **/

	mRequest.onreadystatechange = function() {
		/** Execute function when request is ready **/
		console.log('Called');
		if (mRequest.readyState == 4 && mRequest.status == 200) { /** Check if readyState = 4 and status = 200 **/
			try {
				var data = JSON.parse(mRequest.responseText);
				/** Parse the JSON file from the mRequest and store in variable **/
				//console.log(data);

			} catch (err) {
				console.log(err.message);
			}

			organizeData(data); /** Call function that will do another task and pass the parsed data **/

		}

	}
	mRequest.open("GET", file,true);
	mRequest.send();

function organizeData(data) {
    console.log(data); /** Log the array for testing purposes **/

	data.images.forEach((item) => { /** Start the loop to iterate the images array in the json parsed data **/
		Object.entries(item).forEach(([key, val]) => { /** Iterate for each key val pair **/
			//console.log(`${JSON.stringify(val)}`);
			console.log(`${key}-${JSON.stringify(val)}`); /**Print out the key and print out the val as string for testing purposes**/
		});
	});
}

// Array holding GalleryImage objects (see below).
var mImages = [];

// Holds the retrived JSON information
var mJson;

// URL for the JSON to load by default
// Some options for you are: images.json, images.short.json; you will need to create your own extra.json later
var mUrl = 'insert_url_here_to_image_json';


//You can optionally use the following function as your event callback for loading the source of Images from your json data (for HTMLImageObject).
//@param A GalleryImage object. Use this method for an event handler for loading a gallery Image object (optional).
function makeGalleryImageOnloadCallback(galleryImage) {
	return function(e) {
		galleryImage.img = e.target;
		mImages.push(galleryImage);
	}
}

$(document).ready( function() {
	// This initially hides the photos' metadata information
	$('.details').eq(0).hide();


});

window.addEventListener('load', function() {
	
	console.log('window loaded');

}, false);

function GalleryImage() {
	this.location = '';
	this.desc = '';
	this.dte = '';
	this.img = '';

}