import { Dispatch, SetStateAction } from "react"
import { TimeMsgContextProps } from "../../utils/message/TimeMsgContext"

export const previewImage = (
    file: Blob, 
    message: TimeMsgContextProps,
    setHeight: Dispatch<SetStateAction<number>>,
    setWidth: Dispatch<SetStateAction<number>>,
    setSelectedFile: Dispatch<SetStateAction<string | null>>
    ) => {
    try {
      if (!file) return
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        const image_url = event.target?.result;
        const image = document.createElement('img')
        if (!image_url) return message.setMessage({value:'no valid image.', status: 'error'})
        if (image_url.toString().match('video')) return message.setMessage({value:'Only images are accepted here. Please use the "Add video" button if you want to share a video.', status: 'error'})
        image.src = image_url.toString()
        image.onload = (e:any) => {
          setHeight(e.target?.height)
          setWidth(e.target?.width)
        }
        reader.onloadend = () => {
          if (!reader.result) return;
          setSelectedFile(reader.result.toString())
        }
        reader.onerror = () => {
          message.setMessage({value: 'Something went wrong, please try to use a different image.', status: 'error'})
        }
        } 
    } catch (err) {
      message.setMessage({value: 'Something went wrong, please try to use a different image.', status: 'error'})
    }
}


// export const importFileandPreview = (file: Blob, revoke?: boolean) => {
//   return new Promise((resolve, reject) => {
//     window.URL = window.URL || window.webkitURL;
//     let preview = window.URL.createObjectURL(file);
//     if (revoke) {
//       window.URL.revokeObjectURL(preview);
//     }
//     setTimeout(() => {
//       resolve(preview)
//     }, 100)
//   });
// }

// export const generateVideoThumbnail = async (videoFile: Blob, numberOfThumbnails: number) => {
//   let thumbnail = []
//   let fractions = []
//   return new Promise(async (resolve, reject) => {
//     if (!videoFile.type.includes('video')) reject('not a valid file.');
//     await getVideoDuration(videoFile).then(async (duration) => {
//       for (let i = 0; i <= duration; i += duration / numberOfThumbnails) {
//         fractions.push(Math.floor(i));
//       }
//       let promiseArray = fractions.map((time) => {
//         return getVideoThumbnail(videoFile, time)
//       })
//       await Promise.all(promiseArray).then((res) => {
//         res.forEach((res) => {
//           thumbnail.push(res);
//         });
//         resolve(thumbnail);
//       }).catch((err) => {
//         console.error(err);
//       }).finally((res) => {
//         resolve(thumbnail);
//       })
//     })
//     reject('Something went wrong')
//   });
// }

// export const getVideoThumbnail = (file: Blob, videoTimeInSeconds: number) => {
//   return new Promise((resolve, reject) => {
//     if (file.type.match('video')) {
//       importFileandPreview(file).then((urlOfFile) => {
//         const video = document.createElement('video');
//         const timeupdate = () => {
//           if (snapImage()) {
//             video.removeEventListener('timeupdate', timeupdate)
//             video.pause();
//           }
//         };
//         const snapImage = () => {
//           var canvas = document.createElement('canvas');
//           canvas.width = video.videoWidth
//           canvas.height = video.videoHeight
//           canvas.getContext('2d')?.drawImage(video, 0, 0, canvas.width, canvas.height);
//           const image = canvas.toDataURL();
//           const success = image.length > 100000;
//           if (success) {
//             URL.revokeObjectURL(urlOfFile as string);
//             resolve(image);
//           }
//           return success;
//         };
//         video.addEventListener('timeupdate', timeupdate);
//         video.preload = 'metadata'
//         video.src = urlOfFile as string
//         video.muted = true
//         video.playsInline = true
//         video.currentTime = videoTimeInSeconds
//         video.play()
//       })
//     } else {
//       reject('File not valid')
//     }
//   });
// }

// export const getVideoDuration = (videoFile: Blob) => {
//   return new Promise((resolve, reject) => {
//     if (videoFile) {
//       if (videoFile.type.match('video')) {
//         importFileandPreview(videoFile).then((url) => {
//           let video = document.createElement('video');
//           video.addEventListener('loadeddata', () => {
//             resolve(video.duration);
//           });
//           video.preload = 'metadata'
//           video.src = url as string
//           video.muted = true
//           video.playsInline = true
//           video.play();
//         })
//       }
//     } else {
//       reject(0)
//     }
//   })
// }
