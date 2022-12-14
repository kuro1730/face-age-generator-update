import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
    selector: 'upload-manager',
    templateUrl: './upload-manager.component.html',
    styleUrls: ['./upload-manager.component.css']
})
export class UploadManagerComponent implements OnInit {
    toggleUpload:boolean;
    isHovering: boolean;
    files: File[] = [];
 
    constructor() { }

    ngOnInit(): void {
    }
    
    toggleHover(event: boolean) {
        this.isHovering = event;
    }

    // onDrop(event ) {
    //     for (let i = 0; i < (event.target as HTMLInputElement).files.length; i++) {
    //         console.log('uploadManager adding file: ', (event.target as HTMLInputElement).files.item(i));
    //         this.files.push((event.target as HTMLInputElement).files.item(i));
            
    //     }
    // }
    onDrop(files: FileList) {
        for (let i = 0; i < files.length; i++) {
            console.log('uploadManager adding file: ', files.item(i));
            this.files.push(files.item(i));
        }
        
       
        // img.src = reader.result.toString();
        // console.log("IMG=>", reader.result);
        
    }
    removeFile() {
        // Delete the item from fileNames list
        // delete file from FileList
        this.files.splice(0, 1);
       }
    
    // rotateImage(){
    //     let reader = new FileReader();
    //     let img = new Image;
    //     reader.readAsDataURL(this.files[0]);
    //     reader.onload=(e)=>{let log = reader.result as string
            
    //         img.src=log;
    //         console.log("IMG=>",img);
    //     };
    //     img.style.transform ="rotate(90deg)";
        
    //     // let rotatedFile = this.dataURLtoFile(img.src,this.files[0].name);
    //     // // this.files=[];
    //     // // this.files.push(rotatedFile);
        
    //     // let reader = new FileReader();
    //     // reader.readAsDataURL(this.files[0]);
    //     // let img = new Image;
    //     // img.src = reader.result.toString();
    //     // let canvas = document.createElement('canvas');
    //     // canvas.width = img.width;
    //     // canvas.height = img.height;
    //     // let canvastx = canvas.getContext("2d");
    //     // canvastx.save() ;
    //     // canvastx.translate ( img.width / 2, img.height / 2) ;
    //     // canvastx.rotate(90);
    //     // let imgData = canvastx.createImageData(img.width, img.height);
    //     // canvastx.putImageData(imgData);
    // }

    // dataURLtoFile(dataurl, filename) {
    //     var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    //         bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    //         while(n--){
    //             u8arr[n] = bstr.charCodeAt(n);
    //         }
    //         return new File([u8arr], filename, {type:mime});
    //     }
}
