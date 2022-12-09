import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FacebookService } from 'src/app/service/facebook/facebook.service';
import { GithubService } from 'src/app/service/github/github.service';
import { ILinkedInRedirectURL, LinkedinService } from 'src/app/service/linkedin/linkedin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private linkedinService: LinkedinService,
    private fbService: FacebookService,
    private githubService: GithubService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  isLoggedIn: boolean = false

  signInWithFB(): void {
    this.fbService.facebookLogin().subscribe({
      next: (response: any) => {
        console.log("success :) ", response);
        this.redirectURL = response.body
        window.open(this.redirectURL!.url, "_self")
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }

  redirectURL: ILinkedInRedirectURL | null = null

  signInWithLinkedIn(): void {
    console.log("signInWithLinkedIn clicked");
    this.linkedinService.linkedInLogin().subscribe({
      next: (value: HttpResponse<ILinkedInRedirectURL>) => {
        console.log(value);
        this.redirectURL = value.body
        console.log("success :) ", value);
        window.open(this.redirectURL!.url, "_self")
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }

  signInWithGithub(): void {
    this.githubService.githubLogin().subscribe({
      next: (value: HttpResponse<ILinkedInRedirectURL>) => {
        console.log(value);
        this.redirectURL = value.body
        console.log("success :) ", value);
        window.open(this.redirectURL!.url, "_self")
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }
  
  signout(): void {
    // try {
    //   this.authService.signOut();
    //   this.isLoggedIn = false
    // } catch (error) {
    //   console.error(error);
    // }
  }

  
  private readonly FOLDER_KEY: string = "folderName"
  private readonly FILE_KEY: string = "file"

  offerDisplayedFileName: string = "offerDisplayedFileName"
  offerLetterDocStatus: string = "offerLetterDocStatus"
  isOfferLetterFileUploading: boolean = false

  fileUpload(event: any): void {
    this.offerLetterDocStatus = ""
    let files = event.target.files
    if (files && files.length) {
      let file = files[0]
      console.log("uploading file");
      this.uploadFile(file).subscribe({
        next: (value) => {
          console.log(value);
        },
        error: (err) => {
          console.error(err);
        }
      })
      
    }
  }

  uploadFile(file: File): Observable<any> {
    return new Observable((observer) => {
      console.log("uploadFile");
      
      let ext = this.getFileExtension(file.name)
      let folderPath: string = "AudioFiles"

      let formData = new FormData();
      let fileURL = 'https://adhyatmavani.swabhavtechlabs.com/uploads/' + folderPath + "/" + "test.mp3";
      console.log("File URL:", fileURL);
      formData.append(this.FILE_KEY, file, "test.mp3");
      // Appending the folder name.
      formData.append(this.FOLDER_KEY, folderPath)

      // calling the API present in phpPath(server)
      this.http.post<any>('https://adhyatmavani.swabhavtechlabs.com/uploads/imageUpload.php', formData).subscribe((data: any) => {
        //  for delete # need to check later #niranjan
        console.log("Server data :", data)
        if (!data.isUploadSuccessful) {
          observer.error("Upload failed")
          return
        }
        observer.next(fileURL)
      }, (error: any) => {
        console.log("upload file error :", error)
        if (error.statusText == "Unknown Error") {
          observer.error("Check internet connection.")
          return
        }
        observer.error("Some error occurred.")
      })
    });
  }
  
  getFileExtension(filename: string): string {
    var parts = filename.split('.');
    return "." + parts[parts.length - 1];
  }
}
