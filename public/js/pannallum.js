pannellum.viewer('panorama', {
    "default": {
        "firstScene": "1fcenter",
        "author": "高雄市立圖書館燕巢分館",
        "sceneFadeDuration": 1000,
        "autoRotate": -2
    },

    "scenes": {
        "1fcenter": {
            "title": "1F中央大廳",
            "hfov": 180,
            "yaw": -70,
            "type": "equirectangular",
            "panorama": "https://andy6804tw.github.io/yenchao-library-web-2018/public/images/pannallum/1f_center.jpg",
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
            "panorama": "https://andy6804tw.github.io/yenchao-library-web-2018/public/images/pannallum/1f_Breastfeeding.jpg",
            "hotSpots": [
                {
                    "pitch": 14.1,
                    "yaw": 1.5,
                    "type": "info",
                    "text": "這裡提供寶貝媽媽們溫馨的小天地，除了有舒適的哺乳環境外，還有貼心小物給媽咪寶貝們使用，讓您帶小小孩到圖書館無後顧之憂。",
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
            "hfov": 180,
            "yaw": 35,
            "type": "equirectangular",
            "panorama": "https://andy6804tw.github.io/yenchao-library-web-2018/public/images/pannallum/1f_child.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 1.5,
                    "type": "info",
                    "text": "兒童閱覽區每週六上午10點到11點有fun心聽故事時間和好玩的延伸活動，歡迎大朋友帶小朋友來聽故事，一起度過愉快的周末。",
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
            "panorama": "https://andy6804tw.github.io/yenchao-library-web-2018/public/images/pannallum/1f_dataRetrieval.jpg",
            "hotSpots": [
                {
                    "pitch": 10,
                    "yaw": 10,
                    "type": "info",
                    "text": "歡迎您來到資訊檢索區，本區共有六台公用電腦提供讀者使用查詢瀏覽資料，登記或預約使用本館電腦，要攜帶本人借閱證或有效身分證明文件於一樓櫃台進行登記。公用電腦每次使用為三十分鐘；於登記使用時間完畢後，無他人預約登記使用，還可以再登記。若現場電腦均有人使用，則採預約方式登記。",                   
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
            "title": "2F中央",
            "hfov": 310,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "https://andy6804tw.github.io/yenchao-library-web-2018/public/images/pannallum/2f_center.jpg",
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": 315,
                    "type": "scene",
                    "text": "前往陽光靜讀區",
                    "sceneId": "2fread"
                },
                {
                    "pitch": 5,
                    "yaw": 185,
                    "type": "scene",
                    "text": "前往開架閱覽區",
                    "sceneId": "2fleft"
                },
                {
                    "pitch": 5,
                    "yaw": 10,
                    "type": "scene",
                    "text": "前往開架閱覽區",
                    "sceneId": "2fright"
                },
                {
                    "pitch": 0,
                    "yaw": 50,
                    "type": "scene",
                    "text": "下樓",
                    "sceneId": "1fcenter",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 15,
                    "yaw": 50,
                    "type": "scene",
                    "text": "上樓",
                    "sceneId": "3fleft",
                }
            ]
        },
        "2fread": {
            "title": "2F陽光靜讀區",
            "hfov": 310,
            "yaw": -120,
            "type": "equirectangular",
            "panorama": "https://andy6804tw.github.io/yenchao-library-web-2018/public/images/pannallum/2f_read.jpg",
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": 280,
                    "type": "info",
                    "text": "陽光靜讀區圓弧形的大片落地窗，加上綠色植栽佈置，有別於一般的閱覽座位，除了可倚窗鳥瞰市區的車水馬龍，亦能享受室內滿眼綠意。這裡除了閱讀也可以沉思或放空，在冬日溫暖陽光下閱讀，讓您同時享受到身心靈的溫暖。",                    
                },
                {
                    "pitch": 20,
                    "yaw": 190,
                    "type": "scene",
                    "text": "返回",
                    "sceneId": "2fcenter",
                    "targetYaw": 0,
                    "targetPitch": 2
                }
            ]
        },
        "2fleft": {
            "title": "二樓左側",
            "hfov": 310,
            "pitch": 10,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "https://andy6804tw.github.io/yenchao-library-web-2018/public/images/pannallum/2f_left.jpg",
            "hotSpots": [
                {
                    "pitch": 10,
                    "yaw": 1.5,
                    "type": "info",
                    "text": "本館一般圖書大多置於本區，依中國圖書編目法逐次放置總類、哲學、宗教、自然科學、應用科學、社會科學及史地、語文、藝術類書藉。此外，另設有介紹台灣人文地理的台灣資料專區、各鄉鎮市志的地方文獻專區及參考書區。閱覽區整體空間設計寬敞明亮、視野通透並配置有造型桌椅供讀者閱覽。t",                    
                },
                {
                    "pitch": 5,
                    "yaw": 185,
                    "type": "scene",
                    "text": "返回",
                    "sceneId": "2fcenter",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }, 
        "2fright": {
            "title": "二樓左側",
            "hfov": 310,
            "pitch": 10,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "https://andy6804tw.github.io/yenchao-library-web-2018/public/images/pannallum/2f_right.jpg",
            "hotSpots": [
                {
                    "pitch": 10,
                    "yaw": 1.5,
                    "type": "info",
                    "text": "本館一般圖書大多置於本區，依中國圖書編目法逐次放置總類、哲學、宗教、自然科學、應用科學、社會科學及史地、語文、藝術類書藉。此外，另設有介紹台灣人文地理的台灣資料專區、各鄉鎮市志的地方文獻專區及參考書區。閱覽區整體空間設計寬敞明亮、視野通透並配置有造型桌椅供讀者閱覽。t", 
                },
                {
                    "pitch": 5,
                    "yaw": 185,
                    "type": "scene",
                    "text": "返回",
                    "sceneId": "2fcenter",
                    "targetYaw": 80,
                    "targetPitch": 2
                }
            ]
        },
        "3fleft": {
            "title": "三樓視聽欣賞區",
            "hfov": 110,
            "yaw": 210,
            "type": "equirectangular",
            "panorama": "https://andy6804tw.github.io/yenchao-library-web-2018/public/images/pannallum/3f_left.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 170,
                    "type": "info",
                    "text": "視聽欣賞區設置有12組視聽專屬設備，沙發座椅寬敞舒適，可供單人或多人一起欣賞。讀者於三樓視聽資料專區選取欲觀賞之影片空盒後，攜至一樓櫃台憑借書證或身分證換取影片光碟後自行操作欣賞，視聽資料區內公用電腦使用時間為一次2小時，看完將光碟及空盒交給服務人員並取回您的證件即可。視聽資料區內之影片分為公播版及家用版，公播版影片限館內欣賞，家用版則可憑借閱證外借回家欣賞，借期14日。",                 
                },
                {
                    "yaw": -17,
                    "type": "scene",
                    "text": "前往多功能教室",
                    "sceneId": "3froom",
                },
                {
                    "yaw": 180,
                    "type": "scene",
                    "text": "前往外文書區",
                    "sceneId": "3fright"
                },
                {
                    "yaw": 220,
                    "type": "scene",
                    "text": "下樓",
                    "sceneId": "2fcenter",
                    "targetYaw": 0
                }
            ]
        },
        "3froom": {
            "title": "三樓多功能教室",
            "hfov": 180,
            "yaw": -35,
            "type": "equirectangular",
            "panorama": "https://andy6804tw.github.io/yenchao-library-web-2018/public/images/pannallum/3f_room.jpg",
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": -5,
                    "type": "info",
                    "text": "多功能教室為外圓內方之教室，內部設備除課桌椅外並配有投影機、投影幕及數位化多功能講桌。每年均舉辦許多課程活動，舉凡閱讀推廣、藝文研習、多元文化課程、志工增能、親子共讀、社區社團共創合作、在地人文史地教學、劇團互動表演等均屬之。",                   
                },
                {
                    "pitch": 5,
                    "yaw": -85,
                    "type": "scene",
                    "text": "返回視聽欣賞區",
                    "sceneId": "3fleft"
                }
            ]
        }, "3fright": {
            "title": "三樓外文書區",
            "hfov": 180,
            "yaw": -35,
            "type": "equirectangular",
            "panorama": "https://andy6804tw.github.io/yenchao-library-web-2018/public/images/pannallum/3f_right.jpg",
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": -85,
                    "type": "info",
                    "text": "本區設有外文書約1千餘冊，包含適合教導兒童讀看之人文科普、童話故事、歷史地理相關西文書，及適合成人閱讀之各類經典文學西文書。",                   
                },
                {
                    "pitch": 0,
                    "yaw": 5,
                    "type": "scene",
                    "text": "前往視聽欣賞區",
                    "sceneId": "3fleft"
                },
                {
                    "yaw": -45,
                    "type": "scene",
                    "text": "下樓",
                    "sceneId": "2fcenter",
                    "targetYaw": 0
                },
                {
                    "yaw": -125,
                    "type": "scene",
                    "text": "前往數位機會中心電",
                    "sceneId": "3fcomputer"
                }
            ]
        }, 
        "3fcomputer": {
            "title": "三樓數位機會中心",
            "hfov": 180,
            "yaw": -55,
            "pitch": 5,
            "type": "equirectangular",
            "panorama": "https://andy6804tw.github.io/yenchao-library-web-2018/public/images/pannallum/3f_computer.jpg",
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": -5,
                    "type": "info",
                    "text": "本館位處偏鄉，是以教育部為平衡城鄉間數位資訊取得之落差，於本館設置數位機會中心。中心內建置有電腦教室，每年開辦多樣的免費電腦及平板手機等資訊課程、各類電腦軟體應用實作課程及認證課程；並在產業經濟、社會關懷、文化典藏方面關懷在地。此外，數位機會中心數位學伴計畫亦透過遠距線上教學，輔導陪伴偏鄉學童課後學習及心靈陪伴。",                   
                },
                {
                    "pitch": 5,
                    "yaw": -155,
                    "type": "scene",
                    "text": "返回外文書區",
                    "sceneId": "3fright"
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


if (window.innerHeight > window.innerWidth) {
    alert("若要更好的體驗請將手機橫擺，並點擊右上方進入全螢幕模式＾.＾");
}
