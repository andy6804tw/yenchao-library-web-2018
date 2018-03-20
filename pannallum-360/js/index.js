pannellum.viewer('panorama', {
    "default": {
        "firstScene": "2fcenter",
        "author": "高雄市立圖書館燕巢分館",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "1fcenter": {
            "title": "1F中央大廳",
            "hfov": 110,
            "yaw": -70,
            "type": "equirectangular",
            "panorama": "./../images/1f_center.jpg",
            "autoLoad": true,
            "hotSpots": [
                {
                    "pitch": -2.1,
                    "yaw": 170.9,
                    "type": "scene",
                    "text": "上樓",
                    "sceneId": "2fcenter"
                }, 
                {
                    "pitch": -2.1,
                    "yaw": 243,
                    "type": "scene",
                    "text": "前往哺集乳室",
                    "sceneId": "Breastfeeding"
                }, 
                {
                    "pitch": -2.1,
                    "yaw": 260.9,
                    "type": "scene",
                    "text": "前往兒童閱覽區",
                    "sceneId": "read"
                },
                {
                    "pitch": -2.1,
                    "yaw": 80,
                    "type": "scene",
                    "text": "前往資訊檢索區",
                    "sceneId": "dataRetrieval"
                }
            ]
        },
        "Breastfeeding": {
            "title": "1F哺集乳室",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "./../images/1f_Breastfeeding.jpg",
            "hotSpots": [
                {
                    "pitch": 14.1,
                    "yaw": 1.5,
                    "type": "info",
                    "text": "這裡提供寶貝媽媽們溫馨的小天地，除了有舒適的哺乳環境外，還有貼心小物給媽咪寶貝們使用，讓您帶小小孩到圖書館無後顧之憂。",
                    "URL": "https://artbma.org/"
                },
                {
                    "pitch": -0.6,
                    "yaw": 100,
                    "type": "scene",
                    "text": "返回大廳",
                    "sceneId": "1fcenter",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "read": {
            "title": "1F兒童閱讀區",
            "hfov": 110,
            "yaw": 35,
            "type": "equirectangular",
            "panorama": "./../images/1f_child.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 1.5,
                    "type": "info",
                    "text": "兒童閱覽區每週六上午10點到11點有fun心聽故事時間和好玩的延伸活動，歡迎大朋友帶小朋友來聽故事，一起度過愉快的周末。",
                    "URL": "https://artbma.org/"
                },
                {
                    "pitch": -0.6,
                    "yaw": 250,
                    "type": "scene",
                    "text": "返回大廳",
                    "sceneId": "1fcenter",
                    "targetYaw": 60,
                    "targetPitch": 2
                }
            ]
        }, "dataRetrieval": {
            "title": "1F資料檢索區",
            "hfov": 110,
            "yaw": 35,
            "pitch": 12.1,
            "type": "equirectangular",
            "panorama": "./../images/1f_dataRetrieval.jpg",
            "hotSpots": [
                {
                    "pitch": 10,
                    "yaw": 10,
                    "type": "info",
                    "text": "歡迎您來到資訊檢索區，本區共有六台公用電腦提供讀者使用查詢瀏覽資料，登記或預約使用本館電腦，要攜帶本人借閱證或有效身分證明文件於一樓櫃台進行登記。公用電腦每次使用為三十分鐘；於登記使用時間完畢後，無他人預約登記使用，還可以再登記。若現場電腦均有人使用，則採預約方式登記。",
                    "URL": "https://artbma.org/"
                },
                {
                    "pitch": -0.6,
                    "yaw": 280,
                    "type": "scene",
                    "text": "回中央大廳",
                    "sceneId": "1fcenter",
                    "targetYaw": 180,
                    "targetPitch": 2
                }
            ]
        },
        "2fcenter": {
            "title": "2F陽光靜讀區",
            "hfov": 310,
            "yaw": -120,
            "type": "equirectangular",
            "panorama": "./../images/2f_center.jpg",
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": 280,
                    "type": "info",
                    "text": "陽光靜讀區圓弧形的大片落地窗，加上綠色植栽佈置，有別於一般的閱覽座位，除了可倚窗鳥瞰市區的車水馬龍，亦能享受室內滿眼綠意。這裡除了閱讀也可以沉思或放空，在冬日溫暖陽光下閱讀，讓您同時享受到身心靈的溫暖。",
                    "URL": "https://artbma.org/"
                },
                {
                    "pitch": -0.6,
                    "yaw": 240,
                    "type": "scene",
                    "text": "Mason Circle",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -0.6,
                    "yaw": 150,
                    "type": "scene",
                    "text": "Mason Circle",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 20,
                    "yaw": 190,
                    "type": "scene",
                    "text": "上樓",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -30,
                    "yaw": 190,
                    "type": "scene",
                    "text": "下樓",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "house": {
            "title": "",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/G7t9QD9.jpg",
            "hotSpots": [
                {
                    "pitch": 14.1,
                    "yaw": 1.5,
                    "type": "info",
                    "text": "Baltimore Museum of Art",
                    "URL": "https://artbma.org/"
                },
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "text": "Mason Circle",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
    }
});
