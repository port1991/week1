// creating the main window


var mainWindow = Ti.UI.createWindow({
	backgroundImage: 'grid2.png',
	//backgroundColor : "white",
	fullscreen : true,
	title : "Miguel's Camera"
});

// camera button to start camera
var btnCamera = Ti.UI.createButton({
	backgroundImage: 'Circle_Yellow.png',
	font : {fontSize:23,fontWeight: "bold"},
	color: 'black',
	title: "Open Camera",
	height: 200,
	width: 200,
});
btnCamera.addEventListener('click', function(e){
	Titanium.Media.showCamera({
		success:function(event) {
			// called when media returned from the camera
			Ti.API.debug('Our type was: '+event.mediaType);
			if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				var imageView = Ti.UI.createImageView({
					width:win.width,
					height:win.height,
					image:event.media
				});
				win.add(imageView);
			} else {
				alert("got the wrong type back ="+event.mediaType);
			}
		},
		cancel:function() {
			// called when user cancels taking a picture
		},
		error:function(error) {
			// called when there's an error
			var a = Titanium.UI.createAlertDialog({title:'Camera'});
			if (error.code == Titanium.Media.NO_CAMERA) {
				a.setMessage('Please run this test on device');
			} else {
				a.setMessage('Unexpected error: ' + error.code);
			}
			a.show();
		},
		saveToPhotoGallery:true,
	    // allowEditing and mediaTypes are iOS-only settings
		allowEditing:true,
		mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
	});
});


mainWindow.add(btnCamera);
mainWindow.open();
exports.mainWindow = mainWindow;